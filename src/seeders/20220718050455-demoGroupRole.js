'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('GroupRole', [
      {
        GroupId: '0',
        RoleId: '0'
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('GroupRole', null, {});

  }
};
