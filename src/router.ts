import { Router } from "express"
// import KeonnRouter from "./modules/deviceManager/routes"\
import authRouter from "./modules/auth/routes/authRoutes"

const mainRouter = Router()

// add module's router here in main router
mainRouter.use(authRouter);

export default mainRouter;
