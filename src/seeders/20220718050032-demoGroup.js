'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Group', [
      {
        id: 1,
        Name: 'Nhân viên kho hàng',
        Description: 'Thực hiện các hoạt động của kho hàng'
      },
      {
        id: 2,
        Name: 'Nhân viên quản lý kho',
        Description: 'quản lý mọi hoạt động của kho hàng'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Group', null, {});

  }
};
