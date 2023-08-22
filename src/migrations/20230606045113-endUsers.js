'use strict';

import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
    await queryInterface.createTable('endUsers', {
      endUserId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      },

      fullName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      contactNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      
      email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      registeredWith:{
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      socialMediaId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      imageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true
      },

      isExist: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true
      },

      subscriptionStatus: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE,
        default: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true
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
    logger.info('End user Migration run successfully')
  } catch(error) {
    console.log("error in running end user migration",error)
  }
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('endUsers')
  }
};
