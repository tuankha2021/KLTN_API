import db from "../models/index";

const getGroupRole = async (user) => {
    let role = await db.Group.findOne({
        where: { id: GroupId },
        include: [{ model: db.Role }]
    })

    console.log(role)
}

module.exports = {
    getGroupRole
}