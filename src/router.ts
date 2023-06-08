import { Router } from "express"
// import KeonnRouter from "./modules/deviceManager/routes"\
import authRouter from "./modules/auth/routes/authRoutes"
import customerRouter from "./modules/endUserManagement/routes/customerRoutes";
import tenantRouter from "./modules/tenantManagement/routes/tenantRoutes";
import tenantUserRouter from "./modules/tenantUserManagement/routes/tenantUserRoutes";

const mainRouter = Router()

// add module's router here in main router
mainRouter.use(authRouter);
mainRouter.use(customerRouter);
mainRouter.use(tenantRouter);
mainRouter.use(tenantUserRouter);

export default mainRouter;
