'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('endUsers', [{
      endUserId: uuidv4(),
      firstName: 'Alex',
      lastName: 'John',
      email: 'super@user.com',
      contactNumber: '9910234534',
      isActive: true,
      registeredWith: 'creds',
      subscriptionStatus: false,
      userName: "inactive@123",
      password: 'user@123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      endUserId: uuidv4(),
      firstName: 'Eddie',
      lastName: 'Miller',
      email: 'super2@user.com',
      contactNumber: '9910234532',
      isActive: true,
      registeredWith: 'creds',
      subscriptionStatus: true,
      userName: "active@123",
      password: 'user@123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
