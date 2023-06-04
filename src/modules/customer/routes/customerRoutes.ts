import { Router } from "express"
import CustomerController from "../controller/customerController";

class CustomerRoutes {
    customerRouter = Router()
    customerController = CustomerController
    constructor(){
        this.customerRouting()
    }
    private customerRouting() {
        this.customerRouter.route("/api/v1/user").post(this.customerController.createCustomerController);
    }
}
const customerRouter = new CustomerRoutes().customerRouter
export default customerRouter;
