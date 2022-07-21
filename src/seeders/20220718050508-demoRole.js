'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Role', [
      {
        id: 1,
        Url: '/user/show',
        Description: 'lấy tất cả thông tin người dùng'
      },
      {
        id: 2,
        Url: '/user/shows',
        Description: 'lấy thông tin người dùng'
      },
      {
        id: 3,
        Url: '/user/create',
        Description: 'Tạo mới người dùng'
      },
      {
        id: 4,
        Url: '/user/update',
        Description: 'Edit thông tin người dùng'
      },
      {
        id: 5,
        Url: '/sanpham/show',
        Description: 'show tất cả sản phẩm'
      },
      {
        id: 6,
        Url: '/khohang/tongquang/loaisanpham',
        Description: 'show tất cả sản phẩm'
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Role', null, {});

  }
};
