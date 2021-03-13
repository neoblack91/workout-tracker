const path = require("path");

module.exports = (app, path) => {
  //home page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  //excerise page
  app.get("/excerise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/excerise.html"));
  });
  //stats pages
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
