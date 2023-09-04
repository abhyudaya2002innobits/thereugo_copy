import { Router } from "express"
import UserPrefController from "../controller/userPrefController"

class UserPrefRoutes {
    userPrefRouter = Router()
    prefController = new UserPrefController()
    constructor() {
        this.prefRouting()
    }
    private prefRouting() {
        this.userPrefRouter.route("/api/v1/userPrefs/:userId").get(this.prefController.getUserPrefByIdController)
        this.userPrefRouter.route("/api/v1/userPrefs").post(this.prefController.setUserPrefs)
        this.userPrefRouter.route("/api/v1/userPrefs/:userId").delete(this.prefController.deleteUSerPrefs)
        this.userPrefRouter.route("/api/v1/userPrefs/:userId").patch(this.prefController.updateUserPrefs)

    }
}

const userPrefRouter = new UserPrefRoutes().userPrefRouter
export default userPrefRouter;
