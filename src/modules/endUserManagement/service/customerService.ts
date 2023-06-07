import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import EndUser from "../model/customer";

class CustomerService {
    constructor() {
        this.createCustomer = this.createCustomer.bind(this);    }

    async createCustomer(object:any) {
        try {
            var newCustomer;
            let userExist = await EndUser.findOne({ where : {
                userName : object?.userName
            }});
            if (userExist) {
                throw new Exception(ERROR_TYPE.ALREADY_EXISTS,"User with email exist");
            } else {
                    newCustomer = await EndUser.create(object);
                return Promise.resolve(newCustomer);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }

}

export default CustomerService;