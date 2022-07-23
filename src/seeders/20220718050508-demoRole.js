'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Role', [
      { id: '1', Url: '/user/show', Description: 'Lấy ra toàn bộ danh sác nhân viên', },
      { id: '2', Url: '/user/shows', Description: 'Lấy ra thông tin của một nhân viên', },
      { id: '3', Url: '/user/create', Description: 'Tạo mới một nhân viên trên hệ thống', },
      { id: '4', Url: '/user/update', Description: 'Cập nhật thông tin nhân viên', },
      { id: '5', Url: '/user/delete', Description: 'Xóa nhân viên khỏi hệ thống', },
      { id: '6', Url: '/sanpham/show', Description: 'Lấy ra danh sách sản phẩm', },
      { id: '7', Url: '/khohang/tongquan/loaisanpham', Description: 'Danh sách các loại sản phẩm có trong kho hàng', },
      { id: '8', Url: '/khohang/tongquan/piechartdata', Description: 'Dữ liệu vẽ biểu đồ tròn', },
      { id: '9', Url: '/khohang/tongquan/danhsachsanpham', Description: 'Danh sách sản phầm tồn trong kho', },
      { id: '10', Url: '/khohang/tongquan/chitiet', Description: 'Chi tiết các sản phẩm tồn trong kho', },
      { id: '11', Url: '/xuatnhap/nhapkho/admin', Description: 'Danh sách thông tin nhập kho của nhân viên', },
      { id: '12', Url: '/xuatnhap/nhapkho/user', Description: 'Danh sách thông tin nhập kho của một nhân viên', },
      { id: '13', Url: '/xuatnhap/xuatkho/admin', Description: 'Danh sách thông tin xuất kho của nhân viên', },
      { id: '14', Url: '/xuatnhap/xuatkho/user', Description: 'Danh sách thông tin nhập kho của một nhân viên', },
      { id: '15', Url: '/xuatnhap/xuatkho/tongquan/loaisanphamlinechart', Description: 'Dữ liệu vẽ biểu đồ đường (2 tuần)', },
      { id: '16', Url: '/xuatnhap/xuatkho/tongquan/loaisanphamlinecharts', Description: 'Dữ liệu vẽ biểu đồ đường (1 tháng)', },
      { id: '17', Url: '/xuatnhap/xuatkho/tongquan/sanphamlinechart', Description: 'Biểu đồ đường cho 1 loại sản phẩm (2 tuần)', },
      { id: '18', Url: '/xuatnhap/xuatkho/tongquan/sanphamlinecharts', Description: 'Biểu đồ đường cho 1 loại sản phẩm (1 tháng)', },
      { id: '19', Url: '/xuatnhap/xuatkho/tongquan/listloaisanpham', Description: 'Danh sách tổng quát tình hình xuất kho các loại sản phẩm', },
      { id: '20', Url: '/select/sanpham', Description: 'Data select sản phẩm', },
      { id: '21', Url: '/select/loaisanpham', Description: 'Data select loại sản phẩm', },
      { id: '22', Url: '/select/group', Description: 'Data select chức vụ nhân viên', },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Role', null, {});

  }
};
