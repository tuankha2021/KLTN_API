import db from "../models/index";
import { Op } from 'sequelize';
import sequelize from "sequelize";

const getLoaiSanPham = async () => {
    try {

        let data = await db.Khohang.findAll({
            attributes: ['LoaiSanPhamId'],
            where: { SoLuong: { [Op.gt]: 0 } },
            group: 'LoaiSanPhamId',
            include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
        });

        if (data) {
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

const getAllData = async (MaLoai) => {
    try {
        MaLoai = "F"
        let data = await db.Khohang.findAll({
            attributes: ['SanPhamId', [sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
            where: { SoLuong: { [Op.gt]: 0 }, LoaiSanPhamId: MaLoai },
            group: 'SanPhamId',
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
        });

        if (data) {
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

const getPieChartData = async (MaLoai) => {
    try {
        MaLoai = "F"
        let getdata = await db.Khohang.findAll({
            attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
            where: { SoLuong: { [Op.gt]: 0 }, LoaiSanPhamId: MaLoai },
            group: 'SanPhamId',
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
        });

        let data = {
            AddData: function (tensp, soluong) {
                this.tensp = tensp;
                this.soluong = soluong;
            }
        };

        let listTensp = [];
        let listSoluong = [];
        for (let i in getdata) {
            listTensp.push(getdata[i].SanPham.TenSanPham);
            listSoluong.push(getdata[i].SoLuong);
        }
        data.tensp = listTensp;
        data.soluong = listSoluong;

        if (data) {
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

const getSanPham = async (id) => {
    try {
        id = 'F35';
        let data = await db.Khohang.findAll({
            attributes: ['SanPhamId', 'NSX', 'HSD', 'SoLuong', 'ViTri'],
            where: { SanPhamId: id, SoLuong: { [Op.gt]: 0 } },
            include: { model: db.SanPham, attributes: ['TenSanPham'] },
        });

        if (data) {
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


module.exports = {
    getAllData, getSanPham, getLoaiSanPham, getPieChartData
}