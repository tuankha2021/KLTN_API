require('dotenv').config;
import db from '../models/index';
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { getGroupRole } from './jwtServices';
import { createJWT } from '../middleware/jwtAction';

const checkPassword = (inputPass, hashPass) => {
    return bcrypt.compareSync(inputPass, hashPass); // return true or false
}

const handleUserLogin = async (rawData) => {
    try {
        let user = await db.NhanVien.findOne({
            where: { id: rawData.idNhanVien }
        })

        if (user) {
            let isCorrectPass = checkPassword(rawData.password, user.Password);

            if (isCorrectPass == true) {

                // check role
                let groupRole = await getGroupRole(user);
                let payload = {
                    MaNhanVien: user.id,
                    Email: user.Email,
                    groupRole,
                    expiresIn: process.env.JWT_EXPIRES_IN
                }
                let token = createJWT(payload)
                return {
                    EM: 'Đăng nhập thành công !',
                    EC: 0,
                    DT: {
                        access_token: token,
                        groupRole,
                        email: user.Email,
                        username: user.HoTen,
                        id: user.id,
                        level: user.GroupId

                    }
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