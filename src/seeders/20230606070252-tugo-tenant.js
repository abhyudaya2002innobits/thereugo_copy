'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tenants', [{
      tenantId: uuidv4(),
      tenantName: 'There You Go',
      email: 'example@example.com',
      contactNumber: '9910234534',
      isActive: true,
      address1: '6504, Sanzo Road Apt. c',
      city: 'Rockville',
      state: 'Maryland',
      country: 'USA',
      pincode: '21209',
      description: 'Hello I am the super tenant',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tenants', {tenantName: 'There You Go'});
  }
};
