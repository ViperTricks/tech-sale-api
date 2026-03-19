const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        console.error(err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = db;