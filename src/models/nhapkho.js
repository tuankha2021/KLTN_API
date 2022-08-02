'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhapKho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NhapKho.belongsTo(models.NhanVien);
      NhapKho.belongsTo(models.SanPham);
    }
  };
  NhapKho.init({
    NhanVienId: DataTypes.STRING,
    LoaiSanPhamId: DataTypes.STRING,
    SanPhamId: DataTypes.STRING,
    SoLuong: DataTypes.INTEGER,
    NSX: DataTypes.DATEONLY,
    HSD: DataTypes.DATEONLY,
    ThanhTien: DataTypes.INTEGER,
    GhiChu: DataTypes.STRING,
    BarCode: DataTypes.STRING,
    NgayNhap: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'NhapKho',
  });
  return NhapKho;
};