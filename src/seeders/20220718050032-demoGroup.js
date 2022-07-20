'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Group', [
      {
        Name: 'Nhân viên quản lý kho',
        Description: 'quản lý mọi hoạt động của kho hàng'
      },
      {
        Name: 'Nhân viên kho hàng',
        Description: 'Thực hiện các hoạt động của kho hàng'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Group', null, {});

  }
};
