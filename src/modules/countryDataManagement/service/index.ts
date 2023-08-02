import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import CountryCity from "../model/countryCItyModel";
import logger from "../../../common/logger";
import { paginator } from "../../../common/pagination";

class CountryDataService {
    constructor() {
        this.getAllCountryData = this.getAllCountryData.bind(this)
        // this.registerTenantService = this.registerTenantService.bind(this)
    }

    async createCountryDataService(object: any) {
        try {
            let result = object?.data
            for (const iteration of result) {
                let exist = await CountryCity.findOne({ where: [{ entityKey: iteration?.entityKey }, { entityValue: iteration?.entityValue }]})
            }
        } catch (e) {
            logger.error("Error in creating country", e)
            return Promise.reject(e)
        }
    }

    async getAllCountryData(req: any) {
        try {
            let { limit, sortBy = "entityValue", sortOrder = "ASC", search } = req.query;
            //pagination for result of get users
            let query = paginator({ sortBy, sortOrder, search }, [
                "entityValue",
            ]);

            if (undefined == sortBy) { sortBy = 'entityValue' }
            if (undefined == sortOrder) { sortOrder = 'ASC' }

            let where = {};

            console.log(query, ">>>orgss")

            let countryData = await CountryCity.findAndCountAll({
                where: {
                    ...query.where,
                    ...where,
                },
                limit: query.limit,
                offset: query.offset,
                order: query.order,
            })
            console.log(countryData, ">>>orgss")
            return Promise.resolve(countryData.rows)

        } catch (e) {
            return Promise.reject(e)
        }
    }
}

export default CountryDataService;