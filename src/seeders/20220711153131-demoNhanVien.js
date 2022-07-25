'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('NhanVien', [
      {
 id: 'NVK171200',
 GroupId: '0',
 HoTen: 'Admin',
 NgaySinh: '1995-01-30',
 GioiTinh: '1',
 Tel: '978956734',
 Email: 'hoangngocadmin@gmail.com ',
 Address: 'Đông Hưng Thuận - Q12',
 NgayVaoLam: '2017-12-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av1.png',
},
{
 id: 'NVK171201',
 GroupId: '0',
 HoTen: 'Nguyễn Thanh Toàn',
 NgaySinh: '1998-06-25',
 GioiTinh: '1',
 Tel: '978956735',
 Email: 'thanhtoan1999@gmail.com',
 Address: 'Đông Hưng Thuận - Q13',
 NgayVaoLam: '2017-12-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av2.jpg',
},
{
 id: 'NVK171202',
 GroupId: '0',
 HoTen: 'Nguyễn Văn Tài',
 NgaySinh: '1999-04-03',
 GioiTinh: '1',
 Tel: '978956736',
 Email: 'taivan2506@gmail.com',
 Address: 'Đông Hưng Thuận - Q14',
 NgayVaoLam: '2017-12-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av3.jpg',
},
{
 id: 'NVK171203',
 GroupId: '1',
 HoTen: 'Nguyễn Thị Phượng',
 NgaySinh: '1997-10-02',
 GioiTinh: '0',
 Tel: '978956737',
 Email: 'phuong97@gmail.com',
 Address: 'Đông Hưng Thuận - Q15',
 NgayVaoLam: '2017-12-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av4.jpg',
},
{
 id: 'NVK171204',
 GroupId: '1',
 HoTen: 'Lê Tấn Tài',
 NgaySinh: '1986-11-30',
 GioiTinh: '1',
 Tel: '978956738',
 Email: 'letai7321@gmail.com',
 Address: 'Song Hành - Hóc Môn',
 NgayVaoLam: '2017-12-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av5.jpg',
},
{
 id: 'NVK171205',
 GroupId: '1',
 HoTen: 'Trần Vĩnh',
 NgaySinh: '1998-05-11',
 GioiTinh: '1',
 Tel: '978956739',
 Email: 'nan',
 Address: 'Bình Mĩ - Củ Chi ',
 NgayVaoLam: '2017-12-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av6.jpg',
},
{
 id: 'NVK190301',
 GroupId: '1',
 HoTen: 'Nguyễn Quốc Tuấn',
 NgaySinh: '1999-10-30',
 GioiTinh: '1',
 Tel: '978956740',
 Email: 'nan',
 Address: 'Bình Mĩ - Củ Chi ',
 NgayVaoLam: '2019-03-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av7.jpg',
},
{
 id: 'NVK190302',
 GroupId: '1',
 HoTen: 'Lê Bích Trâm',
 NgaySinh: '2000-03-27',
 GioiTinh: '0',
 Tel: '978956741',
 Email: 'nan',
 Address: 'Bình Mĩ - Củ Chi ',
 NgayVaoLam: '2019-03-15',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av8.jpg',
},
{
 id: 'NVK200701',
 GroupId: '1',
 HoTen: 'Tiêu Tự Đạt',
 NgaySinh: '2000-02-16',
 GioiTinh: '1',
 Tel: '978956742',
 Email: 'dattieu16022000@gmail.com',
 Address: 'Bình Mĩ - Củ Chi ',
 NgayVaoLam: '2020-07-05',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av9.jpg',
},
{
 id: 'NVK200702',
 GroupId: '1',
 HoTen: 'Thái Vĩnh Đức',
 NgaySinh: '1999-04-03',
 GioiTinh: '1',
 Tel: '978956743',
 Email: 'thaiduck@gmail.com',
 Address: 'Bình Mĩ - Củ Chi ',
 NgayVaoLam: '2020-07-05',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av10.jpg',
},
{
 id: 'NVK200703',
 GroupId: '1',
 HoTen: 'Nguyễn Đức Huy',
 NgaySinh: '2000-10-10',
 GioiTinh: '1',
 Tel: '978956744',
 Email: 'nan',
 Address: 'Bình Mĩ - Củ Chi ',
 NgayVaoLam: '2020-07-05',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av11.jpg',
},
{
 id: 'NVK210201',
 GroupId: '1',
 HoTen: 'Nguyễn Tuấn Kha',
 NgaySinh: '2000-07-29',
 GioiTinh: '1',
 Tel: '784439929',
 Email: '18520873@gm.uit.edu.vn',
 Address: 'Linh Trung - Thủ Đức',
 NgayVaoLam: '2021-02-28',
 Password: '$2a$10$9Smw2hprKi0KY0SxXKrPJOSl6VxjvIDuF9UluLztEW4xW8LG7.dWW',
 Avata: 'av12.jpg',
},
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('NhanVien', null, {});
  }
};
