import { Request, Response } from "express"
import PoiWrapperService from "../utils/externalComm"
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler"
import logger from "../../../common/logger"

class PoiController {
    private externalComm: PoiWrapperService
    constructor() {
        this.externalComm = new PoiWrapperService()
        this.getAllPoiController = this.getAllPoiController.bind(this)
    }

    async getAllPoiController(req:Request , res:Response) {
        try{
            const result = await this.externalComm.getAllPoisForCity(req.query)
            return sendSuccess(res,result)
        }catch(e) {
            logger.error("Error in get all POIs controller", e)
            return sendError(res,e)
        }
    }
}

export default PoiController