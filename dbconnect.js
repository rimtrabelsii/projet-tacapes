const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://nihel:nihel123@cluster0.eoj7l6h.mongodb.net/tacapes?retryWrites=true&w=majority");
    console.log("database is connected");
  } catch (error) {
    console.log("data base is not connected");
  }
};
module.exports = connectDB;