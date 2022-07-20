'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LoaiSanPham', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      TenLoai: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MinDate: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      HSD: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      TrangThai: {
        type: Sequelize.INTEGER(1),
        defaultValue: '1'
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
    await queryInterface.dropTable('LoaiSanPham');
  }
};
