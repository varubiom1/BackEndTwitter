
module.exports = (sequelize, Sequelize) =>{
    const Message = sequelize.define ("Message", {
        idMessage: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        message: Sequelize.STRING,
        creation_date: Sequelize.DATE,
        idUserSource: Sequelize.INTEGER,
        idUserDestiny: Sequelize.INTEGER
        
    }, {
        tableName: "message"
    });    
    
    return Message;
}