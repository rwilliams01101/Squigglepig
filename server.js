const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// TODO: mLab was depricated, no real need for DB, just added to meet project requirements.
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/cluster0",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// )
// .then(() => {
server = app.listen(PORT, function () {
  require("./socketio/index.js")(server);
  console.log("App now listening at localhost:" + PORT);
});
// })

// Start the API server
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );
