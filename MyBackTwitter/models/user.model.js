module.exports =(sequelize, Sequelize)=>{
    const User = sequelize.define("User", {
            idUser: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoincrement: true
            },
            username:{
                type: Sequelize.STRING,
                unique: true
            },
            creation_date: Sequelize.DATE
        },{
            tableName: "users"
        }
    );
    return User;
}