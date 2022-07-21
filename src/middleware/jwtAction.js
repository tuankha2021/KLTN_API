require("dotenv").config();

import jwt from "jsonwebtoken";

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

const verufyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let decoded = null;

    try {
        decoded = verify(token, key)
    } catch (error) {
        console.log(error);
    }
    return decoded;
}

const checkUserCookies = (req, res, next) => {

    let cookies = req.cookies;
    let decoded = verufyToken(token);
    if (decoded) {
        next();
    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }
    if (cookies && cookies.jwt) {
        let token = cookeis.jwt;
    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user'
        })
    }
}

module.exports = {
    createJWT, verufyToken, checkUserCookies
}