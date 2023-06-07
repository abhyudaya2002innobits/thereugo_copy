'use strict';

import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
    await queryInterface.createTable('tenantEndUsers', {
      tenantEndUserId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      },

      tenantId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'tenants',
          },
          key: 'tenantId'
        },
        allowNull: false
      },

      endUserId: {
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
        allowNull:true
      }
    })
    logger.info('Tenant-enduser Migration run successfully')
  } catch(error){
    console.log("error in running tenant-enduser migration",error)
  }
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('tenantEndUsers')
  }
};
