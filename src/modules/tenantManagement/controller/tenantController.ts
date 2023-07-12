import { Request, Response } from "express";
import TenantService from "../service/tenantService";
import BaseController from "../../../common/baseController/baseController";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";

class TenantController extends BaseController {
    constructor() {
        super(new TenantService());
        this.registerTenantController = this.registerTenantController.bind(this)
        this.registerAdminWithTenantController = this.registerAdminWithTenantController.bind(this)
        this.getAllTenantsController = this.getAllTenantsController.bind(this)
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


    async registerAdminWithTenantController(req: Request, res: Response) {
        try {
            const object = req.body
            var result = await this.service.registerTenantWithAdmin(object)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }

    async getAllTenantsController(req: Request, res: Response) {
        try {
            var result = await this.service.readAllTenants(req)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }

    async deleteTenantController(req: Request, res: Response) {
        try {
            var result = await this.service.deleteTenant(req)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }
}

export default new TenantController