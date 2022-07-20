'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SanPham', [
      { id: 'F35', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan 35g', Hinh: 'F35.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '8', Thung: '30', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F55', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan 55g', Hinh: 'F55.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '6', Thung: '45', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F100', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan 100g', Hinh: 'F100.png', TrangThai: '1', MaxTon: '5000', MinTon: '500', Loc: '4', Thung: '24', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F351', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan matcha 35g', Hinh: 'F351.png', TrangThai: '0', MaxTon: '5000', MinTon: '500', Loc: '8', Thung: '30', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F551', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan matcha 55g', Hinh: 'F551.png', TrangThai: '0', MaxTon: '5000', MinTon: '500', Loc: '6', Thung: '45', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F352', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan vị dâu 35g', Hinh: 'F352.png', TrangThai: '0', MaxTon: '5000', MinTon: '500', Loc: '8', Thung: '30', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F552', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan vị dâu 55g ', Hinh: 'F552.png', TrangThai: '0', MaxTon: '5000', MinTon: '500', Loc: '6', Thung: '45', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F553', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan trân châu 55g', Hinh: 'F553.png', TrangThai: '0', MaxTon: '5000', MinTon: '500', Loc: '6', Thung: '45', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'F103', LoaiSanPhamId: 'F', TenSanPham: 'Bánh Flan trân châu 100g', Hinh: 'F103.png', TrangThai: '0', MaxTon: '5000', MinTon: '500', Loc: '4', Thung: '24', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RC50', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu 2 lớp 50g', Hinh: 'RC50.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RC65', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu 2 lớp 65g', Hinh: 'RC65.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RCD50', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu dừa 50g', Hinh: 'RCD50.png', TrangThai: '1', MaxTon: '50000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RCD65', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu dừa 65g', Hinh: 'RCD65.png', TrangThai: '1', MaxTon: '50000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RCD85', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu dừa 85g', Hinh: 'RCD85.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RC651', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu 3 lớp 65g', Hinh: 'RC651.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RC851', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu 3 lớp 85g', Hinh: 'RC851.png', TrangThai: '1', MaxTon: '5000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-01-30', },
      { id: 'RC502', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu chanh dây 50g', Hinh: 'RC502.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-05-19', },
      { id: 'RC652', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu chanh dây 65g', Hinh: 'RC652.png', TrangThai: '1', MaxTon: '10000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-05-19', },
      { id: 'RC852', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu chanh dây 85g', Hinh: 'RC852.png', TrangThai: '1', MaxTon: '5000', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-05-19', },
      { id: 'RC01', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu sơn thủy', Hinh: 'RC01.png', TrangThai: '0', MaxTon: '500', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-05-20', },
      { id: 'RC02', LoaiSanPhamId: 'RC', TenSanPham: 'Rau câu 3D', Hinh: 'RC02.png', TrangThai: '0', MaxTon: '100', MinTon: '2000', Loc: '6', Thung: '30', Khay: '22', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-05-21', },
      { id: 'BL01', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan phú sỹ', Hinh: 'BL01.png', TrangThai: '1', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL02', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan cẩm thạch', Hinh: 'BL02.png', TrangThai: '1', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL03', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan dừa', Hinh: 'BL03.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL04', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan dâu', Hinh: 'BL04.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL05', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan chà bông', Hinh: 'BL05.png', TrangThai: '1', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL06 ', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan trứng muối', Hinh: 'BL06 .png', TrangThai: '1', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL07', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan mứt dâu', Hinh: 'BL07.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL08', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan mứt thơm', Hinh: 'BL08.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL09', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan kem', Hinh: 'BL09.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BL00', LoaiSanPhamId: 'BL', TenSanPham: 'Bông lan thường', Hinh: 'BL00.png', TrangThai: '1', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BM01', LoaiSanPhamId: 'BM', TenSanPham: 'Bánh mì chà bông', Hinh: 'BM01.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BM02', LoaiSanPhamId: 'BM', TenSanPham: 'Bánh mì xúc xích', Hinh: 'BM02.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BM03', LoaiSanPhamId: 'BM', TenSanPham: 'Bánh mì pate', Hinh: 'BM03.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BM04', LoaiSanPhamId: 'BM', TenSanPham: 'Bánh mì socola', Hinh: 'BM04.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BM05', LoaiSanPhamId: 'BM', TenSanPham: 'Bánh mì sừng trâu', Hinh: 'BM05.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BM06', LoaiSanPhamId: 'BM', TenSanPham: 'Bánh mì con cua', Hinh: 'BM06.png', TrangThai: '0', MaxTon: '5000', MinTon: '1000', Loc: '0', Thung: '52', Khay: '45', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC01', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua bịch', Hinh: 'SC01.png', TrangThai: '1', MaxTon: '20000', MinTon: '1000', Loc: '0', Thung: '150', Khay: '200', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC02', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua mứt dâu', Hinh: 'SC02.png', TrangThai: '1', MaxTon: '10000', MinTon: '1000', Loc: '6', Thung: '24', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC03', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua mứt việt quốc', Hinh: 'SC03.png', TrangThai: '1', MaxTon: '10000', MinTon: '1000', Loc: '6', Thung: '24', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC04', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua mứt thơm', Hinh: 'SC04.png', TrangThai: '1', MaxTon: '10000', MinTon: '1000', Loc: '6', Thung: '24', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC05', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua socola', Hinh: 'SC05.png', TrangThai: '1', MaxTon: '10000', MinTon: '1000', Loc: '6', Thung: '24', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC06', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua trân châu', Hinh: 'SC06.png', TrangThai: '1', MaxTon: '10000', MinTon: '1000', Loc: '6', Thung: '24', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC07', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua nếp cẩm ', Hinh: 'SC07.png', TrangThai: '0', MaxTon: '10000', MinTon: '1000', Loc: '6', Thung: '24', Khay: '48', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'SC08', LoaiSanPhamId: 'SC', TenSanPham: 'Sữa chua bịch vị trái cây ', Hinh: 'SC08.png', TrangThai: '1', MaxTon: '20000', MinTon: '1000', Loc: '6', Thung: '12', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2018-07-19', },
      { id: 'BD01', LoaiSanPhamId: 'BD', TenSanPham: 'Bánh dứa', Hinh: 'BD01.png', TrangThai: '1', MaxTon: '15000', MinTon: '1000', Loc: '6', Thung: '12', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2021-07-19', },
      { id: 'BD02', LoaiSanPhamId: 'BD', TenSanPham: 'Bánh dứa đặt biệt', Hinh: 'BD02.png', TrangThai: '0', MaxTon: '5000', MinTon: '100', Loc: '6', Thung: '12', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2021-07-20', },
      { id: 'BD03', LoaiSanPhamId: 'BD', TenSanPham: 'Bánh dứa vị matcha', Hinh: 'BD03.png', TrangThai: '0', MaxTon: '1000', MinTon: '100', Loc: '6', Thung: '12', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2021-07-21', },
      { id: 'BD04', LoaiSanPhamId: 'BD', TenSanPham: 'Bánh dứa vị socola', Hinh: 'BD04.png', TrangThai: '0', MaxTon: '1000', MinTon: '100', Loc: '6', Thung: '12', Khay: '24', GiaBan: '3100', GiaSanPham: '2200', createdAt: '2021-07-22', },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SanPham', null, {});
  }
};
