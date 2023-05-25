import logger from "../../../common/logger";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import { User } from "../model/user";
import bcrypt from 'bcryptjs';

class AuthService {
    constructor() {
        this.loginService = this.loginService.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    async loginService(object: any) {
        try {
            var user;
            if (object?.registeredWith == "guest") {

            } else if (object?.registeredWith == "facebook") {

            } else if (object?.registeredWith == "google") {

            } else {
                user = this.loginByCredential(object)
            }
            return Promise.resolve(user)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    async createUser(object: any) {
        try {
            var newUser;
            let userExist = await User.findOne({ 'username': object?.username });
            if (userExist) {
                throw new Error("User with email exist");
            } else {
                if (object?.isApplication == true) {
                    newUser = await User.create({ ...object, roleName: "User" });
                } else {
                    newUser = await User.create({ ...object, roleName: "Guest" })
                }
                return Promise.resolve(newUser);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }

    private async loginByCredential(object: any) {
        try {
            let userExist = await User.findOne({
                'username': {
                    $eq: object?.username
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