const jsdom = require('jsdom')
const { JSDOM } = jsdom
const axios = require('axios');

const crawler = async (url) => {
    
    try {
        const result = await axios.get(url)
        const dom = new JSDOM(result.data);

        try {
            var jobs = parseInt(dom.window.document.querySelector("span.results-context-header__job-count").textContent, 10)
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