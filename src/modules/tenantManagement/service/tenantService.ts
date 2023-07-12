import { Op } from "sequelize";
import { Exception } from "../../../common/resp-handler";
import { ERROR_TYPE } from "../../../common/resp-handler/constants";
import Tenant from "../model/models";
import TenalExternalComm from "./externalComm";
import databaseInstance from "../../../database/dbConfig";
import logger from "../../../common/logger";
import { paginator } from "../../../common/pagination";

class TenantService {

    externalComm: any
    constructor() {
        this.externalComm = new TenalExternalComm()
        this.registerTenantService = this.registerTenantService.bind(this)
        this.registerTenantWithAdmin = this.registerTenantWithAdmin.bind(this)
    }

    async registerTenantService(object: any) {
        try {
            var newTenant;
            let tenantExist = await Tenant.findOne({
                where: {
                    [Op.or]: [
                        { email: object.email }, {
                            tenantName: object?.tenantName
                        }
                    ]
                }
            });
            if (tenantExist) {
                if (tenantExist.get()?.tenantName == object?.tenantName) {
                    throw new Exception(ERROR_TYPE.ALREADY_EXISTS, "Tenant with name already exist");

                }
                if (tenantExist.get()?.email == object?.email)
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Email already exists"
                    );
                if (tenantExist.get()?.contactNumber == object?.contactNumber) {
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Contact number already exists"
                    );
                }
            } else {
                newTenant = await Tenant.create(object);
                return Promise.resolve(newTenant);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }

    async registerTenantWithAdmin(object: any) {
        let _transaction
        try {
            var tenantData = object?.tenant
            var adminData = object?.admin

            if (!object?.tenant || !object?.admin) {
                throw new Exception(ERROR_TYPE.BAD_REQUEST, "Data is invalid");
            }
            var newTenant;

            let tenantExist = await Tenant.findOne({
                where: {
                    [Op.or]: [{ email: tenantData?.email },
                    { tenantName: tenantData?.tenantName },
                    { contactNumber: tenantData?.contactNumber }]
                }
            });

            if (tenantExist) {
                if (tenantExist.get()?.tenantName == tenantData?.tenantName) {
                    throw new Exception(ERROR_TYPE.ALREADY_EXISTS, "Organization with this name already exist");

                }
                if (tenantExist.email == tenantData?.email) {
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Organization with this email already exists"
                    );
                }

                if (tenantExist.get()?.contactNumber == tenantData?.contactNumber) {
                    throw new Exception(
                        ERROR_TYPE.ALREADY_EXISTS,
                        "Organization with this contact number already exists"
                    );
                }
            } else {
                // _transaction = await databaseInstance.transaction()
                newTenant = await Tenant.create(tenantData);
                // _transaction.commit()
                var admin = await this.externalComm.createTenantAdmin({ ...adminData, tenantId: newTenant?.tenantId })
                return Promise.resolve({ newTenant, admin });
            }
        } catch (e) {
            logger.error("Error in registering tenant with admin", e)
            return Promise.reject(e);

        }
    }

    async readAllTenants(req: any) {
        try {

            let { limit, sortBy = "tenantName", sortOrder = "ASC", search, isActive } = req.query;
            //pagination for result of get users
            let query = paginator({ sortBy, sortOrder, search }, [
                "tenantName",
            ]);

            if (undefined == sortBy) { sortBy = 'tenantName' }
            if (undefined == sortOrder) { sortOrder = 'ASC' }

            let where = {};

            console.log(query, ">>>orgss")

            // query on basis of isActive
            if (isActive != undefined) {
                where = {
                    ...where,
                    isActive: {
                        [Op.eq]: isActive === "true" || isActive === "1",
                    },
                };
            }
            console.log(isActive, ">>>orgss")


            let OrganizationData = await Tenant.findAndCountAll({
                where: {
                    ...query.where,
                    ...where,
                },
                limit: query.limit,
                offset: query.offset,
                order: query.order,
            })
            console.log(OrganizationData, ">>>orgss")
            return Promise.resolve(OrganizationData.rows)
        } catch (error) {
            return Promise.reject(error)
        }

    }

    async deleteTenant(req: any) {
        try {
            let tenantId = req.params.id
            let organization = await Tenant.findOne({
                where: {
                    tenantId: tenantId
                },
            })

            if ((!organization)) {
                throw new Exception(ERROR_TYPE.NOT_FOUND, `Organization not found`)
            }
            // delete organization 
            await Tenant.destroy({ where: { tenantId: tenantId } })
            console.log(organization, ">>>orgss")
            return Promise.resolve({
                message: `${organization?.tenantName} successfully Deleted.`,
            })
        } catch (error) {
            return Promise.reject(error)
        }

    }
}

export default TenantService;