const Author = (sequelize, DataTypes) => {
    sequelize.define("Author", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
            },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            },
        country: {
            type: DataTypes.STRING,
            allowNull: false
    }}, {
        tableName: 'authors',
    })
    return Author;
}



module.exports = Author