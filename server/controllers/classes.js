const classesRouter = require("express").Router();
const Yogaclass = require("../db/classesModel");

//const User = require("../db/userModel");

classesRouter.get("/", async (request, response) => {
  const yogaclasses = await Yogaclass.find({});
  response.json(yogaclasses);
});

classesRouter.get("/:id", async (request, response) => {
  const yogaclass = await Yogaclass.findById(request.params.id);
  if (yogaclass) {
    response.json(yogaclass);
  } else {
    response.status(404).end();
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
