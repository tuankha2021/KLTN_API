import db from '../models/index';
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { getGroupRole } from './jwtServices';

const checkPassword = (inputPass, hashPass) => {
    return bcrypt.compareSync(inputPass, hashPass); // return true or false
}

const handleUserLogin = async (rawData) => {
    try {
        let user = await db.NhanVien.findOne({
            where: { MaNhanVien: rawData.idNhanVien }
        })

        if (user) {
            let isCorrectPass = checkPassword(rawData.password, user.Password);

            if (isCorrectPass == true) {

                if (user.Level == 1) {
                    return {
                        EM: 'Login with Admin',
                        EC: 1,
                        DT: ''
                    }
                }
                return {
                    EM: 'Login with User',
                    EC: 0,
                    DT: ''
                }

            }
        }

        console.log(">>> Not found MaNhanVien: ", rawData.idNhanVien, " or Password: ", rawData.password);
        return {
            EM: 'ID nhân viên hoặc mật khẩu không chính xác !',
            EC: -1,
            DT: ''
        }

    } catch (error) {
        console.log(error);
        return {
            EM: 'Somthing wrongs in services . . . ',
            EC: -2
        }
    }
}

module.exports = {
    handleUserLogin
}