'use strict';
import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   try {
    await queryInterface.createTable("category", {
      categoryId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      }, 

      category: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      parentId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: true
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE,
        default: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },

      createdBy: {
        type: Sequelize.DataTypes.UUID,
        allowNull: true
      },

      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },

      updatedBy: {
        type: Sequelize.DataTypes.UUID,
        allowNull: true
      },

      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },

      deletedBy: {
        type: Sequelize.DataTypes.UUID,
        allowNull: true
      }
    })
    logger.info('categories Migration run successfully')
  } catch(error) {
    console.log("error in running categories migration",error)
  }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
