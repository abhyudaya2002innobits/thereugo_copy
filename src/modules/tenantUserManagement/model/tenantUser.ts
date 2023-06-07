import databaseInstance from "../../../database/dbConfig";
import { Model, CreationOptional } from "sequelize";
import sequelize from "sequelize";
import { EnumType } from "typescript";

export interface TenantUserAttributes {
    tenantUserId: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    isActive: boolean;
    userName: string;
    password: string;
    imageUrl: string;
    tenantId: string;
    roleName: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
}

class TenantUser extends Model<TenantUserAttributes> {
    declare tenantUserId: string;
    declare firstName: string;
    declare lastName?: string;
    declare email: string;
    declare contactNumber: string;
    declare isActive?: boolean;
    declare tenantId: string;
    declare roleName: string;
    declare userName: string;
    declare password: string;
    declare imageUrl?: CreationOptional<string>;
    declare createdAt: Date;
    declare createdBy?: string;
    declare updatedAt?: CreationOptional<Date>;
    declare updatedBy?: CreationOptional<string>;
    declare deletedAt?: CreationOptional<Date>;
    declare deletedBy: CreationOptional<string>;
}

TenantUser.init(
    {
        tenantUserId: {
            type: sequelize.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        firstName: {
            type: sequelize.STRING,
            allowNull: false
        },

        lastName: {
            type: sequelize.STRING,
            allowNull: true
        },

        contactNumber: {
            type: sequelize.STRING,
            allowNull: false,
            unique: true
        },

        email: {
            type: sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        userName: {
            type: sequelize.STRING,
            allowNull: false,
        },

        isActive: {
            type: sequelize.BOOLEAN,
            allowNull: false
        },

        password: {
            type: sequelize.STRING,
            allowNull: false,
        },

        imageUrl: {
            type: sequelize.STRING,
            allowNull: true
        },

        tenantId: {
            type: sequelize.STRING,
            allowNull: false
        },

        roleName: {
            type: sequelize.STRING,
            allowNull: false
        },

        createdAt: {
            type: sequelize.DATE,
            allowNull: false
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
    { sequelize: databaseInstance, tableName: "tenantUsers", timestamps: true, paranoid: true }
);
export default TenantUser;