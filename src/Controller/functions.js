function getUrl(source, state, language){
    if (source.toUpperCase() == 'LINKEDIN'){
        if (state.toUpperCase() == 'BSB'){
            return `https://www.linkedin.com/jobs/search?keywords=${language}&location=Bras%C3%ADlia%2C%20Federal%20District%2C%20Brazil&trk=homepage-jobseeker_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
        }
    
        if (state.toUpperCase() == 'SP') {
            return `https://www.linkedin.com/jobs/search?keywords=${language}&location=S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%2C%20Brazil&trk=homepage-jobseeker_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
        }
    
        if (state.toUpperCase() == 'MG') {
            return `https://www.linkedin.com/jobs/search?keywords=${language}&location=Belo%20Horizonte%2C%20Minas%20Gerais%2C%20Brazil&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
        }
    
        if (state.toUpperCase() == 'SC'){
            return `https://www.linkedin.com/jobs/search?keywords=${language}&location=Florian%C3%B3polis%2C%20Santa%20Catarina%2C%20Brazil&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0`
        }
    }
    if (source.toUpperCase() == 'CATHO'){
        if (state.toUpperCase() == 'BSB'){
            return `https://www.catho.com.br/vagas/${language}/brasilia-df/?q=${language}&cidade_id%5B0%5D=2716`
        }
    
        if (state.toUpperCase() == 'SP') {
            return `https://www.catho.com.br/vagas/${language}/sao-paulo-sp/?q=${language}&cidade_id%5B0%5D=783`
        }
    
        if (state.toUpperCase() == 'MG') {
            return `https://www.catho.com.br/vagas/${language}/belo-horizonte-mg/?q=${language}&cidade_id%5B0%5D=4096`
        }
    
        if (state.toUpperCase() == 'SC'){
            return `https://www.catho.com.br/vagas/${language}/florianopolis-sc/?q=${language}&cidade_id%5B0%5D=9372`
        }
    }
}

module.exports = {
    getUrl: getUrl
}