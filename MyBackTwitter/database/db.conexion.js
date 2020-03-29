const dbConfig = require('./db.config');
const Sequelize =require('sequelize');

const sequelizeConnection = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.require,
            idle: dbConfig.pool.idle
        }
    }
);

module.exports = sequelizeConnection;
