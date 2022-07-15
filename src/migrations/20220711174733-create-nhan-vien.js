'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NhanVien', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaNhanVien: {
        type: Sequelize.STRING(9),
        allowNull: false
      },
      Level: {
        type: Sequelize.INTEGER(1),
        defaultValue: '0'
      },
      HoTen: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      NgaySinh: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      GioiTinh: {
        type: Sequelize.INTEGER(1),
        allowNull: false
      },
      Tel: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      TrangThai: {
        type: Sequelize.INTEGER(1),
        defaultValue: '1'
      },
      NgayVaoLam: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      NgayNghi: {
        type: Sequelize.DATEONLY
      },
      Vang: {
        type: Sequelize.INTEGER(1),
        defaultValue: '0'
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false
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