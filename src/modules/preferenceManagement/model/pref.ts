import { raw } from "mysql2";
import databaseInstance from "../../../database/dbConfig";
import { Model, CreationOptional } from "sequelize";
import sequelize from "sequelize";
import { EnumType } from "typescript";

export interface PreferenceAttributes {
    preferenceId: string;
    entityKey: string;
    entityValue: string;
    prefNumber: bigint;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
}

class Preference extends Model<PreferenceAttributes> {
    declare preferenceId: string;
    declare entityKey: string;
    declare entityValue: string;
    declare prefNumber: bigint;
    declare createdAt: Date;
    declare createdBy?: string;
    declare updatedAt?: CreationOptional<Date>;
    declare updatedBy?: CreationOptional<string>;
    declare deletedAt?: CreationOptional<Date>;
    declare deletedBy: CreationOptional<string>;
}

Preference.init(
    {
        preferenceId: {
            type: sequelize.DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        entityKey: {
            type: sequelize.DataTypes.STRING,
            allowNull: true
        },

        entityValue: {
            type: sequelize.DataTypes.STRING,
            allowNull: true,
        },

        prefNumber: {
            type: sequelize.DataTypes.BIGINT,
            allowNull: true,
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
    { sequelize: databaseInstance, tableName: "preference", timestamps: true, paranoid: true }
);
export default Preference;