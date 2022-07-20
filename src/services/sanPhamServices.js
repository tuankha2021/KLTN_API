import db from "../models/index";

const getAllSP = async () => {
    try {

        let user = await db.SanPham.findAll({
            include: { model: db.LoaiSanPham },
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
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const createSanPham = async () => {
    try {

        // let user = await db.SanPham.findAll({
        //     include: { model: db.LoaiSanPham },
        // });

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
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}


module.exports = {
    getAllSP, createSanPham
}