import { Request, Response } from "express";
import BaseController from "../../../common/baseController/baseController";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import TenantUserService from "../services/tenantUserService";

class TenantUserController extends BaseController {
    constructor() {
        super(new TenantUserService);
        this.createTenantUserController = this.createTenantUserController.bind(this)
    }

    async createTenantUserController(req: Request, res: Response) {
        try {
            const object = req.body
            var result = await this.service.createTenantUserService(object)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }
}

export default new TenantUserController