import databaseConnection from "./database/dbconnection";
import MongoDb from "./database/mongoose";
import Server from "./server";
const dotenv = require('dotenv')
dotenv.config()

const expressInstance = new Server().expressInstance
// const mongoose = new MongoDb();



// mongoose.makeConnection();

expressInstance.listen(process.env.SERVERPORT, () => {databaseConnection(), console.log(`listening on port ${process.env.SERVERPORT}`)});
