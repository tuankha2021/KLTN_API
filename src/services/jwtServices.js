import db from "../models/index";

const getGroupRole = async (user) => {
    let role = await db.Group.findOne({
        attributes: ['id', 'Name', 'Description'],
        where: { id: user.GroupId },
        include: [{
            model: db.Role,
            attributes: ['id', 'Url'],
            through: { attributes: [] }
        }]
    })
    return role;
}

module.exports = {
    getGroupRole
}