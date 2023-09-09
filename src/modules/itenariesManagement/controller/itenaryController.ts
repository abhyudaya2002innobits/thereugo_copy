import { Request, Response } from "express";
import BaseController from "../../../common/baseController/baseController";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import WrapperService from "../utils/externalComm";

class ItenaryController {
    private externalComm: WrapperService
    constructor() {
        this.externalComm = new WrapperService()
        this.getAllCities = this.getAllCities.bind(this);
        this.getClosestCity = this.getClosestCity.bind(this)
    }

    async getAllCities(req: Request, res: Response) {
        try {
            let object = req.body
            var result = await this.externalComm.getAllCities()
            return sendSuccess(res, result)
        } catch (e) {
            return sendError(res, e)
        }
    }

    async getClosestCity (req: Request, res: Response) {
        try {
            const {params, query} = req;
            var result = await this.externalComm.getClosestCity(params, query)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }
}

export default ItenaryController