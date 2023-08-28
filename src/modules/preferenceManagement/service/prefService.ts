import { Op, where } from "sequelize"
import Preference from "../model/pref"
import { Exception } from "../../../common/resp-handler"
import { ERROR_TYPE } from "../../../common/resp-handler/constants"
import logger from "../../../common/logger"

class PrefService {
    constructor() {
        this.createPrefService = this.createPrefService.bind(this)
        this.getAllPrefService = this.getAllPrefService.bind(this)
    }

    async createPrefService(object: any) {
        try {
            var newPref
            let prefExist =  await Preference.findOne({ where: { [Op.and]: [{ entityKey: object?.entityKey }, { entityValue: object?.entityValue }] } })
            if(prefExist) {
                throw new Exception(ERROR_TYPE.ALREADY_EXISTS, `${object?.entityValue} is already exist in prefernces of ${object?.entityKey}`)
            }else{
                newPref = await Preference.create(object)
                return Promise.resolve(newPref)
            }
        } catch(e) {
            logger.error(e)
            return Promise.reject(e)
        }
    }

    async getAllPrefService(req:any) {
        try {
            let prefs = await Preference.findAndCountAll();
            let data:any=  prefs.rows.reduce((a:any,v:any)=>{
                if(a[v.entityKey]){
                    a[v.entityKey].entityValue.push(v);
                }
                else{
                    a[v.entityKey]={entityKey:v.entityKey,entityValue:[v]}
                }
                return a;
            },{});
            return Promise.resolve(Object.values(data))
        }catch(e) {
        console.log("error in get all pref", e)
        return Promise.reject()
        }
    }
}

export default PrefService