import { Request, Response } from 'express'
import weekModel from '../model/weeks'

class WeeksController{
    constructor(){
    }

    public index = async (req: Request, res: Response): Promise<Response> => {

        const weeks  = await weekModel.find().populate('languages')
        return res.json({'weeks': weeks})
    }

    public view = async (req: Request, res:Response): Promise<Response> => {
        const { id } = req.params

        if(!id){
            return res.status(400).json({"message": "id must be provided."});
        }
        try {
            const query = await weekModel.findById(id).populate('languages');
            return res.json({"week": query})            
        } catch(error){
            return res.status(404).json({"message": "week not found."})
        }
    }
}

export default new WeeksController;