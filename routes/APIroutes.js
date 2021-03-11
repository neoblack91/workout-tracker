const db = require("../models");

modules.exports = function (app) {
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

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({ day: Date.now() })
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
