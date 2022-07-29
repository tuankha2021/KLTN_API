import db from "../models/index";
import { Op } from 'sequelize';

const getAllData = async () => {
    try {

        let user = await db.NhapKho.findAll({
            attributes: ['NhanVienId', 'SanPhamId', 'SoLuong', 'NSX', 'HSD', 'ThanhTien', 'createdAt', 'updatedAt'],
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
        let user = await db.NhapKho.findAll({
            attributes: ['SanPhamId', 'SoLuong', 'NSX', 'HSD', 'ThanhTien', 'createdAt', 'GhiChu'],
            include: [{ model: db.NhanVien, attributes: ['HoTen'] }, { model: db.SanPham, attributes: ['TenSanPham'] }],
            where: { NhanVienId: rawdata.id },
            order: ['createdAt', 'DESC']

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

const importData = async (rawdata) => {
    try {
        Date.prototype.addDays = function (day, days) {
            var date = new Date(day);
            date.setDate(date.getDate() - days);
            return date;
        }

        let data = rawdata.listdata

        for (let i in data) {
            let getHSD = await db.LoaiSanPham.findOne({
                attributes: ['HSD'],
                where: { id: data[i].LoaiSanPhamId }
            })
            let HSD = new Date();
            HSD = HSD.addDays(data[i].NSX, getHSD.HSD);

            // import from table NhapKho
            await db.NhapKho.create({
                NhanVienId: data[i].NhanVienId,
                LoaiSanPhamId: data[i].LoaiSanPhamId,
                SanPhamId: data[i].SanPhamId,
                SoLuong: data[i].SoLuong,
                NSX: data[i].NSX,
                HSD: HSD,
                GhiChu: data[i].GhiChu,
                createdAt: new Date()
            })

            //import from table KhoHang
            let khohang = await db.Khohang.findOne({
                attributes: ['SoLuong'],
                where: { SanPhamId: data[i].SanPhamId, NSX: data[i].NSX }
            })

            if (khohang) {
                let addSoLuong = parseInt(khohang.SoLuong) + parseInt(data[i].SoLuong)
                await khohang.update({
                    SoLuong: addSoLuong
                })
                console.log('>>> update from khohang ')
            } else {
                await db.Khohang.create({
                    LoaiSanPhamId: data[i].LoaiSanPhamId,
                    SanPhamId: data[i].SanPhamId,
                    NSX: data[i].NSX,
                    HSD: HSD,
                    SoLuong: data[i].SoLuong,
                    ViTri: data[i].ViTri,
                })
                console.log(">>> import from khohang")
            }

        }
        return {
            EM: "Nhập hàng thành công !",
            EC: 0,
            DT: []
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
    getAllData, getUserData, importData
}