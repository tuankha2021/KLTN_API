import db from "../models/index";

const getAllUser = async () => {
    try {
        let user = await db.NhanVien.findAll({
            attributes: ['MaNhanVien', 'Level', 'HoTen', 'NgaySinh', 'GioiTinh', 'Tel', 'Email', 'Address', 'TrangThai', 'NgayVaoLam', 'NgayNghi', 'Vang', 'DanhGia', 'Avata'],

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

const createNewUser = (data) => {
    try {

    } catch (error) {
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const updateUser = async (data) => {
    try {
        let user = await db.NhanVien.findOne({
            where: { id: data.id }
        })

        if (user) {
            // update
            user.save({

            })
        } else {
            // not found
        }
    } catch (error) {
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

const deleteUser = async (id) => {
    try {
        await db.NhanVien.delete({
            where: { id: id }
        })
    } catch (error) {
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: []
        }
    }
}

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser
}