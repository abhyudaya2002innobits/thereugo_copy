import { Op } from "sequelize";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import TenantUser from "../model/tenantUser";
import logger from "../../../common/logger";

class TenantUserService {
    constructor() {
        this.createTenantUserService = this.createTenantUserService.bind(this)
    }

    async createTenantUserService(object: any) {
        console.log(object, ">>>obj>>>")
        try {

            var newTenant;
            let tenantUserExist = await TenantUser.findOne({
                where: {
                    [Op.or]: [{ email: object?.userEmail },
                    { userName: object?.userName },
                    { contactNumber: object?.mobile }]
                }
            });
            if (tenantUserExist) {
                if (tenantUserExist.get()?.userName == object?.userName) {
                    throw new Exception(ERROR_TYPE.ALREADY_EXISTS, "Username already exist");

                }
                if (tenantUserExist.get()?.email == object?.userEmail)
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "User with this email already exists"
                    );
                if (tenantUserExist.get()?.contactNumber == object?.mobile) {
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "User with this Contact number already exists"
                    );
                }
            } else {
                newTenant = await TenantUser.create({
                    firstName: object.firstName,
                    email: object.userEmail,
                    contactNumber: object.mobile,
                    password: object.password,
                    isActive: true,
                    lastName: object.lastName,
                    roleName: "Organization Admin",
                    tenantId: object.tenantId,
                    createdBy: object.createdBy,
                    userName: object.userName
                });
                return Promise.resolve(newTenant);
            }
        } catch (e) {
            logger.error("Error in creating user", e)
            return Promise.reject(e);
        }
    }
}

export default TenantUserService;