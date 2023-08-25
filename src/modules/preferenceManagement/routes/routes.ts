import { Router } from "express"
import PrefController from "../../preferenceManagement/controller/prefController";
import  PrefValidator  from "../core/validator"
let valid = PrefValidator

class PrefRoutes {
    prefRouter = Router()
    prefController = PrefController
    constructor() {
        this.prefRouting()
    }
    private prefRouting() {
        this.prefRouter.route("/api/v1/prefs").post(valid.makeValidation("create"), this.prefController.createPrefs);
        this.prefRouter.route("/api/v1/prefs").get(this.prefController.getAllPrefController);
    }
}

const prefRouter = new PrefRoutes().prefRouter
export default prefRouter;
