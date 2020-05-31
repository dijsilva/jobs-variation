const JobsSchema = require('../Models/jobs')
const crawler = require('../services/crawler')
const { getUrl } = require('./functions')

const languages = {
    Python: 'Python', 
    Java: 'Java', 
    Javascript: 'Javascript', 
    C: 'C', 
    C_plusPlus: 'C%2B%2B', 
    C_sharp: 'C%23&'
}

module.exports = {
    async create(req, res){
        const { source, week, state } = req.query
        for (language in languages){
            const base_url = getUrl(source, state, languages[language])
            const result = await crawler(base_url, source)

            
            // console.log(base_url)
            // await JobsSchema.create({
            //     language: languages[language],
            //     week_date: week,
            //     source_site: source,
            //     state: 'Brasília',
            //     jobs: result
            // })
        }

        return res.status(201).json({message: 'Ok'})
    }

}



{/* <h1 class="sc-jlyJG kraDbN">87 vagas de emprego de Javascript em Florianópolis, SC</h1>
<h1 class="sc-jlyJG kraDbN">789 vagas de emprego de Java em São Paulo, SP</h1>
<h1 class="sc-jlyJG kraDbN">17 vagas de emprego de Java em Florianópolis, SC</h1>
<h1 class="sc-jlyJG kraDbN">86 vagas de emprego de Java em Brasilia, DF</h1>
<h1 class="sc-bRBYWo bzbUoz">177 vagas de emprego de Java em Belo Horizonte, MG</h1>
<h1 class="sc-bRBYWo bzbUoz">20 vagas de emprego de Python em Brasilia, DF</h1> */}