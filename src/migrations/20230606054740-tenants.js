'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
        require: true,
        allowNull: false
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
        allowNull: false
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
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('tenants')
  }
};
