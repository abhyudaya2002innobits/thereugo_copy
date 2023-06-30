import { Router } from "express"
import TenantController from "../../tenantManagement/controller/tenantController";

class TenantRoutes {
    tenantRouter = Router()
    tenantController = TenantController
    constructor(){
        this.tenantRouting()
    }

    private tenantRouting() {
        this.tenantRouter.route("/api/v1/register/tenant").post(this.tenantController.registerTenantController);
        this.tenantRouter.route("/api/v1/register/tenant-admin").post(this.tenantController.registerAdminWithTenantController);
    }
}
const tenantRouter = new TenantRoutes().tenantRouter
export default tenantRouter;
