import { Router } from "express"
import AuthController from "../controller/authController"

class AuthRoutes {
    authRouter = Router()
    authController = AuthController
    constructor(){
        this.authRouting()
    }
    private authRouting() {
        this.authRouter.route("/api/v1/login").post(this.authController.loginController);
        this.authRouter.route("/api/v1/user").post(this.authController.createUser);
    }
}
const authRouter = new AuthRoutes().authRouter
export default authRouter;
