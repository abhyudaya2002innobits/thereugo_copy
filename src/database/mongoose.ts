import mongoose from "mongoose";
import logger from "../common/logger";
const dotenv = require('dotenv')
dotenv.config()

class MongoDb {

    constructor() {};

    makeConnection() {
        try {
            mongoose.connect(`${process.env.DBCONURL}`, {});
            mongoose.connection.once("open",() => {
                console.log('Successfully connected to data base')
            })
        } catch (e) {
            logger.error(e, "Error in connection with database");
        }
    }
}

export default MongoDb;