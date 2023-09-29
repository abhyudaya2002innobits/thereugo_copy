import axios from "axios";
import { ExternalAPI } from "../../../common/constants/enums";
import logger from "../../../common/logger";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
require('dotenv').config();


class ItineraryWrapperService {
    private baseUrl: any
    constructor(){
        this.baseUrl = process.env.ExtBaseURL;
        this.getAllCities =this.getAllCities.bind(this);
        this.getClosestCity = this.getClosestCity.bind(this);
    }

    async getAllCities (params?:any, query?:any) {
        try {
            let response = await axios.get(`${this.baseUrl}${ExternalAPI.GET_ALL_CITIES}`,{
                headers: this.getReqHeaders()
            })
            const {data} = response;
            return Promise.resolve(data)
            
        } catch (error: any) {
            const {response} = error;
            if(response?.data){
                logger.error("Error in getting cities list [IineraryWrapperService]", response?.data)
            return Promise.reject(response?.data)
            }
            logger.error("Error in getting cities list [IineraryWrapperService]", error)
            return Promise.reject(error)
        }
    }

    async getClosestCity (params?:any, query?:any) {
        try {
            const {lat, long} = query;

            if(!lat || !long){
                throw new Exception(ERROR_TYPE.BAD_REQUEST, "Lattitude and Longitude ar required.")
            }
            let response = await axios.get(`${this.baseUrl}${ExternalAPI.GET_CLOSEST_CITY}`,{
                headers: this.getReqHeaders(),
                params: {
                    lat: lat,
                    lon: long
                }
            })
            const {data} = response;
            return Promise.resolve(data)
            
        } catch (error:any) {
            const {response} = error;
            if(response?.data){
                logger.error("Error in getting closest city [WrapperService]", response?.data)
            return Promise.reject(response?.data)
            }
            logger.error("Error in getting closest city [WrapperService]", error)
            return Promise.reject(error)
        }
    }

    async getItenararies (params?:any, query?:any) {
        try {
            const {city} = query;

            let response = await axios.get(`${this.baseUrl}${ExternalAPI.GET_ITENARARIES}`,{
                headers: this.getReqHeaders(),
                params: {
                    city
                }
            })
            const {data} = response;
            return Promise.resolve(data)
            
        } catch (error:any) {
            const {response} = error;
            if(response?.data){
                logger.error("Error in getting list of itenararies of city [WrapperService]", response?.data)
            return Promise.reject(response?.data)
            }
            logger.error("Error in getting list of itenararies of city [WrapperService]", error)
            return Promise.reject(error)
        }
    }

    async getItenararyDetails (params?:any, query?:any) {
        try {
            const {walkId} = query;

            let response = await axios.get(`${this.baseUrl}${ExternalAPI.GET_ITENARARY_DETAILS}`,{
                headers: this.getReqHeaders(),
                params: {
                    walkid: walkId
                }
            })
            const {data} = response;
            return Promise.resolve(data)
            
        } catch (error:any) {
            const {response} = error;
            if(response?.data){
                logger.error("Error in getting details of itenarary [WrapperService]", response?.data)
            return Promise.reject(response?.data)
            }
            logger.error("Error in getting details of itenarary [WrapperService]", error)
            return Promise.reject(error)
        }
    }

    private getReqHeaders(){
        let extApiKey = process.env.EXT_API_KEY;
        let headers = {
            "api-key" : extApiKey
        }

        return headers
    }
}


export default ItineraryWrapperService