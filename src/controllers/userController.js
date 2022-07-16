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

        let data = await userServices.getUser(1);

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

const createFunc = (req, res) => {

}

const updateFunc = (req, res) => {

}

const deleteFunc = (req, res) => {

}

module.exports = {
    readFunc, createFunc, updateFunc, deleteFunc, readOneFunc
}