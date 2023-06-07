import logger from "../../../common/logger";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
// import { User } from "../../users/model/user";
import bcrypt from 'bcryptjs';
import EndUser from "../../endUserManagement/model/customer";
import TenantUser from "../../tenantUserManagement/model/tenantUser";

class AuthService {
    constructor() {
        this.endUserLoginService = this.endUserLoginService.bind(this);
        this.tenantUserLoginService = this.tenantUserLoginService.bind(this);
    }

    //function for end user using mobile with facebook, google and credentials
    async endUserLoginService(object: any) {
        try {
            var user;
            if (object?.registeredWith == "fb") {

            } else if (object?.registeredWith == "google") {

            } else {
                user = this.loginByCredential(object)
            }
            return Promise.resolve(user)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    //function for tenant user login
    async tenantUserLoginService(object: any) {
        try {
            let tenantUserExist = await TenantUser.findOne({
                where: {
                    userName: object?.userName
                }
            })
            if (!tenantUserExist) {
                throw new Exception(ERROR_TYPE.UNAUTHORIZED, `The user with username does not exist.`);
            }
            console.log(tenantUserExist.password, "KKKKKK")
            if (object?.password != tenantUserExist?.password) {
                throw new Exception(ERROR_TYPE.NOT_FOUND, "Password does not match.")
            }
            if (tenantUserExist && (object?.password == tenantUserExist?.password)) {
                console.log("better")
                return Promise.resolve(tenantUserExist)
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }

    // private sub-function for user login with credentials
    private async loginByCredential(object: any) {
        try {
            let userExist = await EndUser.findOne({
                where: {
                    userName: object?.userName
                }
            })
            if (!userExist) {
                throw new Exception(ERROR_TYPE.UNAUTHORIZED, `The user with username does not exist.`);
            }
            console.log(userExist.password, "KKKKKK")
            if (object?.password != userExist?.password) {
                throw new Exception(ERROR_TYPE.NOT_FOUND, "Password does not match.")
            }
            if (userExist && (object?.password == userExist?.password)) {
                console.log("better")
                return Promise.resolve(userExist)
            }
        } catch (e) {
            return Promise.reject(e);
        }

    }
}

export default AuthService;