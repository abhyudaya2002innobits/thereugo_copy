import databaseInstance from "../../../database/dbConfig";
import { Model, CreationOptional } from "sequelize";
import sequelize from "sequelize";
import { EnumType } from "typescript";

export interface TenantAttributes {
    tenantId: string;
    tenantName: string;
    contactNumber: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    logo: string;
    isActive: boolean;
    description: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
}

class Tenant extends Model<TenantAttributes> {
    declare tenantId: string;
    declare tenantName: string;
    declare email: string;
    declare contactNumber: string;
    declare address1: string;
    declare address2?: CreationOptional<string>;
    declare city: string;
    declare state: string;
    declare country: string;
    declare description: string;
    declare logo?: CreationOptional<string>;
    declare pincode: string;
    declare isActive?: boolean;
    declare createdAt: Date;
    declare createdBy?: string;
    declare updatedAt?: CreationOptional<Date>;
    declare updatedBy?: CreationOptional<string>;
    declare deletedAt?: CreationOptional<Date>;
    declare deletedBy: CreationOptional<string>;
}

Tenant.init(
    {
        tenantId: {
            type: sequelize.UUID,
            defaultValue:  sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        tenantName: {
            type: sequelize.STRING,
            allowNull: true
        },

        contactNumber: {
            type: sequelize.STRING,
            allowNull: true,
            unique: true
        },

        email: {
            type: sequelize.STRING,
            allowNull: true,
            unique: true,
        },

        description: {
            type: sequelize.STRING,
            allowNull: true,
        },

        isActive: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },

        address1: {
            type: sequelize.STRING,
            allowNull: true,
        },

        city: {
            type: sequelize.STRING,
            allowNull: true,
        },

        state: {
            type: sequelize.STRING,
            allowNull: true,
        },

        country: {
            type: sequelize.STRING,
            allowNull: true,
        },

        pincode: {
            type: sequelize.STRING,
            allowNull: true,
        },

        address2: {
            type: sequelize.STRING,
            allowNull: true,
        },

        logo: {
            type: sequelize.STRING,
            allowNull: true,
        },

        createdAt: {
            type: sequelize.DATE,
            allowNull: true
        },

        createdBy: {
            type: sequelize.UUID,
            allowNull: true
        },

        updatedAt: {
            type: sequelize.DATE,
            allowNull: true
        },

        updatedBy: {
            type: sequelize.UUID,
            allowNull: true
        },

        deletedAt: {
            type: sequelize.DATE,
            allowNull: true
        },

        deletedBy: {
            type: sequelize.UUID,
            allowNull: true
        }
    },
    { sequelize: databaseInstance, tableName: "tenants", timestamps: true, paranoid: false }
);
export default Tenant;