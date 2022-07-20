import nhapKhoServices from "../services/nhapKhoServices";

const getAllData = async (req, res) => {
    try {

        let data = await nhapKhoServices.getAllData();

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

const getUserData = async (req, res) => {
    try {

        let data = await nhapKhoServices.getUserData();

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

module.exports = {
    getAllData, getUserData
}