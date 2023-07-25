'use strict';
const { v4: uuidv4 } = require('uuid');
import { default as logger } from "../common/logger";
import CountryCity from "../modules/poiManagement/model/countryCItyModel";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      let stateExist = await CountryCity.findOne({
        where: {
          entityValue: 'Alaska',
        }
      });
      let stateExist2 = await CountryCity.findOne({
        where: {
          entityValue: 'Delhi',
        }
      });
      queryInterface.bulkInsert("countryCity", [{
        countryCityId: uuidv4(),
        entityKey: "city",
        entityValue: "Delhi",
        stateParentId: "",
        cityParentId: stateExist2?.countryCityId ,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        countryCityId: uuidv4(),
        entityKey: "city",
        entityValue: "Barrow",
        stateParentId: "",
        cityParentId: stateExist?.countryCityId,
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      ])
      logger.info('country seeder run successfully')
    } catch (error) {
      console.log("error in running country seeder", error)
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
