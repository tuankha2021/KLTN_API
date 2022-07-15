'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('NhanVien', [
      {
        MaNhanVien: 'NVK171200',
        Level: 1,
        HoTen: 'Admin',
        NgaySinh: '2000-01-30',
        GioiTinh: 1,
        Tel: '0978956734',
        Email: '18520873@gm.uit.edu.vn',
        Address: 'Đông Hưng Thuận - Quận 12 - TP Hồ Chí Minh',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$PaURDWZewbs41r6Sm6LZFOJsgUoOei2sbwMcx0JX1Oz7aCvVVQyFq'
      },
      {
        MaNhanVien: 'NVK171201',
        Level: 0,
        HoTen: 'User',
        NgaySinh: '2000-07-30',
        GioiTinh: 1,
        Tel: '0978956734',
        Email: '18520843@gm.uit.edu.vn',
        Address: 'Đông Hưng Thuận - Quận 12 - TP Hồ Chí Minh',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$PaURDWZewbs41r6Sm6LZFOJsgUoOei2sbwMcx0JX1Oz7aCvVVQyFq'
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('NhanVien', null, {});
  }
};
