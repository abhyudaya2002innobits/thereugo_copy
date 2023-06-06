'use strict';

const { v4: uuidv4 } = require('uuid');
const { default: Tenant } = require('../modules/tenantManagement/model/models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let userExist = await Tenant.findOne({
      where: {
        email: 'example@example.com',
      }
    });
    await queryInterface.bulkInsert('tenantUsers', [{
      tenantUserId: uuidv4(),
      tenantId: userExist?.tenantId,
      firstName: 'super',
      lastName: 'admin',
      email: 'super@admin.com',
      contactNumber: '9910234534',
      isActive: true,
      roleName: "admin",
      userName: "super@123",
      password: 'admin@123',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
    * Add commands to revert seed here.
    *
    * Example:
    * await queryInterface.bulkDelete('People', null, {});
    */
  }
};
