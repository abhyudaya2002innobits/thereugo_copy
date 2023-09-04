import { Op } from "sequelize";
import logger from "../../../common/logger"
import UserPref from "../model/userPref";

class UserPrefService {
    constructor() {
        this.setUserPrefService = this.setUserPrefService.bind(this)
        this.getUserPrefByIdController = this.getUserPrefByIdController.bind(this)
    }

    async setUserPrefService(body: any) {
        try {
            const { userId,prefs } = body
            let createBody = prefs?.map((prefId: any) => {
                return {
                    userId: userId,
                    preferenceId: prefId
                }
            })

            await UserPref.bulkCreate(createBody);

            return Promise.resolve("User preferences saved successfully")
        } catch (e) {
            logger.error(e)
            return Promise.reject(e)
        }
    }

    async getUserPrefByIdController(req: any) {
        try {
        } catch (e) {
            logger.error(e)
            return Promise.reject()
        }
    }


// Delete userPrefs
async deleteUserPrefs (body:any, params: any) {
    try{
        const { userId } = params;
        const { preferenceIds = []} = body;
            await UserPref.destroy({
                where:{
                    userId: userId,
                    prefId : {[Op.in] : preferenceIds}
                }
            })

        return Promise.resolve("User preferences deleted successfully")


    } catch (err:any) {
        console.log("Error in deleting user preferences",err)
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
                await this.deleteUserPrefs(deleteReq?.body, deleteReq?.params)
            }

        return Promise.resolve("User preferences updated successfully")


    } catch (err:any) {
        console.log("Error in updating user preferences",err)
        return Promise.reject(err)

    }

}
}

export default UserPrefService