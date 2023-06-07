import { Request, Response } from "express";
import AuthService from "../service/authService";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import BaseController from "../../../common/baseController/baseController";

class AuthController extends BaseController {

    // authService = new AuthService();
    constructor() {
        super(new AuthService)
        this.endUserLoginController = this.endUserLoginController.bind(this)
        this.tenantUserLoginController = this.tenantUserLoginController.bind(this)
    }

    async endUserLoginController(req: Request, res: Response) {
        try {
            let object = req.body;
            var result = await this.service.endUserLoginService(object)

            console.log(res,"control")
            return sendSuccess(res, result)
        } catch (e) {
            console.log(e, "error")
            return sendError(res, e)
        }
    }

    async tenantUserLoginController(req: Request, res: Response) {
        try {
            let object = req.body;
            var result = await this.service.tenantUserLoginService(object)

            console.log(res,"control")
            return sendSuccess(res, result)
        } catch (e) {
            console.log(e, "error")
            return sendError(res, e)
        }
    }


}

export default new AuthController();