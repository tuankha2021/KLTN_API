'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Khohang', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LoaiSanPhamId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SanPhamId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      NSX: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      HSD: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      SoLuong: {
        type: Sequelize.INTEGER,
        defaultVaule: '0'
      },
      ViTri: {
        type: Sequelize.STRING
      },
      Barcode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Khohang');
  }
};