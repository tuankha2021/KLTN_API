'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('LoaiSanPham', [
      {
        id: 'F',
        TenLoai: 'Bánh Flan',
        MinDate: '5',
        HSD: '26',
        TrangThai: '1',
        createdAt: '2018-01-30',
      },
      {
        id: 'RC',
        TenLoai: 'Rau câu',
        MinDate: '5',
        HSD: '15',
        TrangThai: '1',
        createdAt: '2018-01-30',
      },
      {
        id: 'BL',
        TenLoai: 'Bánh bông lan',
        MinDate: '1',
        HSD: '2',
        TrangThai: '1',
        createdAt: '2018-07-19',
      },
      {
        id: 'BM',
        TenLoai: 'Bánh mì',
        MinDate: '1',
        HSD: '7',
        TrangThai: '0',
        createdAt: '2018-07-19',
      },
      {
        id: 'SC',
        TenLoai: 'Sữa chua',
        MinDate: '5',
        HSD: '90',
        TrangThai: '1',
        createdAt: '2018-07-19',
      },
      {
        id: 'BD',
        TenLoai: 'Bánh dứa',
        MinDate: '5',
        HSD: '90',
        TrangThai: '1',
        createdAt: '2021-07-19',
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('LoaiSanPham', null, {});
  }
};
