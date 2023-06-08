import { Router } from "express"
import TenantUserController from "../controller/tenantUserController"

class TenantUserRoutes {
    tenantUserRouter = Router()
    tenantUserController = TenantUserController
    constructor(){
        this.tenantRouting()
    }

    private tenantRouting() {
        this.tenantUserRouter.route("/api/v1/signup/tenantuser").post(this.tenantUserController.createTenantUserController);
    }
}
const tenantUserRouter = new TenantUserRoutes().tenantUserRouter
export default tenantUserRouter;
