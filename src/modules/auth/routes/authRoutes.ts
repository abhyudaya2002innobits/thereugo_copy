import { Router } from "express"
import AuthController from "../controller/authController"
import  Authvalidate  from "../core/validator"
let valid = Authvalidate

class AuthRoutes {
    authRouter = Router()
    authController = AuthController
    constructor(){
        this.authRouting()
    }
    private authRouting() {
        this.authRouter.route("/api/v1/checkEmail").post(valid.makeValidation("checkEmail"), this.authController.checkEmailBeforeLoginController, );
        this.authRouter.route("/api/v1/login").post(valid.makeValidation('login'), this.authController.loginWithCredController);
        this.authRouter.route("/api/v1/login/tenant").post(this.authController.tenantUserLoginController);
        this.authRouter.route("/api/v1/ssoLogin").post(this.authController.loginWithSocialMediaController)
    }
}
const authRouter = new AuthRoutes().authRouter
export default authRouter;
