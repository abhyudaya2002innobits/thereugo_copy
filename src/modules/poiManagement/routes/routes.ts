import { Router } from "express";
import PoiController from "../controller/poiController";

class PoiRoutes {
    PoiRouter = Router()
    controller = new PoiController()
    constructor() {
        this.countryCityRouting()
    }

    private countryCityRouting() {
        this.PoiRouter.route("/api/v1/pois").get(this.controller.getAllPoiController)
    }
}
const PoiRouter = new PoiRoutes().PoiRouter
export default PoiRouter;