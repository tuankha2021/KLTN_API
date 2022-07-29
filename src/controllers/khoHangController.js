import khoHangServices from '../services/khoHangServices';

const getLoaiSanPham = async (req, res) => {
    try {

        let data = await khoHangServices.getLoaiSanPham();

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

const getAllData = async (req, res) => {
    try {

        let data = await khoHangServices.getAllData(req.body);
        console.log("check data: ", req.body);
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

const getPieChartData = async (req, res) => {
    try {

        let data = await khoHangServices.getPieChartData();

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

const getSanPham = async (req, res) => {
    try {

        let data = await khoHangServices.getSanPham();

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

const notify = async (req, res) => {
    try {

        let data = await khoHangServices.notify();

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

const xuatHang = async (req, res) => {
    try {

        let data = await khoHangServices.xuatHang(req.body);

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
    getAllData, getSanPham, getLoaiSanPham, getPieChartData, notify, xuatHang
}