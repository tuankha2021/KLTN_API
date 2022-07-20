'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khohang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Khohang.belongsTo(models.LoaiSanPham);
      Khohang.belongsTo(models.SanPham);
    }
  };
  Khohang.init({
    LoaiSanPhamId: DataTypes.STRING,
    SanPhamId: DataTypes.STRING,
    NSX: DataTypes.DATEONLY,
    HSD: DataTypes.DATEONLY,
    SoLuong: DataTypes.INTEGER,
    ViTri: DataTypes.STRING,
    Barcode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Khohang',
  });
  return Khohang;
};