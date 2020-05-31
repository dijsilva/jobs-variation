const weeksSchema = require('../Models/weeks')
const jobsSchema = require('../Models/jobs')

module.exports = {
    async create(req, res){
        const query = await jobsSchema.find({'week_date': '2020-05-30'})

        try {
            await weeksSchema.create({
                week: new Date(),
                languages: query
            })
        }catch(err){
            return res.status(400).json({message: 'An error ocurred.'})
        }

        return res.status(201).json({message: 'Ok'})
    }
}