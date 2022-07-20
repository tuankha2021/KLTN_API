'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NhanVien', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      GroupId: {
        allowNull: false,
        type: Sequelize.INTEGER(1),
        defaultValue: '1'
      },
      HoTen: {
        allowNull: false,
        type: Sequelize.STRING
      },
      NgaySinh: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      GioiTinh: {
        allowNull: false,
        type: Sequelize.INTEGER(1)
      },
      Tel: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      Email: {
        type: Sequelize.STRING
      },
      Address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TrangThai: {
        type: Sequelize.INTEGER(1),
        defaultValue: '1'
      },
      NgayVaoLam: {
        type: Sequelize.DATEONLY
      },
      NgayNghi: {
        type: Sequelize.DATEONLY
      },
      Vang: {
        type: Sequelize.INTEGER(1),
        defaultValue: '1'
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      DanhGia: {
        type: Sequelize.STRING
      },
      Avata: {
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
    await queryInterface.dropTable('NhanVien');
  }
};