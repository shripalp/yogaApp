const eventsRouter = require("express").Router();
const Events = require("../db/EventsModel");
const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

//const { MongoClient } = require("mongodb");
//const User = require("../db/userModel");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/src/components/assets");
  },
  filename: function (req, file, cb) {
    file.originalname = "uploadedImage";

    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

eventsRouter.get("/", async (request, response) => {
  const events = await Events.find({});
  response.json(events);
});

eventsRouter.post("/", upload.single("file"), async (req, res) => {
  const event = new Events({
    eventname: req.body.event,
    file: req.body.file,
    // source: {
    //   data: fs.readFileSync(
    //     path.join(__dirname + "/uploads/" + req.file.filename)
    //   ),
    //   contentType: "image/png",
    // },
  });
  const savedEvent = await event.save();
  res.status(201).json(savedEvent);
});

eventsRouter.delete("/:id", async (request, response) => {
  await Events.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = eventsRouter;
