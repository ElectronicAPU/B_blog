const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const colors = require("colors");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();

// app.use = cookieParser();
app.use(cors());

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`.bold.yellow.italic);
});
