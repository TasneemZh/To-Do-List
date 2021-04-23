const express = require("express");
const ejs = require("ejs");
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  var myDate = new Date();
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };

  res.render("list", {
    ejsDate: myDate.toLocaleString("en-US", options),
    ejsItems: items
  });
});

app.post("/", function(req, res) {
  var item = req.body.addItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("The server is running on port 3000...");
});
