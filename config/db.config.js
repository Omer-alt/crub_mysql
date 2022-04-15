const mysql = require('mysql')

const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'employee'
})

dbConnect.connect(function(err){
    if(err){
        throw(err)
    }
    console.log('DataBase connected')
})

module.exports = dbConnect



