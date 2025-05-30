const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
});

connection.connect((err)=>{
    if(err){
        console.log("Error Connecting to Mysql", err.stack);
        return;
    }
    console.log('Connected to MySql with ID', connection.threadId);
});

module.exports=connection;