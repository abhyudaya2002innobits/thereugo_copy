import { Op } from "sequelize";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import TenantUser from "../model/tenantUser";

class TenantUserService {
    constructor() {
        this.createTenantUserService = this.createTenantUserService.bind(this)
    }

    async createTenantUserService(object: any) {
        try {
            var newTenant;
            let tenantUserExist = await TenantUser.findOne({
                where: {
                    [Op.or]: [
                        { email: object.email }, 
                        { userName: object?.userName },
                        { contactNumber: object?.contactNumber },
                    ]
                }
            });
            if (tenantUserExist) {
                if (tenantUserExist.get()?.userName == object?.userName) {
                    throw new Exception(ERROR_TYPE.ALREADY_EXISTS, "User with username already exist");

                }
                if (tenantUserExist.get()?.email == object?.email)
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Email already exists"
                    );
                if (tenantUserExist.get()?.contactNumber == object?.contactNumber) {
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Contact number already exists"
                    );
                }
            } else {
                newTenant = await TenantUser.create(object);
                return Promise.resolve(newTenant);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

export default TenantUserService;