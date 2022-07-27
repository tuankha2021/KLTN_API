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
            attributes: ['id', 'GroupId', 'HoTen', 'NgaySinh', 'GioiTinh', 'Tel', 'Email', 'Address', 'TrangThai', 'NgayVaoLam', 'NgayNghi', 'Vang', 'DanhGia', 'Avata', 'Facebook', 'Zalo'],

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
            attributes: ['id', 'GroupId', 'HoTen', 'NgaySinh', 'GioiTinh', 'Tel', 'Email', 'Address', 'TrangThai', 'NgayVaoLam', 'NgayNghi', 'Vang', 'DanhGia', 'Avata', 'Facebook', 'Zalo'],
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

const createNewUser = async (data) => {
    try {
        //check data are exist
        let isUserIdExist = await checkUserIdExist(data.MaNhanVien);
        if (isUserIdExist === true) {
            return {
                EM: 'Nhân viên đã tồn tại !',
                EC: '1'
            }
        }
        let isUserEmailExist = await checkUserEmailExist(data.Email);
        if (isUserEmailExist === true) {
            return {
                EM: 'Email đã được đăng ký!',
                EC: '1'
            }
        }
        let isUserPhoneExist = await checkUserPhoneExist(data.Tel);
        if (isUserPhoneExist === true) {
            return {
                EM: 'Số điện thoại đã được đăng ký !',
                EC: '1'
            }
        }

        // hash password
        let password = hashPassword(data.Password);

        // create new user
        await db.NhanVien.create({
            NhanVienId: data.MaNhanVien,
            GroupId: data.Level,
            HoTen: data.HoTen,
            NgaySinh: data.NgaySinh,
            GioiTinh: data.GioiTinh,
            Tel: data.Tel,
            Email: data.Email,
            Address: data.Address,
            NgayVaoLam: data.NgayVaoLam,
            Password: password,
            Avata: data.Avata
        })

        return {
            EM: 'Nhân viên đã được tạo mới !',
            EC: '0'
        }

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

        if (!data.Level) {
            return {
                EM: "Eror with empty Level ",
                EC: 1,
                DT: []
            }
        }

        let user = await db.NhanVien.findOne({
            where: { id: data.id }
        })

        if (user) {
            // update
            await user.update({
                GroupId: data.Level,
                HoTen: data.HoTen,
                NgaySinh: data.NgaySinh,
                GioiTinh: data.GioiTinh,
                Tel: data.Tel,
                Email: data.Email,
                Address: data.Address,
                TrangThai: data.TrangThai,
                NgayVaoLam: data.NgayVaoLam,
                NgayNghi: data.NgayNghi,
                DanhGia: data.DanhGia,
                Avata: data.Avata
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
    getAllUser, createNewUser, updateUser, deleteUser, getUser
}