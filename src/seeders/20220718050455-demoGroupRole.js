'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('GroupRole', [
      { GroupId: '2', RoleId: '1', },
      { GroupId: '2', RoleId: '2', },
      { GroupId: '2', RoleId: '3', },
      { GroupId: '2', RoleId: '4', },
      { GroupId: '2', RoleId: '5', },
      { GroupId: '2', RoleId: '6', },
      { GroupId: '2', RoleId: '7', },
      { GroupId: '2', RoleId: '8', },
      { GroupId: '2', RoleId: '9', },
      { GroupId: '2', RoleId: '10', },
      { GroupId: '2', RoleId: '11', },
      { GroupId: '2', RoleId: '12', },
      { GroupId: '2', RoleId: '13', },
      { GroupId: '2', RoleId: '14', },
      { GroupId: '2', RoleId: '15', },
      { GroupId: '2', RoleId: '16', },
      { GroupId: '2', RoleId: '17', },
      { GroupId: '2', RoleId: '18', },
      { GroupId: '2', RoleId: '19', },
      { GroupId: '2', RoleId: '20', },
      { GroupId: '2', RoleId: '21', },
      { GroupId: '2', RoleId: '22', },
      { GroupId: '1', RoleId: '2', },
      { GroupId: '1', RoleId: '12', },
      { GroupId: '1', RoleId: '14', },
      { GroupId: '1', RoleId: '20', },
      { GroupId: '1', RoleId: '21', },
      { GroupId: '1', RoleId: '22', },
      { GroupId: '1', RoleId: '25', },
      { GroupId: '1', RoleId: '26', },
      { GroupId: '1', RoleId: '27', },
      { GroupId: '1', RoleId: '28', },
      { GroupId: '2', RoleId: '23', },
      { GroupId: '2', RoleId: '24', },
      { GroupId: '2', RoleId: '25', },
      { GroupId: '2', RoleId: '26', },
      { GroupId: '2', RoleId: '27', },
      { GroupId: '2', RoleId: '28', },
      { GroupId: '2', RoleId: '29', },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('GroupRole', null, {});

  }
};
