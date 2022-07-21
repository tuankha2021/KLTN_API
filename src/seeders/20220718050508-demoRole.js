'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Role', [
      {
        Url: '/user/show',
        Description: 'lấy tất cả thông tin người dùng'
      },
      {
        Url: '/user/shows',
        Description: 'lấy thông tin người dùng'
      },
      {
        Url: '/user/create',
        Description: 'Tạo mới người dùng'
      },
      {
        Url: '/user/update',
        Description: 'Edit thông tin người dùng'
      },
      {
        Url: '/sanpham/show',
        Description: 'show tất cả sản phẩm'
      },
      {
        Url: '/khohang/tongquang/loaisanpham',
        Description: 'show tất cả sản phẩm'
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Role', null, {});

  }
};
