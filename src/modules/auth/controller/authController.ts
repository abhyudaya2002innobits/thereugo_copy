import { Request, Response } from "express";
import AuthService from "../service/authService";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import BaseController from "../../../common/baseController/baseController";

class AuthController extends BaseController {

    // authService = new AuthService();
    constructor() {
        super(new AuthService)
        this.loginController = this.loginController.bind(this)
        // this.createUser = this.createUser.bind(this)
    }

    async loginController(req: Request, res: Response) {
        try {
            let object = req.body;
            var result = await this.service.loginService(object)

            console.log(res,"control")
            return sendSuccess(res, result)
        } catch (e) {
            console.log(e, "error")
            return sendError(res, e)
        }
    }

    // async createUser(req: Request, res: Response) {
    //     try {
    //         let object = req.body
    //         var result = await this.service.createUser(object);
    //         return sendSuccess(res, result)
    //     } catch (e) {
    //         console.log(e,">>>>err")
    //         return sendError(res, e)
    //     }
    // }


}

export default new AuthController();