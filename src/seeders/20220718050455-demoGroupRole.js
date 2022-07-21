'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('GroupRole', [
      {
        GroupId: '1',
        RoleId: '2'
      },
      {
        GroupId: '1',
        RoleId: '4'
      },
      {
        GroupId: '2',
        RoleId: '1'
      },
      {
        GroupId: '2',
        RoleId: '2'
      },
      {
        GroupId: '2',
        RoleId: '3'
      },
      {
        GroupId: '2',
        RoleId: '4'
      },
      {
        GroupId: '2',
        RoleId: '5'
      },
      {
        GroupId: '2',
        RoleId: '6'
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('GroupRole', null, {});

  }
};
