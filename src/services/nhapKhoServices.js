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

const getUserData = async (rwadata) => {
    try {
        let user = await db.NhapKho.findAll({
            attributes: ['SanPhamId', 'SoLuong', 'NSX', 'HSD', 'ThanhTien', 'createdAt', 'GhiChu'],
            include: [{ model: db.NhanVien, attributes: ['HoTen'] }, { model: db.SanPham, attributes: ['TenSanPham'] }],
            where: { NhanVienId: rwadata.id },
            other: ['createdAt', 'DESC']

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

module.exports = {
    getAllData, getUserData
}