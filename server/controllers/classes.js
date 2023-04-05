const classesRouter = require("express").Router();
const Yogaclass = require("../db/classesModel");
const Events = require("../db/EventsModel");
const multer = require("multer");
const { MongoClient } = require("mongodb");
//const User = require("../db/userModel");

const upload = multer({ dest: "uploads/" });

classesRouter.get("/", async (request, response) => {
  const yogaclasses = await Yogaclass.find({});
  response.json(yogaclasses);
});
classesRouter.get("/uploads", async (request, response) => {
  const events = await Events.find({});
  response.json(events);
});

classesRouter.get("/:id", async (request, response) => {
  const yogaclass = await Yogaclass.findById(request.params.id);
  if (yogaclass) {
    response.json(yogaclass);
  } else {
    response.status(404).end();
  }
});

classesRouter.post("/upload", upload.single("file"), async (req, res) => {
  const client = new MongoClient(process.env.DB_URL);

  try {
    await client.connect();
    const db = client.db("yogaDB");
    const collection = db.collection("events");

    const result = await collection.insertOne({
      filename: req.file,
      eventname: req.body.event,
    });

    res.send(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  } finally {
    await client.close();
  }
});

classesRouter.post("/", async (request, response) => {
  const body = request.body;
  //console.log(body);

  const yogaclass = new Yogaclass({
    classname: body.classname,
    teacher: body.teacher,
    location: body.location,
    time: body.time,
  });

  const savedYogaclass = await yogaclass.save();

  response.status(201).json(savedYogaclass);
});

classesRouter.delete("/:id", async (request, response) => {
  await Yogaclass.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

classesRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const yogaclass = {
    classname: body.classname,
    teacher: body.teacher,
    location: body.location,
    time: body.time,
  };

  Yogaclass.findByIdAndUpdate(request.params.id, yogaclass, { new: true })
    .then((updatedClass) => {
      response.json(updatedClass);
    })
    .catch((error) => next(error));
});

module.exports = classesRouter;
