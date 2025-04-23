const db = require("../db");
const { calculateDistance } = require("../utils/distancecal");

// Add School API
exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validate required fields
    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    
    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            console.error("❌ Database Insert Error:", err); // Logging for debugging
            return res.status(500).json({ error: "Database error", details: err.message });
        }
        
        res.status(201).json({ message: "✅ School added successfully!", schoolId: result.insertId });
    });
};

// List Schools API (sorted by proximity)
exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    // Validate required parameters
    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    db.query("SELECT * FROM schools", (err, results) => {
        if (err) {
            console.error("❌ Database Fetch Error:", err); // Logging for debugging
            return res.status(500).json({ error: "Database query failed", details: err.message });
        }

        const sortedSchools = results
            .map((school) => ({
                ...school,
                distance: calculateDistance(latitude, longitude, school.latitude, school.longitude),
            }))
            .sort((a, b) => a.distance - b.distance);

        res.json(sortedSchools);
    });
};