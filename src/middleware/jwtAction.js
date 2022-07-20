require("dotenv").config();

import jwt from "jsonwebtoken";

const createJWT = () => {
    let payload = { name: "Tuankha", address: "UIT" };
    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key);
        console.log(token)
    } catch (error) {
        console.log(error)
    }
    return token
}

const verufyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let data = null;

    try {
        let decoded = verify(token, key)
        data = decoded;
    } catch (error) {
        console.log(error);
    }
    return data;
}

module.exports = {
    createJWT, verufyToken
}