const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const colors = require("colors");
// Setup Port
const PORT = process.env.PORT || 5000;

// Load Env File
dotenv.config({ path: "./config/config.env" });

// Connect Database
connectDB();

// Import Bootcamp Router

const bootcamps = require("./routes/bootcamps");

const app = express();

// Body Parser

app.use(express.json());


app.use("/api/v1/bootcamps", bootcamps);

// error Handler Middleware
app.use(errorHandler);

const server = app.listen(PORT, console.log(`Server listening on ${PORT}`));

// Handle unhandled promise Rejections
process.on("unhandledRejection", (err, promise) => {
   console.log(`Error: ${err.message}`);

   // Close Server

   server.close(() => {
      process.exit(1);
   });
});
