'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('KhoHang', [
      { LoaiSanPhamId: 'BD', SanPhamId: 'BD01', NSX: '6/13/2022', HSD: '9/11/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BD', SanPhamId: 'BD01', NSX: '6/15/2022', HSD: '9/13/2022', SoLuong: '65', },
      { LoaiSanPhamId: 'BD', SanPhamId: 'BD01', NSX: '6/15/2022', HSD: '9/13/2022', SoLuong: '231', },
      { LoaiSanPhamId: 'BD', SanPhamId: 'BD01', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '115', },
      { LoaiSanPhamId: 'BD', SanPhamId: 'BD02', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '300', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL00', NSX: '6/11/2022', HSD: '6/13/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL00', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL00', NSX: '6/15/2022', HSD: '6/17/2022', SoLuong: '135', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL00', NSX: '6/17/2022', HSD: '6/19/2022', SoLuong: '126', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL00', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '95', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL01', NSX: '6/11/2022', HSD: '6/13/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL01', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '300', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL02', NSX: '6/12/2022', HSD: '6/14/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL02', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL02', NSX: '6/15/2022', HSD: '6/17/2022', SoLuong: '127', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL02', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '230', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL03', NSX: '6/11/2022', HSD: '6/13/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL03', NSX: '6/12/2022', HSD: '6/14/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL03', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL03', NSX: '6/16/2022', HSD: '6/18/2022', SoLuong: '97', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL03', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '124', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL04', NSX: '6/10/2022', HSD: '6/12/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL04', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL04', NSX: '6/15/2022', HSD: '6/17/2022', SoLuong: '125', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL04', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '119', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL05', NSX: '6/10/2022', HSD: '6/12/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL05', NSX: '6/11/2022', HSD: '6/13/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL05', NSX: '6/12/2022', HSD: '6/14/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL05', NSX: '6/15/2022', HSD: '6/17/2022', SoLuong: '236', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL05', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '120', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL06 ', NSX: '6/12/2022', HSD: '6/14/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL06 ', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL06 ', NSX: '6/14/2022', HSD: '6/16/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL06 ', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '289', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL07', NSX: '6/10/2022', HSD: '6/12/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL07', NSX: '6/11/2022', HSD: '6/13/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL07', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL07', NSX: '6/16/2022', HSD: '6/18/2022', SoLuong: '167', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL07', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '213', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL08', NSX: '6/11/2022', HSD: '6/13/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL08', NSX: '6/12/2022', HSD: '6/14/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL08', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL08', NSX: '6/16/2022', HSD: '6/18/2022', SoLuong: '126', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL08', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '332', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL09', NSX: '6/11/2022', HSD: '6/13/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL09', NSX: '6/12/2022', HSD: '6/14/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL09', NSX: '6/13/2022', HSD: '6/15/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL09', NSX: '6/15/2022', HSD: '6/17/2022', SoLuong: '97', },
      { LoaiSanPhamId: 'BL', SanPhamId: 'BL09', NSX: '6/18/2022', HSD: '6/20/2022', SoLuong: '238', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM01', NSX: '6/11/2022', HSD: '6/18/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM01', NSX: '6/18/2022', HSD: '6/25/2022', SoLuong: '232', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM03', NSX: '6/10/2022', HSD: '6/17/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM03', NSX: '6/11/2022', HSD: '6/18/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM03', NSX: '6/13/2022', HSD: '6/20/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM03', NSX: '6/18/2022', HSD: '6/25/2022', SoLuong: '128', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM04', NSX: '6/10/2022', HSD: '6/17/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM04', NSX: '6/11/2022', HSD: '6/18/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM04', NSX: '6/12/2022', HSD: '6/19/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM04', NSX: '6/15/2022', HSD: '6/22/2022', SoLuong: '321', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM04', NSX: '6/18/2022', HSD: '6/25/2022', SoLuong: '215', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM05', NSX: '6/11/2022', HSD: '6/18/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM05', NSX: '6/12/2022', HSD: '6/19/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM05', NSX: '6/13/2022', HSD: '6/20/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM05', NSX: '6/15/2022', HSD: '6/22/2022', SoLuong: '363', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM05', NSX: '6/18/2022', HSD: '6/25/2022', SoLuong: '322', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM06', NSX: '6/10/2022', HSD: '6/17/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM06', NSX: '6/11/2022', HSD: '6/18/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM06', NSX: '6/13/2022', HSD: '6/20/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM06', NSX: '6/15/2022', HSD: '6/22/2022', SoLuong: '35', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM06', NSX: '6/16/2022', HSD: '6/23/2022', SoLuong: '79', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM06', NSX: '6/17/2022', HSD: '6/24/2022', SoLuong: '83', },
      { LoaiSanPhamId: 'BM', SanPhamId: 'BM06', NSX: '6/18/2022', HSD: '6/25/2022', SoLuong: '100', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F100', NSX: '6/10/2022', HSD: '7/6/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F100', NSX: '6/17/2022', HSD: '7/13/2022', SoLuong: '246', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F100', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '311', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F103', NSX: '6/12/2022', HSD: '7/8/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F103', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '326', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F35', NSX: '6/11/2022', HSD: '7/7/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F35', NSX: '6/12/2022', HSD: '7/8/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F35', NSX: '6/13/2022', HSD: '7/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F35', NSX: '6/13/2022', HSD: '7/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F35', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '415', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F351', NSX: '6/13/2022', HSD: '7/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F351', NSX: '6/16/2022', HSD: '7/12/2022', SoLuong: '225', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F351', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '311', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F352', NSX: '6/11/2022', HSD: '7/7/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F352', NSX: '6/12/2022', HSD: '7/8/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F352', NSX: '6/13/2022', HSD: '7/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F352', NSX: '6/15/2022', HSD: '7/11/2022', SoLuong: '249', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F352', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '367', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F55', NSX: '6/11/2022', HSD: '7/7/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F55', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '413', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F551', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '234', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F552', NSX: '6/10/2022', HSD: '7/6/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F552', NSX: '6/11/2022', HSD: '7/7/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F552', NSX: '6/13/2022', HSD: '7/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F552', NSX: '6/15/2022', HSD: '7/11/2022', SoLuong: '268', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F552', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '356', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F553', NSX: '6/10/2022', HSD: '7/6/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F553', NSX: '6/13/2022', HSD: '7/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F553', NSX: '6/15/2022', HSD: '7/11/2022', SoLuong: '233', },
      { LoaiSanPhamId: 'F', SanPhamId: 'F553', NSX: '6/18/2022', HSD: '7/14/2022', SoLuong: '329', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC01', NSX: '6/10/2022', HSD: '6/25/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC01', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC01', NSX: '6/12/2022', HSD: '6/27/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC02', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC02', NSX: '6/13/2022', HSD: '6/28/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC50', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '157', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC502', NSX: '6/15/2022', HSD: '6/30/2022', SoLuong: '253', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC502', NSX: '6/16/2022', HSD: '7/1/2022', SoLuong: '325', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC502', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '163', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC65', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC65', NSX: '6/13/2022', HSD: '6/28/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC65', NSX: '6/15/2022', HSD: '6/30/2022', SoLuong: '332', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC65', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '478', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC651', NSX: '6/10/2022', HSD: '6/25/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC651', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC651', NSX: '6/13/2022', HSD: '6/28/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC651', NSX: '6/13/2022', HSD: '6/28/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC651', NSX: '6/15/2022', HSD: '6/30/2022', SoLuong: '371', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC651', NSX: '6/17/2022', HSD: '7/2/2022', SoLuong: '263', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC651', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '225', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC652', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC652', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '297', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC851', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '182', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC852', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC852', NSX: '6/12/2022', HSD: '6/27/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC852', NSX: '6/13/2022', HSD: '6/28/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC852', NSX: '6/15/2022', HSD: '6/30/2022', SoLuong: '289', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RC852', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '173', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD50', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD50', NSX: '6/12/2022', HSD: '6/27/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD50', NSX: '6/12/2022', HSD: '6/27/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD50', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '198', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD65', NSX: '6/13/2022', HSD: '6/28/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD65', NSX: '6/14/2022', HSD: '6/29/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD65', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '256', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD85', NSX: '6/10/2022', HSD: '6/25/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD85', NSX: '6/11/2022', HSD: '6/26/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD85', NSX: '6/13/2022', HSD: '6/28/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD85', NSX: '6/15/2022', HSD: '6/30/2022', SoLuong: '318', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD85', NSX: '6/16/2022', HSD: '7/1/2022', SoLuong: '167', },
      { LoaiSanPhamId: 'RC', SanPhamId: 'RCD85', NSX: '6/18/2022', HSD: '7/3/2022', SoLuong: '283', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC01', NSX: '6/10/2022', HSD: '9/8/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC01', NSX: '6/14/2022', HSD: '9/12/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC01', NSX: '6/15/2022', HSD: '9/13/2022', SoLuong: '259', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC01', NSX: '6/17/2022', HSD: '9/15/2022', SoLuong: '159', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC01', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '286', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC02', NSX: '6/11/2022', HSD: '9/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC02', NSX: '6/13/2022', HSD: '9/11/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC02', NSX: '6/17/2022', HSD: '9/15/2022', SoLuong: '298', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC02', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '361', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC03', NSX: '6/11/2022', HSD: '9/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC03', NSX: '6/12/2022', HSD: '9/10/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC03', NSX: '6/13/2022', HSD: '9/11/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC03', NSX: '6/17/2022', HSD: '9/15/2022', SoLuong: '359', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC03', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '255', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC04', NSX: '6/11/2022', HSD: '9/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC04', NSX: '6/12/2022', HSD: '9/10/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC04', NSX: '6/15/2022', HSD: '9/13/2022', SoLuong: '589', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC04', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '266', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC05', NSX: '6/10/2022', HSD: '9/8/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC05', NSX: '6/11/2022', HSD: '9/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC05', NSX: '6/12/2022', HSD: '9/10/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC05', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '432', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC06', NSX: '6/10/2022', HSD: '9/8/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC06', NSX: '6/12/2022', HSD: '9/10/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC06', NSX: '6/13/2022', HSD: '9/11/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC06', NSX: '6/15/2022', HSD: '9/13/2022', SoLuong: '511', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC06', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '783', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC07', NSX: '6/11/2022', HSD: '9/9/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC07', NSX: '6/15/2022', HSD: '9/13/2022', SoLuong: '491', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC07', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '432', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC08', NSX: '6/12/2022', HSD: '9/10/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC08', NSX: '6/13/2022', HSD: '9/11/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC08', NSX: '6/14/2022', HSD: '9/12/2022', SoLuong: '0', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC08', NSX: '6/15/2022', HSD: '9/13/2022', SoLuong: '526', },
      { LoaiSanPhamId: 'SC', SanPhamId: 'SC08', NSX: '6/18/2022', HSD: '9/16/2022', SoLuong: '187', },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('KhoHang', null, {});
  }
};
