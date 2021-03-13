const db = require("../public");

module.exports = function (app) {
  //get routes
  app.get("/api/workouts", (req, res) => {
    db.workout
      .find({})
      .populate("exercises")
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.workout
      .find({})
      .populate("exercises")
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //post workouts
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({ day: Date.now() })
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //put workouts
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.create(req.body)
      .then((data) =>
        db.workout.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: {
              excerise: data._id,
            },
            $inc: {
              totalDuration: data.duration,
            },
          },
          { new: true }
        )
      )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
