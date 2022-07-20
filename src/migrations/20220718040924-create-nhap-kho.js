'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NhapKho', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NhanVienId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      LoaiSanPhamId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SanPhamId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SoLuong: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NSX: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      HSD: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      ThanhTien: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('NhapKho');
  }
};