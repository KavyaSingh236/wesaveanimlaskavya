const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const database = require("mime-db");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/contact", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Connected to MongoDB");
});

// Create a Subscriber schema
const subscriberSchema = new mongoose.Schema({
  name: {type:String , required:true},
  phone: {type:String , required:true},
  email: {type:String , required:true},
});
const Subscriber = mongoose.model("contact", subscriberSchema);

const app = express();
app.use(bodyParser.json());

// Serve the static files
app.use(express.static("public"));

// Save the subscriber in the database
app.post("/contact", function(req, res) {
  const { name, phone, email } = req.body;

  const subscriber = new Subscriber({
    name: "name",
    phone: "phone",
    email: "email"
  });

  subscriber.save(function(err) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(3001, function() {
  console.log("Server started on port 3000");
});