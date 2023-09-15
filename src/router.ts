import { Router } from "express"
// import KeonnRouter from "./modules/deviceManager/routes"\
import authRouter from "./modules/auth/routes/authRoutes"
import customerRouter from "./modules/userManagement/routes/userRoutes";
import tenantRouter from "./modules/tenantManagement/routes/tenantRoutes";
import tenantUserRouter from "./modules/tenantUserManagement/routes/tenantUserRoutes";
import countryCityRouter from "./modules/countryDataManagement/routes/routes";
import prefRouter from "./modules/preferenceManagement/routes/routes";
import userPrefRouter from "./modules/userPreferenceManagement/routes/route";
import itenaryRouter from "./modules/itenariesManagement/routes/routes";
import PoiRouter from "./modules/poiManagement/routes/routes";

const mainRouter = Router()

// add module's router here in main router
mainRouter.use(authRouter);
mainRouter.use(customerRouter);
mainRouter.use(tenantRouter);
mainRouter.use(tenantUserRouter);
mainRouter.use(countryCityRouter);
mainRouter.use(prefRouter);
mainRouter.use(userPrefRouter);
mainRouter.use(itenaryRouter);
mainRouter.use(PoiRouter);

export default mainRouter;
