const Sequelize = require('sequelize');
const sequelizeConnection = require('./db.conexion');

//IMPORTAN MODELOS
const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');

//INICIALIZAR
const User= UserModel (sequelizeConnection,Sequelize);
const Post= PostModel (sequelizeConnection,Sequelize);

User.hasMany(Post, {foreingKey: "idPost", sourceKey: "idUser"} );
Post.belongsTo(User,{foreingKey, sourceKey:"idPost"});

const models={
    User:User,
    Post:Post 
}

const db = {
    ...models,
    sequelizeConnection
} 

module.exports=db;