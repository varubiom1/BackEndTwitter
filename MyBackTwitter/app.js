var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//IMPORTA RUTAS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');
var postsRouter = require('./routes/post.route');
var followersRouter= require('./routes/follower.route');


//IMPORTAMOS DB MANAGER
const dbManager = require('./database/db.manager');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/followers', followersRouter);


dbManager.sequelizeConnection.authenticate().
then(()=>{
            console.log("******CONEXIÓN ESTABLECIDA!!!******");
            dbManager.sequelizeConnection.sync().then(
                ()=>{
                    console.log(":D BASE DE DATOS SINCRONIZADA!");
                }
            )
        }
).catch(
    error=>{
        console.log(":( NO SE HA PODIDO ESTABLECER LA CONEXIÓN", error);
    }
);

module.exports = app;
