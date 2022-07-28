'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class XuatKho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      XuatKho.belongsTo(models.NhanVien);
      XuatKho.belongsTo(models.SanPham);
      XuatKho.belongsTo(models.LoaiSanPham);
    }
  };
  XuatKho.init({
    NgayXuat: DataTypes.DATEONLY,
    NhanVienId: DataTypes.STRING,
    NVGiaoHang: DataTypes.STRING,
    BenNhan: DataTypes.STRING,
    LoaiSanPhamId: DataTypes.STRING,
    SanPhamId: DataTypes.STRING,
    SoLuong: DataTypes.INTEGER,
    NSX: DataTypes.DATEONLY,
    HSD: DataTypes.DATEONLY,
    ThanhTien: DataTypes.INTEGER,
    GhiChu: DataTypes.STRING,
    BarCode: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'XuatKho',
  });
  return XuatKho;
};