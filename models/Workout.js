const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutS = new Schema({
  day: Date,

  exercise: [
    {
      type: Schema.type.ObjectId,
      ref: "Exercise",
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutS);

module.exports = Workout;
