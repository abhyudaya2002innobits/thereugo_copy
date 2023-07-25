import { Router } from "express";
import CountryDataController from "../controller/countryDataController"

class CountryCityRoutes {
    countryCityRouter = Router()
    countryCityController = CountryDataController
    constructor() {
        this.countryCityRouting()
    }

    private countryCityRouting() {
        this.countryCityRouter.route("/api/v1/unlockCountry").post(this.countryCityController.createCountryDataController)
    }
}

const countryCityRouter = new CountryCityRoutes().countryCityRouter
export default countryCityRouter;