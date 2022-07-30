import userServices from "../services/userApiServices";

const readFunc = async (req, res) => {
    try {

        let data = await userServices.getAllUser();

        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: data.DT // data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).Json({
            EM: 'error from server . . .', // error message
            EC: '-1', // error code
            DT: '' // data
        })
    }
}

const readOneFunc = async (req, res) => {
    try {

        let data = await userServices.getUser(req.body);

        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: data.DT // data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).Json({
            EM: 'error from server . . .', // error message
            EC: '-1', // error code
            DT: '' // data
        })
    }
}

const createFunc = async (req, res) => {
    try {
        console.log(">>> check data: ", req.body);
        //validate on server
        if (!req.body.userValue.ID || !req.body.userValue.HoTen || !req.body.userValue.GioiTinh || !req.body.userValue.Tel || !req.body.userValue.Password || !req.body.userValue.CCCD) {
            console.log(">>> check controller")
            return res.status(200).json({
                EM: 'Thông tin truyền vào không đầy đủ !', // error message
                EC: '1', // error code
                DT: '', // data
            })
        }

        if (req.body.userValue.Password && req.body.userValue.Password.length < 6) {
            console.log(">>> check controller")
            return res.status(200).json({
                EM: 'Mật khẩu chứ ít nhất 6 ký tự !', // error message
                EC: '1', // error code
                DT: '', // data
            })
        }

        let data = await userServices.createNewUser(req.body);

        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: '', // data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).Json({
            EM: 'error from server . . .', // error message
            EC: '-1', // error code
            DT: '' // data
        })
    }

}

const updateFunc = (req, res) => {

}

const deleteFunc = (req, res) => {

}

module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc, readOneFunc
}