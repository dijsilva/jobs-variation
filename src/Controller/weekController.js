const weeksSchema = require('../Models/weeks')
const jobsSchema = require('../Models/jobs')

module.exports = {
    async index(req, res){
        const all = await weeksSchema.find()

        return res.status(200).json(all)
    },
    async create(req, res){
        const { week } = req.params
        const query = await jobsSchema.find({'week_date': week})
        const check = await weeksSchema.findOne({'week': week})

        if (!check){
            try {
            await weeksSchema.create({
                week: new Date(week),
                languages: query
            })
            }catch(err){
                return res.status(400).json({message: 'An error ocurred.'})
            }
            return res.status(201).json({message: 'Ok'})
        }else {
            return res.status(400).json({message: 'Data alredy exists for this week.'})
        }
    },

    async show(req, res){

        const { week } = req.params
        const result = await weeksSchema.findOne({week: week}).populate('languages')
        if (!result){
            return res.status(404).json({message: 'Data not found for this week.'})    
        }

        return res.status(200).json(result)
    }
}