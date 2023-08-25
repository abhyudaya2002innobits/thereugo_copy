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
            let prefentityKey = [...new Set(prefs.rows.map((i)=>{
                return i.entityKey
            }))];
            let result = prefentityKey.map((item)=>{
                return {entityKey: item,entityValue:<any>[]}
            })

            for(let i=0;i<prefentityKey.length;i++){
                for(let j=0;j<prefs.rows.length;j++){
                    if(prefs.rows[j].entityKey===prefentityKey[i]){
                        result[i].entityValue.push(prefs.rows[j]);
                    }
                }
            }
            return Promise.resolve(result)
        }catch(e) {
        console.log("error in get all pref", e)
        return Promise.reject()
        }
    }
}

export default PrefService