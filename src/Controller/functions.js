function getUrl(state, language){
    
    if (state == 'BSB'){
        return `https://www.linkedin.com/jobs/search?keywords=${language}&location=Bras%C3%ADlia%2C%20Federal%20District%2C%20Brazil&trk=homepage-jobseeker_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
    }

    if (state = 'SP') {
        return `https://www.linkedin.com/jobs/search?keywords=${language}&location=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil&trk=homepage-jobseeker_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
    }

    if (state == 'MG') {
        return `https://www.linkedin.com/jobs/search?keywords=${language}&location=Belo%20Horizonte%2C%20Minas%20Gerais%2C%20Brazil&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
    }

    if (state = 'SC'){
        return `https://www.linkedin.com/jobs/search?keywords=${language}&location=Florian%C3%B3polis%2C%20Santa%20Catarina%2C%20Brazil&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
    }
}

module.exports = {
    getUrl: getUrl
}