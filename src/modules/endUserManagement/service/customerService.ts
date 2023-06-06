import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import EndUser from "../model/endUser";

class CustomerService {
    constructor() {
        this.createCustomer = this.createCustomer.bind(this);    }

    async createCustomer(body:any) {
        try {
            let {userName} = body
            var newCustomer;
            let userExist = await EndUser.findOne({ where : {
                userName : userName
            }});
            if (userExist) {
                throw new Exception(ERROR_TYPE.ALREADY_EXISTS,"User with email exist");
            } else {
                // if (object?.isApplication == true) {
                    newCustomer = await EndUser.create(body);
                
                return Promise.resolve(newCustomer);
            }
        } catch (e) {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.",e)
            return Promise.reject(e);
            
        }
    }

}

export default CustomerService;