import logger from "../../../common/logger";
import TenantUserService from "../../tenantUserManagement/services/tenantUserService";
import Tenant from "../model/models";

export default class TenalExternalComm {

    tenantUserService: any
    constructor() {
        this.tenantUserService = new TenantUserService()
    }

    async createTenantAdmin(object: any) {
        try{
            var tenantadmin = this.tenantUserService.createTenantUserService(object)
            return Promise.resolve(tenantadmin)
        }catch(e){
            const {tenantId} = object;
            await Tenant.destroy({where: tenantId})
            logger.error(e, "Error in creating tenant admin (extrCom)")
            return Promise.reject(e)
        }
    }

}