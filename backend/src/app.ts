import express from 'express'
import cors from 'cors'

class Route{
    public app: express.Application
    public port: Number
    
    constructor(initApp: {port: Number, route: express.Router}){
        this.app = express();
        this.port = initApp.port;

        this.config();
        this.routes(initApp.route);
    }

    private config(){
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
        this.app.use(cors())
    }

    private routes(rout: express.Router){
        this.app.use(rout)
    } 

    public listen(){
        this.app.listen(this.port)
    }
}


export default Route;