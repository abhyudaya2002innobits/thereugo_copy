import BaseController from "../../../common/baseController/baseController";
import logger from "../../../common/logger";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import PrefService from "../service/prefService";
import { Request, Response } from "express";

class PrefController extends BaseController{
    constructor() {
        super(new PrefService()) 
        this.createPrefs = this.createPrefs.bind(this)
        this.getAllPrefController = this.getAllPrefController.bind(this)
    }

    async createPrefs(req: Request, res: Response) {
        try{
            var object = req.body
            let result = await this.service.createPrefService(object)
            return sendSuccess(res, result)
        }catch(e) {
            logger.error(e)
            console.log("error in create pref controller")
            return sendError(res, e)
        }
    }

    async getAllPrefController(req:Request, res: Response){
        try{
            var result = await this.service.getAllPrefService(req)
            return sendSuccess(res, result)
        }catch(e) {
            console.log("error in get all prefs controller", e)
        }
    }
}

export default new PrefController