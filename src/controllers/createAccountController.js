import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
const login = (req, res) => {
    let pass = bcrypt.hashSync("Admin123456", salt);
    return res.render("User.ejs", { pass });
}

const getUpDateUser = async (req, res) => {
    let id = req.params.id;
    let user = await userServices.getUserByID(id);
    let userdata = {};
    userdata = user;
    return res.render("userUpdate.ejs", { userdata });
}

module.exports = {
    login
}