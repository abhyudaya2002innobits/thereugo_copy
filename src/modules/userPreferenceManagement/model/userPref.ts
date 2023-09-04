import { CreationOptional, Model } from "sequelize";
import databaseInstance from "../../../database/dbConfig";
import sequelize from "sequelize";

export interface UserPrefAttributes{
    userPreferenceId: string;
    userId: string;
    prefId: bigint;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
}

class UserPref extends Model<UserPrefAttributes> {
    declare userPreferenceId: string;
    declare userId: string;
    declare prefId: bigint;
    declare createdAt: Date;
    declare createdBy?: string;
    declare updatedAt?: CreationOptional<Date>;
    declare updatedBy?: CreationOptional<string>;
    declare deletedAt?: CreationOptional<Date>;
    declare deletedBy: CreationOptional<string>;
}


UserPref.init(
    {
        userPreferenceId: {
            type: sequelize.DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        userId: {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },

        prefId: {
            type: sequelize.DataTypes.BIGINT,
            allowNull: false,
        },

        createdAt: {
            type: sequelize.DataTypes.DATE,
            allowNull: true
        },

        createdBy: {
            type: sequelize.DataTypes.UUID,
            allowNull: true
        },

        updatedAt: {
            type: sequelize.DataTypes.DATE,
            allowNull: true
        },

        updatedBy: {
            type: sequelize.DataTypes.UUID,
            allowNull: true
        },

        deletedAt: {
            type: sequelize.DataTypes.DATE,
            allowNull: true
        },

        deletedBy: {
            type: sequelize.DataTypes.UUID,
            allowNull: true
        }
    },
    { sequelize: databaseInstance, tableName: "userPreferences", timestamps: true, paranoid: true }

)

export default UserPref
