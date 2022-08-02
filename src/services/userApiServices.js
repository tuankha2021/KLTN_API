import db from "../models/index";
import bcrypt from 'bcryptjs';

//bcrypt password
var salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    let hashPass = bcrypt.hashSync(password, salt);
    return hashPass;
}

const getAllUser = async () => {
    try {
        let user = await db.NhanVien.findAll({
            attributes: ['id', 'GroupId', 'HoTen', 'NgaySinh', 'GioiTinh', 'Tel', 'CCCD', 'Email', 'Address', 'TrangThai', 'NgayVaoLam', 'NgayNghi', 'Vang', 'DanhGia', 'Avata', 'Facebook', 'Zalo'],

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

const getUser = async (rawdata) => {
    try {
        let user = await db.NhanVien.findOne({
            attributes: ['id', 'GroupId', 'HoTen', 'NgaySinh', 'GioiTinh', 'Tel', 'Email', 'Address', 'TrangThai', 'NgayVaoLam', 'NgayNghi', 'Vang', 'DanhGia', 'Avata', 'Facebook', 'Zalo', 'CCCD'],
            where: { id: rawdata.id },
            include: { model: db.Group, attributes: ['Name'] },
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

const checkUserIdExist = async (userid) => {
    let user = await db.NhanVien.findOne({
        where: { id: userid }
    })

    if (user) {
        return true;
    }
    return false;
}
const checkUserEmailExist = async (usermail) => {
    let user = await db.NhanVien.findOne({
        where: { Email: usermail, TrangThai: 1 }
    })

    if (user) {
        return true;
    }
    return false;
}
const checkUserPhoneExist = async (userphone) => {
    let user = await db.NhanVien.findOne({
        where: { Tel: userphone, TrangThai: 1 }
    })

    if (user) {
        return true;
    }
    return false;
}

const createNewUser = async (rawdata) => {
    try {
        let data = rawdata.userValue;
        console.log(">>> check services: ", data)
        //check data are exist
        let isUserIdExist = await checkUserIdExist(data.ID);
        if (isUserIdExist === true) {
            console.log(">>> check services")
            return {
                EM: 'Nhân viên đã tồn tại !',
                EC: '1'
            }
        }
        // let isUserEmailExist = await checkUserEmailExist(data.Email);
        // if (isUserEmailExist === true) {
        //     return {
        //         EM: 'Email đã được đăng ký!',
        //         EC: '1'
        //     }
        // }
        let isUserPhoneExist = await checkUserPhoneExist(data.Tel);
        if (isUserPhoneExist === true) {
            console.log(">>> check services")
            return {
                EM: 'Số điện thoại đã được đăng ký !',
                EC: '1'
            }
        }

        // hash password
        let password = hashPassword(data.Password);
        console.log(">>> check services id", data.ID)
        // create new user
        await db.NhanVien.create({
            id: data.ID,
            GroupId: data.Level,
            HoTen: data.HoTen,
            NgaySinh: data.NgaySinh,
            GioiTinh: data.GioiTinh,
            Tel: data.Tel,
            Email: data.Email,
            Address: data.DiaChi,
            NgayVaoLam: data.NgayVaoLam,
            Password: password,
            Avata: data.Avata,
            DanhGia: data.GhiChu,
            Facebook: data.Facebook,
            Zalo: data.Zalo,
            CCCD: data.CCCD,
        })

        return {
            EM: 'Nhân viên đã được tạo mới !',
            EC: '0'
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

const updateUser = async (rawdata) => {
    try {
        console.log(">>>> check rawdata: ", rawdata)
        if (rawdata.GroupId === 0) {
            return {
                EM: "Vui lòng chọn chức vụ nhân viên.",
                EC: 1,
                DT: []
            }
        }

        let user = await db.NhanVien.findOne({
            where: { id: rawdata.userData.id }
        })

        if (user) {
            // update
            await user.update({
                GroupId: rawdata.userData.GroupId,
                HoTen: rawdata.userData.HoTen,
                NgaySinh: rawdata.userData.NgaySinh,
                GioiTinh: rawdata.userData.GioiTinh,
                Tel: rawdata.userData.Tel,
                CCCD: rawdata.userData.CCCD,
                Email: rawdata.userData.Email,
                Address: rawdata.userData.Address,
                // TrangThai: rawdata.TrangThai,
                NgayVaoLam: rawdata.userData.NgayVaoLam,
                NgayNghi: rawdata.userData.NgayNghi,
                DanhGia: rawdata.userData.DanhGia,
                Avata: rawdata.userData.Avata
            })

            return {
                EM: "Cập nhật thông tin thành công !",
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: "Không tìm thấy tài khoản !",
                EC: 1,
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

const setVang = async (rawdata) => {
    try {

        let user = await db.NhanVien.findOne({
            where: { id: rawdata.id }
        })

        if (user) {
            // update
            if (user.Vang == 1) {
                await user.update({
                    Vang: 0
                })
            } else {
                await user.update({
                    Vang: 1
                })
            }

            return {
                EM: "Cập nhật thông tin thành công !",
                EC: 0,
                DT: []
            }
        } else {
            return {
                EM: "Không tìm thấy tài khoản !",
                EC: 1,
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
    getAllUser, createNewUser, updateUser, deleteUser, getUser, setVang
}