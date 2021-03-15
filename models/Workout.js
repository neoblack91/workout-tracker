const mongoose = require("mongoose");
// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1);
const Schema = mongoose.Schema;

const workouts = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});
const Workout = mongoose.model("Workout", workouts);

module.exports = Workout;
