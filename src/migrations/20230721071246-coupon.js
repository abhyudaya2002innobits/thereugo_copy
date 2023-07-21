'use strict';

import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('coupon', {
        couponId: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          unique: true
        },

        couponName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },

        couponCode: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },

        startDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },

        endDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },

        count: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
        },

        discount: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },

        isToken: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: true,
        },

        isExpired: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: true,
        },

        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
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

        tenantId: {
          type: Sequelize.DataTypes.UUID,
          references: {
            model: {
              tableName: 'tenants',
            },
            key: 'tenantId'
          },
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
      logger.info('Coupon Migration run successfully')
    } catch(error) {
      console.log("error in running coupon migration",error)
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
