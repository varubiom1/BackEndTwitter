module.exports = (sequelize, Sequelize) =>{
    const Follower = sequelize.define ("Follower", {
        idFollower: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        followername: {
            type: Sequelize.STRING,            
        },
        creation_date: Sequelize.DATE,
        idUser:{
            type: Sequelize.INTEGER,
        }
    }, {
        tableName: "followers"
    });    
    
    return Follower;
}