import databaseInstance from "../../../database/dbConfig";
import { Model, CreationOptional } from "sequelize";
import sequelize from "sequelize";
import { EnumType } from "typescript";

export interface CountryCityAttributes {
    countryCityId: string;
    entityKey: string;
    entityValue: string;
    stateParentId: string;
    cityParentId: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
}

class CountryCity extends Model<CountryCityAttributes> {
    declare countryCityId: string;
    declare entityKey: string;
    declare entityValue: string;
    declare stateParentId: string;
    declare cityParentId: string;
    declare createdAt: Date;
    declare createdBy?: string;
    declare updatedAt?: CreationOptional<Date>;
    declare updatedBy?: CreationOptional<string>;
    declare deletedAt?: CreationOptional<Date>;
    declare deletedBy: CreationOptional<string>;
}

CountryCity.init(
    {
        countryCityId: {
            type: sequelize.UUID,
            defaultValue:  sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        entityKey: {
            type: sequelize.STRING,
            allowNull: true
        },

        entityValue: {
            type: sequelize.STRING,
            allowNull: true,
            unique: true
        },

        stateParentId: {
            type: sequelize.STRING,
            allowNull: true,
            unique: true,
        },

        cityParentId: {
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
    { sequelize: databaseInstance, tableName: "countryCity", timestamps: true, paranoid: false }
);
export default CountryCity;