import express from 'express';
import mainRouter from './router';
import bodyParser from 'body-parser';
import cors from 'cors';

export default class Server {

    expressInstance: express.Express;

    constructor() {
        this.expressInstance = express();
        this.middlewareSetup();
        this.routingSetup();
    }

    private middlewareSetup() {
        //Setup requests format parsing (Only JSON requests will be valid)
        this.expressInstance.use(bodyParser.urlencoded({ extended: true }));

        this.expressInstance.use(bodyParser.json());

        this.expressInstance.use(cors())
    
}

    private routingSetup() {

        // Instantiate mainRouter object
        // Add to server routes
        this.expressInstance.use('/', mainRouter)
    }


}