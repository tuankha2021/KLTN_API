'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Role', [
      { id: '1', Url: '/user/show', Description: 'nan', },
      { id: '2', Url: '/user/shows', Description: 'nan', },
      { id: '3', Url: '/user/create', Description: 'nan', },
      { id: '4', Url: '/user/update', Description: 'nan', },
      { id: '5', Url: '/sanpham/show', Description: 'nan', },
      { id: '6', Url: '/sanpham/create', Description: 'nan', },
      { id: '7', Url: '/khohang/tongquan/loaisanpham', Description: 'nan', },
      { id: '8', Url: '/khohang/tongquan/piechartdata', Description: 'nan', },
      { id: '9', Url: '/khohang/tongquan/danhsachsanpham', Description: 'nan', },
      { id: '10', Url: '/khohang/tongquan/chitiet', Description: 'nan', },
      { id: '11', Url: '/khohang/search', Description: 'nan', },
      { id: '12', Url: '/xuatnhap/nhapkho/admin', Description: 'nan', },
      { id: '13', Url: '/xuatnhap/nhapkho/user', Description: 'nan', },
      { id: '14', Url: '/xuatnhap/xuatkho/admin', Description: 'nan', },
      { id: '15', Url: '/xuatnhap/xuatkho/user', Description: 'nan', },
      { id: '16', Url: '/xuatnhap/xuatkho/tongquan/loaisanphamlinechart', Description: 'nan', },
      { id: '17', Url: '/xuatnhap/xuatkho/tongquan/loaisanphamlinecharts', Description: 'nan', },
      { id: '18', Url: '/xuatnhap/xuatkho/tongquan/sanphamlinechart', Description: 'nan', },
      { id: '19', Url: '/xuatnhap/xuatkho/tongquan/sanphamlinecharts', Description: 'nan', },
      { id: '20', Url: '/xuatnhap/xuatkho/tongquan/listloaisanpham', Description: 'nan', },
      { id: '21', Url: '/xuatnhap/tongquan/dudoansoluong', Description: 'nan', },
      { id: '22', Url: '/xuatnhap/tongquan/dudoansanpham', Description: 'nan', },
      { id: '23', Url: '/thongbao', Description: 'nan', },
      { id: '24', Url: '/nhaphang', Description: 'nan', },
      { id: '25', Url: '/xuathang/getdata', Description: 'nan', },
      { id: '26', Url: '/xuathang', Description: 'nan', },
      { id: '27', Url: '/baocao', Description: 'nan', },
      { id: '28', Url: '/select/sanpham', Description: 'nan', },
      { id: '29', Url: '/select/loaisanpham', Description: 'nan', },
      { id: '30', Url: '/select/group', Description: 'nan', },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Role', null, {});

  }
};
