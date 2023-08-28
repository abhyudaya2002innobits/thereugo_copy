'use strict';

const { v4: uuidv4 } = require('uuid');
import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      queryInterface.bulkInsert("preference", [{
        preferenceId: uuidv4(),
        entityKey: "cuisine",
        entityValue: "North Indian",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "cuisine",
        entityValue: "japanese",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "cuisine",
        entityValue: "chinese",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "cuisine",
        entityValue: "South Indian",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "cuisine",
        entityValue: "American",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "travel",
        entityValue: "Climbing",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "travel",
        entityValue: "Adventure",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "travel",
        entityValue: "Mountains",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "travel",
        entityValue: "Deserts",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "hobby",
        entityValue: "dance",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "hobby",
        entityValue: "singing",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "hobby",
        entityValue: "shopping",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "hobby",
        entityValue: "slow music",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "Additional",
        entityValue: "clubbing",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "additional",
        entityValue: "painting",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "Additional",
        entityValue: "gaming",
        updatedAt: new Date(),
        createdAt: new Date(),
      },
      {
        preferenceId: uuidv4(),
        entityKey: "additional",
        entityValue: "walking",
        updatedAt: new Date(),
        createdAt: new Date(),
      },

      ])
      logger.info('preference seeder run successfully')
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
