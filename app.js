const express = require("express");
const dotenv = require("dotenv");
const schoolRoutes = require("./routes/schoolroutes");

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 3360;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});