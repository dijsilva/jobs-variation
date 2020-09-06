import { Request, Response } from 'express'
import week from '../model/weeks'

class WeeksController{
    constructor(){
    }

    public index = async (req: Request, res: Response): Promise<Response> => {

        const weeks  = await week.find().populate('languages')
        return res.json({'weeks': weeks})
    }
}

export default new WeeksController;