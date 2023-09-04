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
        this.deleteUSerPrefs = this.deleteUSerPrefs.bind(this)
        this.updateUserPrefs = this.updateUserPrefs.bind(this)
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
            const {query, params} = req
            var result = await this.service.getUserPrefById(params, query)
            return sendSuccess(res, result)
        }catch(e) {
            console.log("error in get all user prefs by Id controller", e)
            return sendError(res, e)
        }
    }

    async updateUserPrefs(req:Request, res: Response){
        try{
            const {params, body} = req;
            var result = await this.service.update(params, body)
            return sendSuccess(res, result)
        }catch(e) {
            console.log("error in get all user prefs by Id controller", e)
            return sendError(res, e)
        }
    }
    async deleteUSerPrefs(req:Request, res: Response){
        try{
            const {params, body} = req;
            var result = await this.service.deleteUserPrefs(params, body)
            return sendSuccess(res, result)
        }catch(e) {
            console.log("error in get all user prefs by Id controller", e)
            return sendError(res, e)
        }
    }
}

export default UserPrefController