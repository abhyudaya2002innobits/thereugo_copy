import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import CountryCity from "../model/countryCItyModel";

class CountryDataService {
    constructor() { }

    async createCountryDataService(object: any) {
        try {
            var newData
            let dataExist = await CountryCity.findOne({
                where: [{
                    entityValue: object?.entityValue
                }, {
                    entityKey: object?.entityKey
                }]
            })
            if (dataExist) {
                throw new Exception(ERROR_TYPE.ALREADY_EXISTS, `${object?.entityKey} with this value already exist`)
            } else {
                newData = await CountryCity.create(object)
                return Promise.resolve(newData)
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }
}

export default CountryDataService;