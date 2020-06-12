const JobsSchema = require('../Models/jobs')
const crawler = require('../services/crawler')
const { getUrl } = require('./functions')

const languages = {
    LINKEDIN: {
        Python: 'Python', 
        Java: 'Java', 
        Javascript: 'Javascript', 
        C: 'C', 
        C_plusPlus: 'C%2B%2B', 
        C_sharp: 'C%23'
    },
    CATHO: {
        Python: 'Python', 
        Java: 'Java', 
        Javascript: 'Javascript', 
        C: 'C', 
        C_plusPlus: 'C_plusPlus', 
        C_sharp: 'C_sharp'
    }
}

module.exports = {
    async create(req, res){
        const { source, week, state } = req.query
        for (language in languages[source]){
            const base_url = getUrl(source, state, languages[source][language])
            const result = await crawler(base_url, source)
            await JobsSchema.create({
                language: language,
                week_date: week,
                source_site: source,
                state: state,
                jobs: result
            })
        }

        return res.status(201).json({message: 'Ok'})
    }
}