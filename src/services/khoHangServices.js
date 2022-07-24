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

const getAllData = async (rawdata) => {
    try {
        // MaLoai = "F"
        let data = await db.Khohang.findAll({
            attributes: ['SanPhamId', [sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
            where: { SoLuong: { [Op.gt]: 0 }, LoaiSanPhamId: rawdata.MaLoai },
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

const getPieChartData = async () => {
    // let MaLoai = 'F';
    try {
        let data = [];

        let loaiSP = await db.Khohang.findAll({
            attributes: ['LoaiSanPhamId'],
            where: { SoLuong: { [Op.gt]: 0 } },
            group: 'LoaiSanPhamId',
            include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
        });

        for (let i in loaiSP) {
            let obj = {
                AddData: function (loaisp, tensp, soluong) {
                    this.loaisp = loaisp;
                    this.tensp = tensp;
                    this.soluong = soluong;
                }
            };
            let getdata = await db.Khohang.findAll({
                attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong']],
                where: { SoLuong: { [Op.gt]: 0 }, LoaiSanPhamId: loaiSP[i].LoaiSanPhamId },
                group: 'SanPhamId',
                include: { model: db.SanPham, attributes: ['TenSanPham'] },
            });

            let listTensp = [];
            let listSoluong = [];
            for (let i in getdata) {
                listTensp.push(getdata[i].SanPham.TenSanPham);
                listSoluong.push(getdata[i].SoLuong);
            }

            obj.loaisp = loaiSP[i];
            obj.tensp = listTensp;
            obj.soluong = listSoluong;

            data.push(obj);

        }
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