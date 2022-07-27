'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NhanVien.belongsTo(models.Group);
      NhanVien.hasMany(models.NhapKho);
      NhanVien.hasMany(models.XuatKho);
    }
  };
  NhanVien.init({
    // id: DataTypes.STRING,
    GroupId: DataTypes.INTEGER,
    HoTen: DataTypes.STRING,
    NgaySinh: DataTypes.DATEONLY,
    GioiTinh: DataTypes.INTEGER,
    Tel: DataTypes.STRING,
    Email: DataTypes.STRING,
    Address: DataTypes.STRING,
    TrangThai: DataTypes.INTEGER,
    NgayVaoLam: DataTypes.DATEONLY,
    NgayNghi: DataTypes.DATEONLY,
    Vang: DataTypes.INTEGER,
    Password: DataTypes.STRING,
    DanhGia: DataTypes.STRING,
    Avata: DataTypes.STRING,
    Facebook: DataTypes.STRING,
    Zalo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'NhanVien',
  });
  return NhanVien;
};