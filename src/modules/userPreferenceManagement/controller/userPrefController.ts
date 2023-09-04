import BaseController from "../../../common/baseController/baseController";
import logger from "../../../common/logger";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import { Request, Response } from "express";
import UserPrefService from "../services/userPrefService";

class UserPrefController extends BaseController{
    constructor() {
        super(new UserPrefService()) 
        this.setUserPrefs = this.setUserPrefs.bind(this)
        this.getUserPrefByIdController = this.getUserPrefByIdController.bind(this)
    }

    async setUserPrefs(req: Request, res: Response) {
        try{
            var object = req.body
            let result = await this.service.setUserPrefService(object)
            return sendSuccess(res, result)
        }catch(e) {
            logger.error(e)
            console.log("error in set pref to user controller")
            return sendError(res, e)
        }
    }

    async getUserPrefByIdController(req:Request, res: Response){
        try{
            var result = await this.service.getAllUserPrefByIdService(req)
            return sendSuccess(res, result)
        }catch(e) {
            console.log("error in get all user prefs by Id controller", e)
            return sendError(res, e)
        }
    }
}

export default new UserPrefController