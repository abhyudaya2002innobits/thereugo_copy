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
            var r;
            if (object?.registeredWith == "guest") {

            } else if (object?.registeredWith == "facebook") {

            } else if (object?.registeredWith == "google") {

            } else {
                r = this.loginByCredential(object)
            }
            return r

        } catch (e) {
            return Promise.reject(e)
        }
    }

    async createUser(object: any) {
        try {
            console.log(">>>>>>2")
            let userExist = await User.findOne({ 'email': object?.email });
            if (userExist) {
                throw new Error("User with email exist");
            } else {
                let newUser = await User.create(object);
                return Promise.resolve(newUser);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }

    private async loginByCredential(object: any) {
        try {
            console.log(object,">>>>>>>>")
            let userExist = await User.findOne({
                'username': {
                    $eq: object?.username
                }
            })
            if (!userExist) {
                throw new Exception(ERROR_TYPE.UNAUTHORIZED, `The user with username does not exist.`);
            }
            if (object?.password != userExist?.password) {
                throw new Exception(ERROR_TYPE.NOT_FOUND, "Password does not match.")
            }
            if (userExist && (object?.password == userExist?.password)) {
                return Promise.resolve(userExist)
            }
        } catch (e) {
            return Promise.reject(e);

        }

    }
}

export default AuthService;