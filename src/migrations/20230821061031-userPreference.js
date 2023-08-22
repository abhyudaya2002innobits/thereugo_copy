'use strict';

import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('userPreference', {
        userPreferenceId: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          unique: true
        },

        userId: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: {
              tableName: 'endUsers',
            },
            key: 'endUserId'
          },
          allowNull: false,
          unique: true
        },

        prefId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {

            model: {
              tableName: 'preference',
            },
            key: 'prefNumber'
          },
          onDelete: 'CASCADE',
          allowNull: false,
          unique: true,
          
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
      logger.info('userPreference migration run successfully')
    } catch (error) {
      console.log("error in running userPreference migration", error)
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
