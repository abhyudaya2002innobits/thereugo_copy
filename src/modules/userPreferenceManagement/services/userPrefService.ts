import { Op } from "sequelize";
import logger from "../../../common/logger"
import UserPref from "../model/userPref";
import Preference from "../../preferenceManagement/model/pref";

class UserPrefService {
    constructor() {
        this.setUserPrefService = this.setUserPrefService.bind(this)
        this.getUserPrefById = this.getUserPrefById.bind(this)
        this.update = this.update.bind(this)
        this.deleteUserPrefs = this.deleteUserPrefs.bind(this);
    }

    async setUserPrefService(body: any) {
        try {
            const { userId,preferences } = body
            let createBody = preferences?.map((prefId: any) => {
                return {
                    userId: userId,
                    preferenceId: prefId
                }
            })
            await UserPref.bulkCreate(createBody);

            return Promise.resolve({data:{}, message:"User preferences saved successfully"})
        } catch (e) {
            logger.error("Error in creating userprefs",e)
            return Promise.reject(e)
        }
    }

    async getUserPrefById(params:any, query:any) {
        try {
            const { userId } = params;
            const { entityKey, entityValue } = query;
            let result
            let preferenceWhere = {}
            if (entityKey) {
                preferenceWhere = { ...preferenceWhere, entityKey: entityKey }
            }
            if (entityValue) {
                preferenceWhere = { ...preferenceWhere, entityValue: entityValue }
            }
    
                result = await UserPref.findAndCountAll(
                    {
                        where:{userId: userId},
                        include: [
                            {
                                model: Preference,
                                attributes: ['entityKey','entityValue'],
                                where: preferenceWhere,
                            }
                        ]
                    })
            return Promise.resolve(result)
        } catch (e) {
            return Promise.reject(e)
    
        }
    }


// Delete userPrefs
async deleteUserPrefs (params:any, body: any) {
    try{
        const { userId } = params;
        const { preferenceIds} = body;
            await UserPref.destroy({
                where:{
                    userId: userId,
                    preferenceId : {[Op.in] : preferenceIds}
                }
            })

        return Promise.resolve("User preferences deleted successfully")


    } catch (err:any) {
        logger.error("Error in deleting user preferences",err)
        return Promise.reject(err)

    }
}

// Update userPrefs
async update (body:any, params: any) {
    try{
        const { userId } = params;
        const {added = [], removed = []} = body;
            if(added?.length){
                await this.setUserPrefService({
                    userId: userId,
                    prefs : added
                }) 
            } if(removed?.length) {
                let deleteReq = {
                    body : {
                        preferenceIds : removed
                    },
                    params : {
                        userId : userId
                    }
                }
                await this.deleteUserPrefs(deleteReq?.params, deleteReq?.body)
            }

        return Promise.resolve("User preferences updated successfully")


    } catch (err:any) {
        logger.sendError("Error in updating user preferences",err)
        return Promise.reject(err)

    }

}
}

export default UserPrefService