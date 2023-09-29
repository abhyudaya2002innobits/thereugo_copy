import { Request, Response } from "express";
import { sendError, sendSuccess } from "../../../common/resp-handler/respHandler";
import ItineraryWrapperService from "../utils/externalComm";

class ItenaryController {
    private externalComm: ItineraryWrapperService
    constructor() {
        this.externalComm = new ItineraryWrapperService()
        this.getAllCities = this.getAllCities.bind(this);
        this.getClosestCity = this.getClosestCity.bind(this);
        this.getItenararyList = this.getItenararyList.bind(this);
        this.getItenararyDetails = this.getItenararyDetails.bind(this)
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

    async getItenararyList (req: Request, res: Response) {
        try {
            const {params, query} = req;
            var result = await this.externalComm.getItenararies(params, query)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }

    async getItenararyDetails (req: Request, res: Response) {
        try {
            const {params, query} = req;
            var result = await this.externalComm.getItenararyDetails(params, query)
            return sendSuccess(res, result)
        } catch(error) {
            return sendError(res, error)
        }
    }

}


export default ItenaryController