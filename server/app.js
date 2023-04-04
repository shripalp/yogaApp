const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const auth = require("./auth");
// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const Classes = require("./db/classesModel");
const classesRouter = require("./controllers/classes");
const usersRouter = require("./controllers/users");

// execute database connection
dbConnect();

app.use(cors());

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api/classes", classesRouter);
app.use("/", usersRouter);

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from shripal's server!" });
});
app.get("/api/free-endpoint", (req, res) => {
  res.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/api/auth-endpoint", auth, (req, res) => {
  res.json({ message: "You are authorized to access me" });
});
// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// free endpoint

module.exports = app;
