require('dotenv').config()
const mysql = require('mysql2')
const sql_host=process.env.SQL_HOST
const sql_user=process.env.SQL_USER
const sql_password=process.env.SQL_PASSWORD
const sql_database_name=process.env.SQL_DB
const sql_port=process.env.SQL_PORT
const db = mysql.createConnection({
    host: sql_host,
    user: sql_user,
    password:sql_password,
    database: sql_database_name,
    port:sql_port
   
} )
module.exports = db;