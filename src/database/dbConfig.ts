import sequelize from 'sequelize';
import { Sequelize } from 'sequelize';
require('dotenv').config();

class Database {
  db : string;
  user : string;
  password : string;
  host : string;
  port : number;
  maxPool? : number;
  minPool? : number;
  database : sequelize.Sequelize


constructor() {

  this.db = process.env.DBNAME || "TUG"
  this.user = process.env.DBUSER || "root"
  this.password = process.env.DBPASS || "rgbXYZ@9182"
  this.host = process.env.DBHOST || "localhost"
  this.port = Number(process.env.DBPORT) || 5432

  this.database = new Sequelize(this.db, this.user, this.password, {
    host: this.host,
    ssl: true,
    dialect: 'postgres',
    // dialectOptions: {
    //   encrypt: true,
    // },
    timezone:'+05:30',
    port: this.port,
    logging: false,
    pool: {
      max: 200,
      min: 1,
      acquire: 10000,
      idle: 5000,
    },
  })
}
}
let databaseInstance = new Database().database
export default databaseInstance;