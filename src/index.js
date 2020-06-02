const path = require('path')
const express = require('express')
const cors = require('cors');
const nujunks = require('nunjucks')


class App {
    constructor(){
        this.express = express();

        this.views()
        this.middleware();
        this.routes();
    }

    middleware(){

        require('./database')
        this.express.use(express.urlencoded({ extended : false}))
        this.express.use(express.json())
        this.express.use(cors())

    }

    views(){
        nujunks.configure(path.resolve(__dirname, 'views'), {
            watch: true,
            express: this.express,
            autoescape: true
        })

        this.express.use(express.static(path.resolve(__dirname, '..', 'public')))
        this.express.set('view engine', 'njk')

    }

    routes(){
        this.express.use(require('./routes'))
    }
}



module.exports = new App().express