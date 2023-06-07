'use strict';

import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
    await queryInterface.createTable('tenants', {
      tenantId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      },

      tenantName: {
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false
      },

      contactNumber: {
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
        unique: true
      },
      
      email:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
        unique: true,
      },

      description:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
      },

      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true
      },

      address1:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
      },

      city:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
      },

      state:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
      },

      country:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
      },

      pincode:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
      },

      address2:{
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      logo:{
        type: Sequelize.DataTypes.STRING,
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
        allowNull:true
      }
    })
    logger.info('Tenant Migration run successfully')
  } catch(error){
    console.log("error in running tenant migration",error)
  }
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('tenants')
  }
};
