import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import { User } from "../../users/model/user";
import { Customer } from "../model/customer";

class CustomerService {
    constructor() {
        this.createCustomer = this.createCustomer.bind(this);    }

    async createCustomer(object:any) {
        try {
            var newCustomer;
            let userExist = await Customer.findOne({ 'username': object?.username });
            if (userExist) {
                throw new Exception(ERROR_TYPE.ALREADY_EXISTS,"User with email exist");
            } else {
                if (object?.isApplication == true) {
                    newCustomer = await Customer.create(object);
                } else {
                    newCustomer = await Customer.create(object)

                }
                return Promise.resolve(newCustomer);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }

}

export default CustomerService;