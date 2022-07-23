require("dotenv").config();

import jwt from "jsonwebtoken";

const nonSecruePaths = ['/login'];

// create token
const createJWT = (payload) => {

    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (error) {
        console.log(error)
    }
    return token
}

// check token 
const verifyToken = (token) => {

    let key = process.env.JWT_SECRET;
    let decoded = null;

    try {
        decoded = jwt.verify(token, key)
    } catch (error) {
        console.log(error);
    }

    return decoded;
}

//check logged in user
const checkUserCookies = (req, res, next) => {

    if (nonSecruePaths.includes(req.path)) {
        return next();
    }

    let cookies = req.cookies;
    if (cookies && cookies.jwt) {

        let token = cookies.jwt;
        let decoded = verifyToken(token);
        if (decoded) {

            req.user = decoded;

            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: '',
                EM: 'Not authenticated the user'
            })
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }
}

// check user access
const checkUserPermission = (req, res, next) => {

    if (nonSecruePaths.includes(req.path)) {
        return next();
    }

    if (req.user) {
        let id = req.user.MaNhanVien;
        let email = req.user.Email;
        let role = req.user.groupRole.Roles;
        let currentUrl = req.path;


        if (!role || role.length === 0) {
            return res.status(403).json({
                EC: -1,
                DT: '',
                EM: `You don't permission to access this resource . . .`
            })
        }

        let canAccess = role.some(item => item.Url === currentUrl);
        if (canAccess === true) {
            next();
        } else {
            return res.status(403).json({
                EC: -1,
                DT: '',
                EM: `You don't permission to access this resource . . .`
            })
        }

    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }
}

module.exports = {
    createJWT, verifyToken, checkUserCookies, checkUserPermission
}