var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('raquet', 'root', 'root', {
    host: '35.192.36.242',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


/*
var sequelize = new Sequelize('icoaching', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: '8889',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

/*
sequelize.sync()
.then(() =>  console.log('Connecion realizada'))
.catch(err =>  console.log('No se puede conectar a la bd:', err))
*/

//mysql://bbdb089726c53d:6d6112e2@us-cdbr-iron-east-04.cleardb.net/heroku_bce05c80f2d089b?reconnect=true

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;