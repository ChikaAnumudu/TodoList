// jshint esversion6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
// setting the view engine to ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static("public"));

// create an array for the items
const items = ["Money","food", "rest"];
const  workItems = [];

// ALL THE GET WILL BE NOTED HERE
app.get("/", (req, res)=>{
  const  day = date.toDay();
  res.render("list", {listTitle: day, todoListItems: items});

});

app.get("/work", (req, res)=>{
  res.render("list", {listTitle:"Work list", todoListItems: workItems });
});
app.get("/about", (req, res)=>{
  res.render("about")
});

// END OF GET
// ALL POST WILL BE NOTED HERE
app.post("/", (req, res)=>{
  const  item = req.body.newItem;
  if(req.body.list === "Work"){

      workItems.push(item);
      res.redirect("/work");

  }else{

      items.push(item);
      res.redirect("/");
  }

});
// END OF POST






// MY SERVER PORT WHICH IS STARTING AT 3000
app.listen(3000, ()=>{
  console.log("Server is starting at port 3000");
});
