const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB ${DB.connection.host}`.blue.bold.italic);
  } catch (error) {
    console.log(`Failed to connect to Mongo DB ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
