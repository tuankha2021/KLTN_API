const { Sequelize } = require('sequelize');

//connect database
const sequelize = new Sequelize('khohang', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});

// check connect with database
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('>>> Connection has been established successfully.');
    } catch (error) {
        console.error('>>> Unable to connect to the database:', error);
    }
}

export default connection;