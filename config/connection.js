var Sequelize = require("sequelize")

var sequelize = new Sequelize("burgers_db", "postgres", "root",{
    host: "localhost",
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize