const Sequelize = require('sequelize');
const sequelizeConnection = require('./db.conexion');

//IMPORTAN MODELOS
const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');
const FollowerModel = require('../models/follower.model');
const MessageModel = require('../models/message.model');


//INICIALIZAR
const User= UserModel (sequelizeConnection,Sequelize);
const Post= PostModel (sequelizeConnection,Sequelize);
const Follower = FollowerModel(sequelizeConnection, Sequelize);
const Message = MessageModel(sequelizeConnection, Sequelize);

User.hasMany(Post, {foreignKey: "idUser", sourceKey: "idUser"});
Post.belongsTo(User,{foreignKey: "idUser", sourceKey:"idUser"});

User.hasMany(Follower, {foreignKey: "idUser", sourceKey: "idUser"});
Follower.belongsTo(User,{foreignKey: "idUser", sourceKey:"idUser"});

User.hasMany(Follower, {foreignKey: "idUserSource", foreignKey: "idUserDestiny", sourceKey: "idUser"});
Follower.belongsTo(User,{foreignKey: "idUserSource", foreignKey: "idUserDestiny", sourceKey:"idUser"});

const models={
    User:User,
    Post:Post,
    Follower: Follower,
    Message: Message
}

const db = {
    ...models,
    sequelizeConnection
} 

module.exports=db;