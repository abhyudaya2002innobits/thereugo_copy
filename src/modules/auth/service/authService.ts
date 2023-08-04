import logger from "../../../common/logger";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
// import { User } from "../../users/model/user";
import bcrypt from 'bcryptjs';
import EndUser from "../../userManagement/model/user";
import TenantUser from "../../tenantUserManagement/model/tenantUser";
import { Op } from "sequelize";
import { PLATFORMS } from "../../../common/constants/enums";

class AuthService {
    constructor() {
        this.loginWithCred = this.loginWithCred.bind(this);
        this.tenantUserLoginService = this.tenantUserLoginService.bind(this);
        this.checkEmailBeforeLogin = this.checkEmailBeforeLogin.bind(this);
        this.authWithFb = this.authWithFb.bind(this);
        this.authWithGoogle = this.authWithGoogle.bind(this);
        this.loginWithSocialMedia = this.loginWithSocialMedia.bind(this);
    }

    //check email before login
    async checkEmailBeforeLogin(object: any) {
        try {
            let emailExist = await EndUser.findOne({
                where: {
                    email: object?.email
                }
            })

            if (emailExist) {
                return Promise.resolve(emailExist)
            } else {
                throw new Exception(ERROR_TYPE.NOT_FOUND, "User with this email does not exist")
            }
        } catch (e) {
            console.log(e, "error in checking email of the end user")
            return Promise.reject(e)
        }
    }

    //login function for end user using credentials
    async loginWithCred(object: any) {
        try {
            let userExist = await EndUser.findOne({
                where: {
                    email: object?.email
                }
            })
            if (!userExist) {
                throw new Exception(ERROR_TYPE.UNAUTHORIZED, `The user with email does not exist.`);
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

    async loginWithSocialMedia(object: any) {
        try {
            if (object?.registeredWith == PLATFORMS.facebook) {
                var result = await this.authWithFb(object)
                return Promise.resolve(result)
            } else if (object?.registeredWith == PLATFORMS.google) {
                console.log(object,"object>>>>>>>>>>>>")
                var result = await this.authWithGoogle(object)
                console.log(result, "resulrt>>.>>>>")
                return Promise.resolve(result)
            }
        } catch (e) {
            console.log(e, "error in auth with platform")
            return Promise.reject(e);
        }
    }

    //login/signup function for end user using facebook
    async authWithFb(object: any) {
        try {
            console.log(object.email, "emailllll")
            let userExist = await EndUser.findOne({ where: { [Op.or]: [{ email: object?.email }, { socialMediaId: object?.socialMediaId }, {contactNumber: object?.contactNumber}] } })
            console.log(userExist, "resulrt>>.>>>>")
            if (userExist) {
                userExist.socialMediaId = object?.socialMediaId
                userExist.registeredWith = object?.registeredWith
                await userExist.save()
                return Promise.resolve(userExist);
            } else {
                let newUser = await EndUser.create(object);
                return Promise.resolve(newUser);
            }
        } catch (e) {
            console.log(e, "error in auth fb")
            return Promise.reject(e);
        }
    }

    //login/signup function for end user using google
    async authWithGoogle(object: any) {
        try {
            let where = {}
            if (object?.socialMediaId && !object?.email && !object.contactNumber) {
                where = { socialMediaId: object?.socialMediaId }
            } else if (object?.socialMediaId && object?.email && !object?.contactNumber) {
                where = { [Op.or]: [
                    { email: object?.email },
                    { socialMediaId: object?.socialMediaId }
                ] }
            } else if (object?.socialMediaId && !object?.email && object?.contactNumber) {
                where = { [Op.or]: [
                    { contactNumber: object?.contactNumber },
                    { socialMediaId: object?.socialMediaId }
                ] }
            } else {
                where = { [Op.or]: [
                    { email: object?.email },
                    { contactNumber: object?.contactNumber },
                    { socialMediaId: object?.socialMediaId }
                ] }
            }
            console.log(where, "whereee>>>>>>>>>>")
            let userExist = await EndUser.findOne({ where: { ...where }})
            if (userExist) {
                userExist.socialMediaId = object?.socialMediaId
                userExist.registeredWith = object?.registeredWith
                await userExist.save()
                return Promise.resolve(userExist);
            } else {
                let newUser = await EndUser.create(object);
                return Promise.resolve(newUser);
            }
        } catch (e) {
            console.log(e, "error in auth google")
            return Promise.reject(e);
        }
    }

    //function for tenant user login
    async tenantUserLoginService(object: any) {
        try {
            let tenantUserExist = await TenantUser.findOne({
                where: {
                    email: object?.email
                }
            })
            if (!tenantUserExist) {
                throw new Exception(ERROR_TYPE.UNAUTHORIZED, `The user with email does not exist.`);
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
}

export default AuthService;