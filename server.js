const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");

app.use(express.json());

app.use("/api/cars", require("./routes/carsRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/tests", require("./routes/testRoute"));

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.get("/", (req, res) => res.send("You got served by the backend server!!"));

app.listen(port, () =>
  console.log(`backend service eavesdropping on port ${port}!`)
);
