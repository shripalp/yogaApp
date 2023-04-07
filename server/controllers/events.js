const eventsRouter = require("express").Router();
const Events = require("../db/EventsModel");
const multer = require("multer");

//const { MongoClient } = require("mongodb");
//const User = require("../db/userModel");

const upload = multer({ dest: "uploads/" });

eventsRouter.get("/", async (request, response) => {
  const events = await Events.find({});
  response.json(events);
});

eventsRouter.post("/", upload.single("file"), async (req, res) => {
  const body = req.body;

  const event = new Events({
    eventname: body.event,
    filename: body.file,
  });
  const savedEvent = await event.save();
  res.status(201).json(savedEvent);
});

eventsRouter.delete("/:id", async (request, response) => {
  await Events.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = eventsRouter;
