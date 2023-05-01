import { Request, Response } from "express";
import AuthService from "../service/authService";
import { sendSuccess } from "../../../common/resp-handler/respHandler";
import BaseController from "../../../common/baseController/baseController";

class AuthController extends BaseController{

    // authService = new AuthService();
    constructor() {
        super(new AuthService)
        this.loginController = this.loginController.bind(this)
        this.createUser = this.createUser.bind(this)
    }

    async loginController(req:Request, res:Response) {
        try{
            let object = req.body;
            var result = await this.service.loginService(object)
            return sendSuccess(res,result)
        }catch(e){
            console.log(e,"error")
            res.status(400).send({message:"Error in login", error: e})
        }
    }

    async createUser(req:Request, res:Response) {
        try{
            let object = req.body
            var result = await this.service.createUser(object);
            return sendSuccess(res,result)
        }catch(e){
            res.status(400).send({message:"Error while creating user", error: e})
        }
    }
}

export default new AuthController();