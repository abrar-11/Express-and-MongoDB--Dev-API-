const express = require("express");
const dotenv = require("dotenv");

// Setup Port
const PORT = process.env.PORT || 5000;

// Load Env File
dotenv.config({ path: "./config/config.env" });

// Import Bootcamp Router

const bootcamps = require("./routes/bootcamps");


const app = express();

app.use("/api/v1/bootcamps", bootcamps);



app.listen(PORT, console.log(`Server listening on ${PORT}`));
