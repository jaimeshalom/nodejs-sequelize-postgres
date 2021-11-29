'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, {
      id: UserSchema.id,
      email: UserSchema.email,
      password: UserSchema.password,
      createdAt: UserSchema.createdAt,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
  },
};
