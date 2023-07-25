'use strict';

const { v4: uuidv4 } = require('uuid');
import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    try {
      queryInterface.bulkInsert("countryCity", [{
        countryCityId: uuidv4(),
        entityKey: "country",
        entityValue: "India",
        stateParentId: "",
        cityParentId: "",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        countryCityId: uuidv4(),
        entityKey: "country",
        entityValue: "United States",
        stateParentId: "",
        cityParentId: "",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      ])
      logger.info('country seeder run successfully')
    } catch (error) {
      console.log("error in running country seeder", error)
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
