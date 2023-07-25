import { Request, Response } from "express";
import BaseController from "../../../common/baseController/baseController";
import CountryDataService from "../service";
import { sendError } from "../../../common/resp-handler/respHandler";

class CountryDataController extends BaseController {
    constructor() {
        super(new CountryDataService);
        this.createCountryDataController = this.createCountryDataController.bind(this)
    }

    async createCountryDataController(req: Request, res: Response) {
        try {
            let object = req.body
            var result = await this.service.createCountryDataService(object)
        } catch (e) {
            return sendError(res, e)
        }
    }
}

export default new CountryDataController