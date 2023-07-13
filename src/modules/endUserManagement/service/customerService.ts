import logger from "../../../common/logger";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import EndUser from "../model/customer";
import nodemailer from 'nodemailer'
const dotenv = require('dotenv')
dotenv.config()

// import nodemailer from 'nodemailer';

class CustomerService {
    constructor() {
        this.createCustomer = this.createCustomer.bind(this);    }

    async createCustomer(object:any) {
        try {
            var newCustomer;
            let userExist = await EndUser.findOne({ where : {
                email : object?.email
            }});
            if (userExist) {
                throw new Exception(ERROR_TYPE.ALREADY_EXISTS,"User with email already exist");
            } else {
                    newCustomer = await EndUser.create(object);
                    await this.sendEmails(object);
                return Promise.resolve(newCustomer);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }


    async sendEmails(object:any) {
        try {
            console.log(">>>>>>>>> cred", process.env.USEREMAIL, process.env.USERPASS)
            const transport: any = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.USEREMAIL,
                    pass: process.env.USERPASS
                }

            })

            const mailOptions: any = {
                from: process.env.USEREMAIL,
                to: object?.email,
                subject: 'Woah! Congratulations on registering 🥳',
                html: `<p>Hello ${object?.fullName ? object?.fullName : "Traveller"}, <br>Congratulation on successfully registrating on There You Go. <br> Explore the itinaries, travel plans and much more for you next trip.😉 <br> <br> Thanks <br> TUGO team </p> <br> <u><p style = "color:Gray"> This is a system generated email. Please do not reply to this mail.</p></u>`
            }

            const result: any = await transport.sendMail(mailOptions)

            return Promise.resolve(result)
        }
        catch (error) {
            logger.error("Error in sending email", error)
            return Promise.reject(error)

        }
    }

}

export default CustomerService;