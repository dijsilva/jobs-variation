const weeksSchema = require('../Models/weeks')
const jobsSchema = require('../Models/jobs')

module.exports = {
    async index(req, res){
        const all = await weeksSchema.find().populate('languages', '-_id -createdAt -updatedAt -week_date')

        return res.render('main/index', {all: JSON.stringify(all[0])})
    }
}