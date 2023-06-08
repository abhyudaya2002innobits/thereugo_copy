import { Request, Response } from "express";
import TenantService from "../service/tenantService";
import BaseController from "../../../common/baseController/baseController";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";

class TenantController extends BaseController {
    constructor() {
        super(new TenantService);
        this.registerTenantController = this.registerTenantController.bind(this)
    }

    async registerTenantController(req: Request, res: Response) {
        try {
            const object = req.body
            var result = await this.service.registerTenantService(object)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }
}

export default new TenantController