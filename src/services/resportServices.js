import db from "../models/index";
import { Op } from 'sequelize';
import sequelize from "sequelize";

const resport = async () => {
    try {
        let data = [];
        let date = "2022/06/18";

        let loaiSP = await db.Khohang.findAll({
            attributes: ['LoaiSanPhamId'],
            where: { SoLuong: { [Op.gt]: 0 } },
            group: 'LoaiSanPhamId',
            include: { model: db.LoaiSanPham, attributes: ['TenLoai'] },
        })

        for (let i in loaiSP) {
            let reportObj = {
                AddData: function (loaisp, listsp) {
                    this.loaisp = loaisp;
                    this.listsp = listsp;
                }
            };

            let lspObj = {
                AddData: function (LoaiSanPhamId, TenLoai) {
                    this.LoaiSanPhamId = LoaiSanPhamId;
                    this.TenLoai = TenLoai;
                }
            };

            lspObj.LoaiSanPhamId = loaiSP[i].LoaiSanPhamId;
            lspObj.TenLoai = loaiSP[i].LoaiSanPham.TenLoai;
            reportObj.loaiSP = lspObj;

            let getdata = await db.Khohang.findAll({
                attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId'],
                where: { SoLuong: { [Op.gt]: 0 }, LoaiSanPhamId: loaiSP[i].LoaiSanPhamId },
                group: 'SanPhamId',
                include: { model: db.SanPham, attributes: ['TenSanPham'] },
            });

            let xuatHang = await db.XuatKho.findAll({
                attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId'],
                where: { NgayXuat: date, LoaiSanPhamId: loaiSP[i].LoaiSanPhamId },
                group: 'SanPhamId',
            })

            let nhapHang = await db.NhapKho.findAll({
                attributes: [[sequelize.fn('SUM', sequelize.col('SoLuong')), 'SoLuong'], 'SanPhamId'],
                where: { NgayNhap: date, LoaiSanPhamId: loaiSP[i].LoaiSanPhamId },
                group: 'SanPhamId',
            })
            console.log(">>> check SL nhap: ", nhapHang)

            let listSanPham = [];
            for (let j in getdata) {
                let spobj = {
                    AddData: function (SanPhamId, TenSanPham, SLNhap, SLXuat, SLTon) {
                        this.SanPhamId = SanPhamId;
                        this.TenSanPham = TenSanPham;
                        this.SLNhap = SLNhap;
                        this.SLXuat = SLXuat;
                        this.SLTon = SLTon;
                    }
                };

                spobj.SanPhamId = getdata[j].SanPhamId;
                spobj.TenSanPham = getdata[j].SanPham.TenSanPham;
                spobj.SLTon = getdata[j].SoLuong;

                for (let k in xuatHang) {
                    if (xuatHang[k].SanPhamId === getdata[j].SanPhamId) {
                        spobj.SLXuat = xuatHang[k].SoLuong
                    }
                }

                for (let h in nhapHang) {
                    if (nhapHang[h].SanPhamId === getdata[j].SanPhamId) {
                        spobj.SLNhap = nhapHang[h].SoLuong
                    }
                }


                listSanPham.push(spobj);
            }
            reportObj.listsp = listSanPham;

            data.push(reportObj);

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

module.exports = { resport }
