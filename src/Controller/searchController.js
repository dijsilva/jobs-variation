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

            const query = await JobsSchema.findOne({'week_date': week, 'language': language, 'source_site': source, 'state': state})

            if (!query && result > 0){
                await JobsSchema.create({
                    language: language,
                    week_date: week,
                    source_site: source,
                    state: state,
                    jobs: result
                })
            } else {
                console.log('Já criado: ', language, result)
            }
        }
        return res.status(201).json({message: 'Ok'})
    }
}