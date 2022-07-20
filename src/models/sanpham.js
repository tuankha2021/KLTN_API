'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SanPham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SanPham.belongsTo(models.LoaiSanPham);
      SanPham.hasMany(models.NhapKho);
      SanPham.hasMany(models.XuatKho);
      SanPham.hasMany(models.Khohang);

    }
  };
  SanPham.init({
    // id: DataTypes.STRING,
    LoaiSanPhamId: DataTypes.STRING,
    TenSanPham: DataTypes.STRING,
    TrangThai: DataTypes.INTEGER,
    MaxTon: DataTypes.INTEGER,
    MinTon: DataTypes.INTEGER,
    MoTa: DataTypes.STRING,
    Hinh: DataTypes.STRING,
    BarCode: DataTypes.STRING,
    Loc: DataTypes.INTEGER,
    Thung: DataTypes.INTEGER,
    Khay: DataTypes.INTEGER,
    GiaBan: DataTypes.INTEGER,
    GiaSanPham: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SanPham',
  });
  return SanPham;
};