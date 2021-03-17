// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/APIroutes.js"));
app.use(require("./routes/HTMLroutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkoutDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// Listen
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
