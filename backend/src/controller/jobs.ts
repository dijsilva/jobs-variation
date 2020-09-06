import {Request, Response} from 'express'
import job from '../model/jobs'

class JobsController {
    constructor(){
    }

    public index = async (req: Request, res: Response): Promise<Response> => {
        try {
            const jobs = await job.find();
            return res.json({"users": jobs})
        } catch(e){
            return res.json({'message': 'jobs not found'})
        }
    }

    public view = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params
        
        if (!id){
            return res.status(400).json({'message': 'id must be provided.'})
        }

        try {
            const query = await job.findById(id)
            return res.json({'jobs': query})
        } catch(error){
            return res.status(500).json({"message": "no one job found"})
        }
    }
}

export default new JobsController;