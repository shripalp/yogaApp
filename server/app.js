const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const auth = require("./auth");
// require database connection
const dbConnect = require("./db/dbConnect");

const classesRouter = require("./controllers/classes");
const usersRouter = require("./controllers/users");
const eventsRouter = require("./controllers/events");
const blogsRouter = require("./controllers/blogs");
// execute database connection
dbConnect();

app.use(cors());

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api/classes", classesRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/events", eventsRouter);
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
