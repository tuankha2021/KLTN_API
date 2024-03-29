import db from "../models/index";
import { Op } from 'sequelize';
import sequelize from 'sequelize';

const getAllData = async () => {
    try {

        let user = await db.XuatKho.findAll({
            include: [{ model: db.NhanVien, attributes: ['HoTen'] }, { model: db.SanPham, attributes: ['TenSanPham'] }],

        });

        if (user) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: user
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getUserData = async (rawdata) => {

    try {
        console.log(">>> check rowdata: ", rawdata)
        let user = await db.XuatKho.findAll({
            include: [{ model: db.SanPham, attributes: ['TenSanPham'] }],
            where: { NhanVienId: rawdata.id },
            // order: ['NgayXuat', 'DESC']

        });
        console.log(">> chedck user ", user)
        if (user) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: user
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getLoaiSPLineChart = async (rawdata) => {
    try {
        let days = rawdata.days
        let day = '2022/6/18'

        // get today
        // let date = new Date(this.valueOf());
        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }
        let date = new Date();
        date = date.subDays(day, days);

        let loaiSP = await db.XuatKho.findAll({
            attributes: ['LoaiSanPhamId'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: ['LoaiSanPhamId'],
        })

        let getdate = await db.XuatKho.findAll({
            attributes: ['LoaiSanPhamId', 'NgayXuat'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: ['NgayXuat'],
        })

        let listDate = [];
        for (let x in getdate) {
            listDate.push(getdate[x].NgayXuat);
        }

        let data = [];

        for (let sp in loaiSP) {
            let obj = {
                AddData: function (name, data, date) {
                    this.name = name;
                    this.data = data;
                    this.date = date;
                }
            };

            let tensp = await db.XuatKho.findOne({
                attributes: ['LoaiSanPhamId'],
                where: { NgayXuat: { [Op.gte]: date }, LoaiSanPhamId: loaiSP[sp].LoaiSanPhamId },
                include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
            });

            obj.name = tensp.LoaiSanPham.TenLoai;

            let listData = [];

            for (let i in listDate) {

                let datasp = await db.XuatKho.findAll({
                    attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
                    where: { LoaiSanPhamId: loaiSP[sp].LoaiSanPhamId, NgayXuat: listDate[i] },
                });

                for (let check in datasp) {
                    if (datasp) {
                        listData.push(datasp[check].SoLuong);
                    } else {
                        let a = 0;
                        listData.push(a);
                    }
                }

            }
            obj.data = listData;
            obj.date = listDate;

            data.push(obj);
        }

        if (data) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: data
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getLoaiSPLineCharts = async (rawdata) => {
    try {
        let days = rawdata.days
        let today = new Date();
        today = '2022/6/18'
        // get today
        // let date = new Date(this.valueOf());
        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }

        Date.prototype.addDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }

        let date = new Date();
        date = date.subDays(today, days);

        let loaiSP = await db.XuatKho.findAll({
            attributes: ['LoaiSanPhamId'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: ['LoaiSanPhamId'],
        })

        let getdate = await db.XuatKho.findAll({
            attributes: ['LoaiSanPhamId', 'NgayXuat'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: ['NgayXuat'],
        })

        let listDate = [];
        for (let x in getdate) {
            listDate.push(getdate[x].NgayXuat);
        }

        let data = [];

        for (let sp in loaiSP) {
            let obj = {
                AddData: function (name, data, date) {
                    this.name = name;
                    this.data = data;
                    this.date = date;
                }
            };

            let tensp = await db.XuatKho.findOne({
                attributes: ['LoaiSanPhamId'],
                where: { NgayXuat: { [Op.gte]: date }, LoaiSanPhamId: loaiSP[sp].LoaiSanPhamId },
                include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
            });

            obj.name = tensp.LoaiSanPham.TenLoai;

            let listData = [];

            for (let i in listDate) {

                let datasp = await db.XuatKho.findAll({
                    attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
                    where: { LoaiSanPhamId: loaiSP[sp].LoaiSanPhamId, NgayXuat: listDate[i] },
                });

                for (let check in datasp) {
                    if (datasp) {
                        listData.push(datasp[check].SoLuong);
                    } else {
                        let a = 0;
                        listData.push(a);
                    }
                }

            }
            while (listDate.length > 12) {
                for (let i = 1; i < listDate.length - 1; i++) {
                    if (listDate.length > 12) {
                        listDate.splice(i + 1, 1);
                        listData.splice(i + 1, 1);
                    }
                }
            }

            obj.data = listData;
            obj.date = listDate;

            data.push(obj);
        }

        if (data) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: data
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getSPLineChart = async (rawdata) => {
    try {
        let days = rawdata.days;
        let MaLoai = rawdata.MaLoai;
        let day = '2022/6/18'
        // get today
        // let date = new Date(this.valueOf());

        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }
        let date = new Date();
        date = date.subDays(day, days);

        let maSP = await db.XuatKho.findAll({
            attributes: ['SanPhamId'],
            where: { NgayXuat: { [Op.gte]: date }, LoaiSanPhamId: MaLoai },
            group: ['SanPhamId'],
        })

        let getdate = await db.XuatKho.findAll({
            attributes: ['SanPhamId', 'NgayXuat'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: ['NgayXuat'],
        })

        let listDate = [];
        for (let x in getdate) {
            listDate.push(getdate[x].NgayXuat);
        }
        let data = [];

        for (let sp in maSP) {
            let obj = {
                AddData: function (name, data, date) {
                    this.name = name;
                    this.data = data;
                    this.date = date;
                }
            };

            let tensp = await db.XuatKho.findOne({
                attributes: ['SanPhamId'],
                where: { NgayXuat: { [Op.gte]: date }, SanPhamId: maSP[sp].SanPhamId },
                include: { model: db.SanPham, attributes: ['TenSanPham'] },
            });

            obj.name = tensp.SanPham.TenSanPham;

            let listData = [];

            for (let i in listDate) {

                let datasp = await db.XuatKho.findAll({
                    attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
                    where: { SanPhamId: maSP[sp].SanPhamId, NgayXuat: listDate[i] },
                });

                for (let check in datasp) {
                    if (datasp) {
                        listData.push(datasp[check].SoLuong);
                    } else {
                        let a = 0;
                        listData.push(a);
                    }
                }

            }
            obj.data = listData;
            obj.date = listDate;

            data.push(obj);
        }

        if (data) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: data
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getSPLineCharts = async (rawdata) => {
    try {
        let days = rawdata.days;
        let MaLoai = rawdata.MaLoai;
        let today = '2022/6/18'
        // get today
        // let date = new Date(this.valueOf());

        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }
        let date = new Date();
        date = date.subDays(today, days);

        let maSP = await db.XuatKho.findAll({
            attributes: ['SanPhamId'],
            where: { NgayXuat: { [Op.gte]: date }, LoaiSanPhamId: MaLoai },
            group: ['SanPhamId'],
        })

        let getdate = await db.XuatKho.findAll({
            attributes: ['SanPhamId', 'NgayXuat'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: ['NgayXuat'],
        })

        let listDate = [];
        for (let x in getdate) {
            listDate.push(getdate[x].NgayXuat);
        }
        let data = [];

        for (let sp in maSP) {
            let obj = {
                AddData: function (name, data, date) {
                    this.name = name;
                    this.data = data;
                    this.date = date;
                }
            };

            let tensp = await db.XuatKho.findOne({
                attributes: ['SanPhamId'],
                where: { NgayXuat: { [Op.gte]: date }, SanPhamId: maSP[sp].SanPhamId },
                include: { model: db.SanPham, attributes: ['TenSanPham'] },
            });

            obj.name = tensp.SanPham.TenSanPham;

            let listData = [];

            for (let i in listDate) {

                let datasp = await db.XuatKho.findAll({
                    attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
                    where: { SanPhamId: maSP[sp].SanPhamId, NgayXuat: listDate[i] },
                });

                for (let check in datasp) {
                    if (datasp) {
                        listData.push(datasp[check].SoLuong);
                    } else {
                        let a = 0;
                        listData.push(a);
                    }
                }

            }
            while (listDate.length > 12) {
                for (let i = 1; i < listDate.length - 1; i++) {
                    if (listDate.length > 12) {
                        listDate.splice(i + 1, 1);
                        listData.splice(i + 1, 1);
                    }
                }
            }

            obj.data = listData;
            obj.date = listDate;

            data.push(obj);
        }

        if (data) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: data
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getLoaiSanPhamData = async (rawdata) => {
    try {
        let days = rawdata.days
        let day = '2022/6/18'
        // get today
        // let date = new Date(this.valueOf());
        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }
        let date = new Date();
        date = date.subDays(day, days);

        let user = await db.XuatKho.findAll({
            attributes: ['LoaiSanPhamId', [sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
            where: { NgayXuat: { [Op.gte]: date } },
            include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
            group: ['LoaiSanPhamId']
        });

        if (user) {
            // let data = user.get({ plain: true })
            return {
                EM: "get data success",
                EC: 0,
                DT: user
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const predictSL = async () => {

    try {
        // get today
        // let date = new Date(this.valueOf());
        let day = '2022/6/18'

        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }

        let date = new Date();
        date = date.subDays(day, 15);
        let avg = await db.XuatKho.findAll({
            attributes: [[sequelize.fn('AVG', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: 'SanPhamId',
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
        })

        let kho = await db.Khohang.findAll({
            attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId'],
            group: ['SanPhamId']
        })


        for (let i in avg) {
            avg[i].SoLuong = Math.round(avg[i].SoLuong);
            for (let j in kho) {
                if (kho[j].SanPhamId === avg[i].SanPhamId) {
                    avg[i].SoLuong = avg[i].SoLuong - kho[j].SoLuong;
                }
            }
        }

        if (avg) {
            return {
                EM: "get data success",
                EC: 0,
                DT: avg
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }

    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }

}

const predictSP = async () => {

    try {
        // get today
        // let date = new Date(this.valueOf());
        let day = '2022/6/18'

        Date.prototype.subDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }

        let date = new Date();
        date = date.subDays(day, 120);
        let avg = await db.XuatKho.findAll({
            limit: 3,
            attributes: [[sequelize.fn('AVG', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId'],
            where: { NgayXuat: { [Op.gte]: date } },
            group: 'SanPhamId',
            order: [['SoLuong', 'DESC']],
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
        })

        if (avg) {
            return {
                EM: "get data success",
                EC: 0,
                DT: avg
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }

    } catch (error) {
        console.log(error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }

}


module.exports = {
    getAllData, getUserData, getLoaiSPLineChart, getLoaiSPLineCharts,
    getSPLineChart, getSPLineCharts, getLoaiSanPhamData, predictSL,
    predictSP
}