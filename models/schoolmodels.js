const db = require("../db");

exports.insertSchool = (name, address, latitude, longitude, callback) => {
    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    db.query(query, [name, address, latitude, longitude], callback);
};

exports.getAllSchools = (callback) => {
    db.query("SELECT * FROM schools", callback);
};