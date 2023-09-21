import { Op, Sequelize } from "sequelize";
import logger from "../../../common/logger"
import UserPref from "../model/userPref";
import Preference from "../../preferenceManagement/model/pref";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";

class UserPrefService {
    constructor() {
        this.setUserPrefService = this.setUserPrefService.bind(this)
        this.getUserPrefById = this.getUserPrefById.bind(this)
        this.update = this.update.bind(this)
        this.deleteUserPrefs = this.deleteUserPrefs.bind(this);
    }

    async setUserPrefService(body: any, userId:any) {
        try {
            const { preferences } = body

            if(userId=="7956fcac-7ab2-4a60-be92-39a11fc5308d"){
                throw new Exception(ERROR_TYPE.BAD_REQUEST, "User pref cannot be set")
            }

            let createBody = preferences?.map((prefId: any) => {
                return {
                    userId: userId,
                    preferenceId: prefId
                }
            })

            await UserPref?.bulkCreate(createBody);

            return Promise.resolve("User preferences saved successfully")
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
    
                result = await UserPref.findAll(
                    {
                        where:{userId: userId},
                        attributes: {
                            include: [
                                [Sequelize.col("Preference.entityKey"),"entityKey"],
                                [Sequelize.col("Preference.entityValue"),"entityValue"]
                            ]
                        },
                        include: [
                            {
                                model: Preference,
                                attributes: [],
                                where: preferenceWhere,
                            }
                        ]
                    })
            return Promise.resolve(result)
        } catch (e) {
            return Promise.reject(e)
    
        }
    }

    // where: {
    //     ...where,
    //   },
    //   attributes: {
    //     include: [
    //       [Sequelize.col('resources.userId'), 'userId'],
    //       [Sequelize.col('resources.fullName'), 'fullName'],
    //       [Sequelize.col('resources.employeeId'), 'employeeId'],
    //       [Sequelize.col('resources.email'), 'email'],
    //       [Sequelize.col('resources.isActive'), 'isActive'],
    //       [Sequelize.col('resources.contactNumber'), 'contactNumber'],
    //       [Sequelize.col('resources.description'), 'description']

    //     ]
    //   },


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
                    prefs : added
                },userId) 
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