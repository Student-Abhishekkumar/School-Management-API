require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306, // Ensure this is correctly set
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed:", err);
        process.exit(1); // Exit if DB fails to connect
    } else {
        console.log("✅ Connected to MySQL successfully!");
    }
});

module.exports = connection;