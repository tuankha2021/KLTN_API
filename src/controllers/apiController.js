import loginService from "../services/loginServices";

const testApi = (req, res) => {
    return res.status(200).json({
        message: "ok",
        data: 'test api'
    })
}

const onSubmitLogin = async (req, res) => {
    try {

        let data = await loginService.handleUserLogin(req.body);

        if (data && data.DT && data.DT.access_token) {
            res.cookie("jwt", data.DT.access_token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
        }

        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: data.DT // data
        })
    } catch (error) {
        return res.status(500).Json({
            EM: 'error from server . . .', // error message
            EC: '-1', // error code
            DT: '' // data
        })
    }
}

module.exports = {
    onSubmitLogin, testApi
}