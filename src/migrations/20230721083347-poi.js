'use strict';
import { default as logger } from "../common/logger";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  try {
    await queryInterface.createTable("poi", {
      poiId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      }, 

      poiName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      categoryId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'category',
          },
          key: 'categoryId'
        },
        allowNull: true
      },

      countryCityId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'countryCity',
          },
          key: 'countryCityId'
        },
        allowNull: true
      },

      layerName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      knownFor: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true
      },

      isApproved: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true
      },

      lat: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      long: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

      address: {
        type: Sequelize.DataTypes.STRING,
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
    logger.info('poi Migration run successfully')
  } catch(error) {
    console.log("error in running poi migration",error)
  }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
