import { Op } from "sequelize";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import Tenant from "../model/models";

class TenantService {
    constructor() {
        this.registerTenantService = this.registerTenantService.bind(this)
    }

    async registerTenantService(object: any) {
        try {
            var newTenant;
            let tenantExist = await Tenant.findOne({
                where: {
                    [Op.or]: [
                        { email: object.email }, {
                            tenantName: object?.tenantName
                        }
                    ]
                }
            });
            if (tenantExist) {
                if (tenantExist.get()?.tenantName == object?.tenantName) {
                    throw new Exception(ERROR_TYPE.ALREADY_EXISTS, "Tenant with name already exist");

                }
                if (tenantExist.get()?.email == object?.email)
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Email already exists"
                    );
                if (tenantExist.get()?.contactNumber == object?.contactNumber) {
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Contact number already exists"
                    );
                }
            } else {
                newTenant = await Tenant.create(object);
                return Promise.resolve(newTenant);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

export default TenantService;