import databaseInstance from "../../../database/dbConfig";
import { Model, CreationOptional } from "sequelize";
import sequelize from "sequelize";
import { EnumType } from "typescript";

export interface EndUserAttributes {
    endUserId: string;
    fullName: string;
    contactNumber: string;
    email: string;
    isActive: boolean;
    registeredWith: string;
    subscriptionStatus: boolean;
    socialMediaId: string;
    isExist: boolean;
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
    declare endUserId: string;
    declare fullName: string;
    declare email: string;
    declare socialMediaId?: string;
    declare contactNumber?: string;
    declare isActive?: boolean;
    declare password: string;
    declare isExist: boolean;
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
        endUserId: {
            type: sequelize.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        fullName: {
            type: sequelize.STRING,
            allowNull: true
        },

        contactNumber: {
            type: sequelize.STRING,
            allowNull: true,
        },

        email: {
            type: sequelize.STRING,
            allowNull: true,
        },

        subscriptionStatus: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },

        registeredWith: {
            type: sequelize.STRING,
            allowNull: true
        },

        isExist: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },

        socialMediaId: {
            type: sequelize.STRING,
            allowNull: true
        },

        isActive: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },

        password: {
            type: sequelize.STRING,
            allowNull: true,
        },

        imageUrl: {
            type: sequelize.STRING,
            allowNull: true
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
    { sequelize: databaseInstance, tableName: "endUsers", timestamps: true, paranoid: true }
);
export default EndUser;