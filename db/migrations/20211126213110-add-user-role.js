'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  },
};