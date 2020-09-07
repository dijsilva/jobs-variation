import {Request, Response} from 'express'
import jobModel from '../model/jobs'
import { IJJobsSchema } from '../interfaces/jobs'

class JobsController {
    constructor(){
    }

    public index = async (req: Request, res: Response): Promise<Response> => {
        try {
            const jobs = await jobModel.find();
            return res.json({"users": jobs})
        } catch(e){
            return res.json({'message': 'jobs not found'})
        }
    }

    public store = async (req: Request, res: Response) => {
        const { jobs, language, source_site, state, week_date } = req.body as IJJobsSchema

        if(!language || !state || !source_site || !week_date || !jobs){
            return res.status(400).json({"message": "all data must be providaded."})
        }

        try {
            await jobModel.create({jobs, language, source_site, state, week_date})
            return res.status(201)
        }catch(error){
            return res.status(500).json({"message": "error in create new job record."})
        }
    }

    public view = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params
        
        if (!id){
            return res.status(400).json({'message': 'id must be provided.'})
        }

        try {
            const query = await jobModel.findById(id)
            return res.json({'jobs': query})
        } catch(error){
            return res.status(404).json({"message": "no one job found"})
        }
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params
        const updates = req.body as IJJobsSchema

        if (!updates){
            return res.status(400).json({"message": "all data must be provided."})
        }

        try{
            const job_updated = await jobModel.findByIdAndUpdate(id, updates, {new: true})
            return res.json({"jobs": job_updated})
        } catch(error){
            return res.status(500).json({'message': 'operation failed.'})
        }
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params

        if (!id){
            return res.status(400).json({"message": "job not found."})
        }
        try {
            await jobModel.findByIdAndDelete(id)
            return res.status(200)
        } catch(error){
            return res.status(500).json({"message": "error for delete job."})
        }
    }
}

export default new JobsController;