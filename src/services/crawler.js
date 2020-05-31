const jsdom = require('jsdom')
const { JSDOM } = jsdom
const axios = require('axios');

const crawler = async (url, source) => {
    
    try {
        const result = await axios.get(url)
        const dom = new JSDOM(result.data)

        try {
            if (source.toUpperCase() == 'LINKEDIN'){
                var jobs = parseInt(dom.window.document.querySelector("span.results-context-header__job-count").textContent, 10)
            }
            if (source.toUpperCase() == 'CATHO'){
                var jobs = parseInt(dom.window.document.querySelector('h1').textContent.split('\n')[0].split(' ')[0], 10)
                
            }

        }catch(err){
            var jobs = parseInt('NaN', 10)
        }
        return jobs;

    }catch (err){
        const jobs = parseInt('NaN', 10)
        return jobs;
    }
}

module.exports = crawler;