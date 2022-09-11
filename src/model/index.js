const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.SERVER_DATABASE, 
    process.env.SERVER_USER_NAME, 
    process.env.SERVER_PASSWORD, 
    {
        dialect: 'mssql',
        host: process.env.SERVER_NAME,
        dialectOptions: {
            encrypt: true
        }
    }
);

sequelize.authenticate().then((err) => {
    console.log('Connection successful', err);
    const modelDefiners = [
        require('./models/book.model'),
        require('./models/library.model'),
    ];

    // We define all models according to their files.
    for (const modelDefiner of modelDefiners) {
        modelDefiner(sequelize);
    }
})
.catch((err) => {
    console.log('Unable to connect to database', err);
});

module.exports = sequelize;

