'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SanPham', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      LoaiSanPhamId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TenSanPham: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TrangThai: {
        type: Sequelize.INTEGER(1),
        defualtValue: '1'
      },
      MaxTon: {
        type: Sequelize.INTEGER
      },
      MinTon: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      MoTa: {
        type: Sequelize.STRING
      },
      Hinh: {
        type: Sequelize.STRING
      },
      BarCode: {
        type: Sequelize.STRING
      },
      Loc: {
        type: Sequelize.INTEGER
      },
      Thung: {
        type: Sequelize.INTEGER
      },
      Khay: {
        type: Sequelize.INTEGER
      },
      GiaBan: {
        type: Sequelize.INTEGER
      },
      GiaSanPham: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SanPham');
  }
};