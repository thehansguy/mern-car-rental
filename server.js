const express = require("express");
const app = express();
const port = 5000;

const dbConnection = require("./db");

app.use("/api/cars", require("./routes/carsRoute"));
app.use("/api/tests", require("./routes/testRoute"));
app.get("/", (req, res) => res.send("You got served by the backend server!!"));
app.listen(port, () =>
  console.log(`backend service eavesdropping on port ${port}!`)
);
