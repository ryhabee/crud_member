const express = require("express");
const mongoose = require('mongoose');
const app = express();
const router=require('./routes/memberoutes') ;


// Middleware
app.use(express.json());
app.use("/api/members",  router) ;

// This middleware parses incoming requests with JSON payloads.
// It allows accessing the request body via 'req.body' in route handlers.

// Configure mongoose
mongoose
  .connect('mongodb://127.0.0.1:27017/dbjci', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // The 'useNewUrlParser' and 'useUnifiedTopology' options are provided to avoid deprecation warnings.
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.listen(3001, () => {
  console.log("Server is running on port 3001");

});// This starts the server and listens on port 3000 for incoming requests.

module.exports = app; // Exporting the 'app' object allows it to be used by other files when this module is imported.
