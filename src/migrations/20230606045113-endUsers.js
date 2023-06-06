'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('endUsers', {
      endUserId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      },

      firstName: {
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false
      },

      lastName: {
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false
      },

      userName: {
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false
      },

      contactNumber: {
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false
      },
      
      email:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
        unique: true,
      },

      registeredWith:{
        type: Sequelize.DataTypes.STRING,
        require: true,
        allowNull: false,
      },

      imageUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },

      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        require: true,
        allowNull: false
      },

      subscriptionStatus: {
        type: Sequelize.DataTypes.BOOLEAN,
        require: true,
        allowNull: false
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
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('endUsers')
  }
};
