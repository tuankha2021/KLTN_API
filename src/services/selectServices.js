import db from "../models/index";

const getLoaiSanPham = async () => {
    try {
        let user = await db.LoaiSanPham.findAll({
            attributes: ['id', 'TenLoai'],
            order: [['id', 'DESC']]
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
        console.log(error)
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getSanPham = async (maloai) => {
    try {
        maloai = 'F';
        let user = await db.SanPham.findAll({
            attributes: ['id', 'TenSanPham'],
            where: { LoaiSanPhamId: maloai },
            order: [['id', 'DESC']]
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
        console.log(error)
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const getLevel = async () => {
    try {
        let group = await db.Group.findAll({
            attributes: ['id', 'Name'],
            order: [['id', 'DESC']]
        });

        if (group) {
            return {
                EM: "get data success",
                EC: 0,
                DT: group
            }
        } else {
            return {
                EM: "get data success",
                EC: 0,
                DT: []
            }
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    getSanPham, getLoaiSanPham, getLevel
}
