const express = require('express')
const cors = require('cors');


class App {
    constructor(){
        this.express = express();

        this.middleware();
        this.routes();
    }

    middleware(){

        require('./database')
        this.express.use(express.json())
        this.express.use(cors())

    }

    routes(){
        this.express.use(require('./routes'))
    }
}



module.exports = new App().express