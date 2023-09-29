import { Request, Response } from "express";
import BaseController from "../../../common/baseController/baseController";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import CustomerService from "../service/userService";

class CustomerController extends BaseController {
    constructor() {
        super(new CustomerService);
        this.createCustomerController = this.createCustomerController.bind(this)
        this.readAllUsers = this.readAllUsers.bind(this)
    }

    async createCustomerController(req: Request, res: Response) {
        try {
            let object = req.body
            var result = await this.service.createCustomer(object);
            return sendSuccess(res, result)
        } catch (e) {
            return sendError(res, e)
        }
    }

    async readAllUsers(req:Request, res:Response) {
        try{
            var result = await this.service.getAllUsers()
            return sendSuccess(res, result)
        }catch(e) {
            return sendError(res,e)
        }
    }

}

export default new CustomerController;