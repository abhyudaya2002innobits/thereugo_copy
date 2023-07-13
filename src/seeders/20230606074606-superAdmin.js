'use strict';

const { v4: uuidv4 } = require('uuid');
const { default: Tenant } = require('../modules/tenantManagement/model/models');
import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      let userExist = await Tenant.findOne({
        where: {
          email: 'example@example.com',
        }
      });
      await queryInterface.bulkInsert('tenantUsers', [{
        tenantUserId: uuidv4(),
        tenantId: userExist?.tenantId,
        fullName: 'super admin',
        email: 'super@admin.com',
        contactNumber: '9910234534',
        isActive: true,
        roleName: "admin",
        password: 'admin@123',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
      logger.info('super admin seeder run successfully')
    } catch (error) {
      console.log("error in running super admin seeder", error)
    }
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
