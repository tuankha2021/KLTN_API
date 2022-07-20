'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoaiSanPham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LoaiSanPham.hasMany(models.SanPham);
      LoaiSanPham.hasMany(models.Khohang);
      LoaiSanPham.hasMany(models.XuatKho);
    }
  };
  LoaiSanPham.init({
    // id: DataTypes.STRING,
    TenLoai: DataTypes.STRING,
    MinDate: DataTypes.INTEGER,
    HSD: DataTypes.INTEGER,
    TrangThai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LoaiSanPham',
  });
  return LoaiSanPham;
};
