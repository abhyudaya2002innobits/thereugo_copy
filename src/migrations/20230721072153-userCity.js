'use strict';

import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('userCity', {
        userCityId: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          unique: true
        },

        cityPriceId: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: {
              tableName: 'cityPrice',
            },
            key: 'cityPriceId'
          },
          allowNull: true
        },

        couponId: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: {
              tableName: 'coupon',
            },
            key: 'couponId'
          },
          allowNull: true
        },

        endUserId: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: {
              tableName: 'endUsers',
            },
            key: 'endUserId'
          },
          allowNull: true
        },

        ValidStartDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },

        ValidEndDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },

        withToken: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: true,
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
      logger.info('User City Migration run successfully')
    } catch(error) {
      console.log("error in running User City migration",error)
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
