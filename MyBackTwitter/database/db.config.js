const dbconfig={
    HOST:"localhost",
    USER:"Vrubio",
    PASSWORD:"Canela2005.",
    DB: "tweet",
    dialect:"mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports = dbconfig;