
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('mypoint', {
        number: {
            type: DataTypes.INTEGER,
            notNull: false
        },
        color: {
            type: DataTypes.STRING,
            notNull: false
        },
    }, {

    });
}