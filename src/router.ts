import { Router } from "express"
// import KeonnRouter from "./modules/deviceManager/routes"\
import authRouter from "./modules/auth/routes/authRoutes"
import customerRouter from "./modules/endUserManagement/routes/customerRoutes";

const mainRouter = Router()

// add module's router here in main router
mainRouter.use(authRouter);
mainRouter.use(customerRouter)

export default mainRouter;
