import { Request, Response } from "express";
import BaseController from "../../../common/baseController/baseController";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import CustomerService from "../service/customerService";

class CustomerController extends BaseController {
    constructor() {
        super(new CustomerService);
        this.createCustomerController = this.createCustomerController.bind(this)
    }

    async createCustomerController(req: Request, res: Response) {
        try {
            let object = req.body
            var result = await this.service.createUser(object);
            return sendSuccess(res, result)
        } catch (e) {
            return sendError(res, e)
        }
    }

}

export default new CustomerController;