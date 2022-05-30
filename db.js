const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://dbuser:Password.mongodb.123@cluster0.dsmnm.mongodb.net/mern-car-rental",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB mongoose connection successful");
  });

  connection.on("error", () => {
    console.log("Mongo DB connection Error");
  });
}

connectDB();

module.exports = mongoose;
