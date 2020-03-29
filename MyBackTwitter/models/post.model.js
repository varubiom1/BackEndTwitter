
module.exports = (sequelize, Sequelize) =>{
    const Post = sequelize.define ("Post", {
        idPost: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        message: {
            type: Sequelize.STRING,
        },
        creation_date: Sequelize.DATE,
        idUser:{
            type: Sequelize.INTEGER,
        }
    }, {
        tableName: "posts"
    });    
    
    return Post;
}