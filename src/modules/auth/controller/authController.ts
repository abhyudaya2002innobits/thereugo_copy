import { Request, Response } from "express";
import AuthService from "../service/authService";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import BaseController from "../../../common/baseController/baseController";

class AuthController extends BaseController {

    // authService = new AuthService();
    constructor() {
        super(new AuthService)
        this.loginWithCredController = this.loginWithCredController.bind(this)
        this.tenantUserLoginController = this.tenantUserLoginController.bind(this)
        this.checkEmailBeforeLoginController = this.checkEmailBeforeLoginController.bind(this)
        this.loginWithSocialMediaController = this.loginWithSocialMediaController.bind(this)
    }

    async loginWithCredController(req: Request, res: Response) {
        try {
            let object = req.body;
            var result = await this.service.loginWithCred(object)

            // console.log(res,"control")
            return sendSuccess(res, result)
        } catch (e) {
            console.log(e, "error")
            return sendError(res, e)
        }
    }

    async loginWithSocialMediaController(req: Request, res: Response) {
        try {
            let object = req.body;
            var result = await this.service.loginWithSocialMedia(object)
            return sendSuccess(res, result)
        } catch(e) {
            console.log(e,"error in login with social platform controller")
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

    async checkEmailBeforeLoginController(req: Request, res: Response) {
        try {
            let object = req.body
            var result = await this.service.checkEmailBeforeLogin(object)
            return sendSuccess(res, result)
        } catch(e) {
            console.log(e, 'error in check email controller')
            return sendError(res, e)
        }
    }

}

export default new AuthController();