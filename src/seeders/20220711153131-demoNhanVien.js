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
        GroupId: '2',
        HoTen: 'Admin',
        NgaySinh: '1995-01-30',
        GioiTinh: '1',
        Tel: '0978956734',
        CCCD: '072200002207',
        Email: 'hoangngocadmin@gmail.com ',
        Address: 'Đông Hưng Thuận - Q12',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av1.png',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK171201',
        GroupId: '2',
        HoTen: 'Nguyễn Thanh Toàn',
        NgaySinh: '1998-06-25',
        GioiTinh: '1',
        Tel: '0978956735',
        CCCD: '072200002207',
        Email: 'thanhtoan1999@gmail.com',
        Address: 'Đông Hưng Thuận - Q13',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av2.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK171202',
        GroupId: '2',
        HoTen: 'Nguyễn Văn Tài',
        NgaySinh: '1999-04-03',
        GioiTinh: '1',
        Tel: '0978956736',
        CCCD: '072200002207',
        Email: 'taivan2506@gmail.com',
        Address: 'Đông Hưng Thuận - Q14',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av3.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK171203',
        GroupId: '1',
        HoTen: 'Nguyễn Thị Phượng',
        NgaySinh: '1997-10-02',
        GioiTinh: '0',
        Tel: '0978956737',
        CCCD: '072200002207',
        Email: 'phuong97@gmail.com',
        Address: 'Đông Hưng Thuận - Q15',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av4.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK171204',
        GroupId: '1',
        HoTen: 'Lê Tấn Tài',
        NgaySinh: '1986-11-30',
        GioiTinh: '1',
        Tel: '0978956738',
        CCCD: '072200002207',
        Email: 'letai7321@gmail.com',
        Address: 'Song Hành - Hóc Môn',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av5.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK171205',
        GroupId: '1',
        HoTen: 'Trần Vĩnh',
        NgaySinh: '1998-05-11',
        GioiTinh: '1',
        Tel: '0978956739',
        CCCD: '072200002207',
        Email: 'nan',
        Address: 'Bình Mĩ - Củ Chi ',
        NgayVaoLam: '2017-12-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av6.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK190301',
        GroupId: '1',
        HoTen: 'Nguyễn Quốc Tuấn',
        NgaySinh: '1999-10-30',
        GioiTinh: '1',
        Tel: '0978956740',
        CCCD: '072200002207',
        Email: 'nan',
        Address: 'Bình Mĩ - Củ Chi ',
        NgayVaoLam: '2019-03-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av7.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK190302',
        GroupId: '1',
        HoTen: 'Lê Bích Trâm',
        NgaySinh: '2000-03-27',
        GioiTinh: '0',
        Tel: '0978956741',
        CCCD: '072200002207',
        Email: 'nan',
        Address: 'Bình Mĩ - Củ Chi ',
        NgayVaoLam: '2019-03-15',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av8.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK200701',
        GroupId: '1',
        HoTen: 'Tiêu Tự Đạt',
        NgaySinh: '2000-02-16',
        GioiTinh: '1',
        Tel: '0978956742',
        CCCD: '072200002207',
        Email: 'dattieu16022000@gmail.com',
        Address: 'Bình Mĩ - Củ Chi ',
        NgayVaoLam: '2020-07-05',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av9.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK200702',
        GroupId: '1',
        HoTen: 'Thái Vĩnh Đức',
        NgaySinh: '1999-04-03',
        GioiTinh: '1',
        Tel: '0978956743',
        CCCD: '072200002207',
        Email: 'thaiduck@gmail.com',
        Address: 'Bình Mĩ - Củ Chi ',
        NgayVaoLam: '2020-07-05',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av10.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK200703',
        GroupId: '1',
        HoTen: 'Nguyễn Đức Huy',
        NgaySinh: '2000-10-10',
        GioiTinh: '1',
        Tel: '0978956744',
        CCCD: '072200002207',
        Email: 'nan',
        Address: 'Bình Mĩ - Củ Chi ',
        NgayVaoLam: '2020-07-05',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av11.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
      },
      {
        id: 'NVK210201',
        GroupId: '1',
        HoTen: 'Nguyễn Tuấn Kha',
        NgaySinh: '2000-07-29',
        GioiTinh: '1',
        Tel: '0784439929',
        CCCD: '072200002207',
        Email: '18520873@gm.uit.edu.vn',
        Address: 'Linh Trung - Thủ Đức',
        NgayVaoLam: '2021-02-28',
        Password: '$2a$10$dSSSbWN4gDttyw.cQ03HA.a8j3Pj6sCdzDxznmJHu8CB6izlxvNAi',
        Avata: 'av12.jpg',
        Facebook: 'https://www.facebook.com/',
        Zalo: '0978956734'
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
