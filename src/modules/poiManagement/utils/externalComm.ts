import axios from "axios";
import { ExternalAPI } from "../../../common/constants/enums";
import logger from "../../../common/logger";
import Exception from "../../../common/resp-handler/exception";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";

class PoiWrapperService {
    private baseUrl: any
    constructor() {
        this.baseUrl = process.env.ExtBaseURL;
        this.getAllPoisForCity = this.getAllPoisForCity.bind(this)
    }

    async getAllPoisForCity(query:any) {
        try {
            const {city, lat, lng, r} = query;

            if(!city){
                throw new Exception(ERROR_TYPE.BAD_REQUEST, "city is required.")
            }

            let params:any = {city}

            if(lat) {
                params = {...params,lat}
            }
            if(lng){
                params = {...params,lng}
            }
            if(r){
                params = {...params,r}
            }

            let response = await axios.get(`${this.baseUrl}${ExternalAPI.GET_ALL_POI}`, {
                headers: this.getReqHeaders(), params: params
            })
            const { data } = response;
            return Promise.resolve(data)
        } catch (error: any) {
            const { response } = error;
            if (response?.data) {
                logger.error("Error in getting pois list [POIWrapperService]", response?.data)
                return Promise.reject(response?.data)
            }
            logger.error("Error in getting pois list [POIWrapperService]", error)
            return Promise.reject(error)
        }
    }

    private getReqHeaders() {
        let extApiKey = process.env.EXT_API_KEY;
        let headers = {
            "api-key": extApiKey
        }

        return headers
    }
}

export default PoiWrapperService