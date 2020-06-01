const jsdom = require('jsdom')
const { JSDOM } = jsdom
const axios = require('axios');

const crawler = async (url, source) => {
    
    try {
        const result = await axios.get(url)
        const dom = new JSDOM(result.data)


        try {
            if (source.toUpperCase() == 'LINKEDIN'){
                const indexFinish = result.data.search(`"--></code><code id="dust-var-resultsPerPage"`)
                const indexStart = result.data.search(`<code id="dust-var-totalResults" style="display: none;"><!--`)
                const sub = result.data.substring(indexStart + 61, indexFinish)
                var jobs = parseInt(sub, 10)
            }
            if (source.toUpperCase() == 'CATHO'){
                var jobs = parseInt(dom.window.document.querySelector('h1').textContent.split('\n')[0].split(' ')[0], 10) || -1
            }

        }catch(err){
            var jobs = -1
        }
        return jobs;

    }catch (err){
        const jobs = -1
        return jobs;
    }
}

module.exports = crawler;