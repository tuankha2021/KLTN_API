
import bcrypt from 'bcryptjs';
import bluebird from 'bluebird';
import db from '../models/index';

//bcrypt password
var salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    let hashPass = bcrypt.hashSync(password, salt);
    return hashPass;
}

//create user
const createUser = (MaNhanVien, Level, HoTen, NgaySinh, GioiTinh, Tel, Email, Address, NgayVaoLam, Password, GhiChu, Avata) => {
    let hashPass = hashPassword(Password);

    try {
        await db.NhanVien.create({
            MaNhanVien: MaNhanVien,
            Level: Level,
            HoTen: HoTen,
            NgaySinh: NgaySinh,
            GioiTinh: GioiTinh,
            Tel: Tel,
            Email: Email,
            Address: Address,
            NgayVaoLam: NgayVaoLam,
            Password: hashPass,
            DanhGia: GhiChu,
            Avata: Avata
        })
    } catch (error) {
        console.log(">>> error, can't insert from table NhanVien")
    }
}

const getListUser = async () => {
    let user = [];
    user = await db.NhanVien.findAll();
    return user;
}

const deleteUser = async (userID) => {
    await db.NhanVien.destroy({
        where: { id: userID }
    })
}

const getUserByID = async (id) => {
    let user = {};
    user = await db.NhanVien.findOne({
        where: { id: id }
    })
    return user.get({ plain: true });
}

const updateUserInforAD = async (Level, HoTen, NgaySinh, GioiTinh, Tel, Email, Address, NgayVaoLam, GhiChu, Avata) => {
    await db.NhanVien.update(
        {
            Level: Level,
            HoTen: HoTen,
            NgaySinh: NgaySinh,
            GioiTinh: GioiTinh,
            Tel: Tel,
            Email: Email,
            Address: Address,
            NgayVaoLam: NgayVaoLam,
            DanhGia: GhiChu,
            Avata: Avata
        },
        {
            where: { id: id }
        }
    );
}
module.exports = {
    createUser, getListUser, deleteUser, getUserByID, updateUserInforAD
}