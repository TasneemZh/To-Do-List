const express = require("express");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {

  res.render("list", {
    ejsList: date.getDate(),
    ejsItems: items
  });
});

app.get("/work", function(req, res) {
  res.render("list", {
    ejsList: "Work List",
    ejsItems: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/", function(req, res) {
  const item = req.body.addItem;

  if (req.body.button === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function() {
  console.log("The server is running on port 3000...");
});
