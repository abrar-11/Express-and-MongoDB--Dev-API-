const express = require("express");
const dotenv = require("dotenv");

// Load Env File
dotenv.config({ path: "./config/config.env" });

// Import Bootcamp Router

const bootcamps = require("./routes/bootcamps");

app.use("/api/v1/bootcamps", bootcamps);

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on ${PORT}`));
