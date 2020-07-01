const myPoint = require('./module/Point'),
    { Sequelize, DataTypes } = require('sequelize'),
    sequelize = new Sequelize('cercle', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        port: 8889,
    }),
    Point = myPoint(sequelize, DataTypes);
    
sequelize.sync();

module.exports = {
    sequelize: sequelize,
    Point: Point
};