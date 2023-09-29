import { Router } from "express"
import CustomerController from "../controller/userController";

class CustomerRoutes {
    customerRouter = Router()
    customerController = CustomerController
    constructor(){
        this.customerRouting()
    }

    
    private customerRouting() {
        this.customerRouter.route("/api/v1/user").post(this.customerController.createCustomerController);
        this.customerRouter.route("/api/v1/users").get(this.customerController.readAllUsers);
    }
}
const customerRouter = new CustomerRoutes().customerRouter
export default customerRouter;
