'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('XuatKho', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NgayXuat: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      NhanVienId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      NVGiaoHang: {
        type: Sequelize.STRING
      },
      BenNhan: {
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
      GhiChu: {
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
    await queryInterface.dropTable('XuatKho');
  }
};