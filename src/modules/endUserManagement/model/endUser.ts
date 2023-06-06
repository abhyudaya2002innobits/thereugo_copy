import databaseInstance from "../../../database/dbConfig";
import { Model, CreationOptional } from "sequelize";
import sequelize from "sequelize";
import { EnumType } from "typescript";

export interface EndUserAttributes {
    EndUserId: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    isActive: boolean;
    userName: string;
    registeredWith: string;
    subscriptionStatus: boolean;
    password: string;
    imageUrl: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
}

class EndUser extends Model<EndUserAttributes> {
    declare EndUserId: string;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare contactNumber: string;
    declare isActive?: boolean;
    declare userName: string;
    declare password: string;
    declare registeredWith: string;
    declare subscriptionStatus: boolean;
    declare imageUrl?: CreationOptional<string>;
    declare createdAt: Date;
    declare createdBy?: string;
    declare updatedAt?: CreationOptional<Date>;
    declare updatedBy?: CreationOptional<string>;
    declare deletedAt?: CreationOptional<Date>;
    declare deletedBy: CreationOptional<string>;
}

EndUser.init(
    {
        EndUserId: {
            type: sequelize.UUID,
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

        subscriptionStatus: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },

        registeredWith: {
            type: sequelize.STRING,
            allowNull: false
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
    { sequelize: databaseInstance, tableName: "tenants", timestamps: true, paranoid: true }
);
export default EndUser;