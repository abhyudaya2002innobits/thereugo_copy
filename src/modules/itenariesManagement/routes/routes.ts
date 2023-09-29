import { Router } from "express";
import ItenaryController from "../controller/itenaryController"

class ItenaryRoutes {
    itenaryRouter = Router()
    controller = new ItenaryController()
    constructor() {
        this.countryCityRouting()
    }

    private countryCityRouting() {
        this.itenaryRouter.route("/api/v1/cities").get(this.controller.getAllCities)
        this.itenaryRouter.route("/api/v1/city/closest").get(this.controller.getClosestCity)
        this.itenaryRouter.route("/api/v1/walk/near").get(this.controller.getItenararyList)
        this.itenaryRouter.route("/api/v1/walk/id").get(this.controller.getItenararyDetails)

    }
}

const itenaryRouter = new ItenaryRoutes().itenaryRouter
export default itenaryRouter;