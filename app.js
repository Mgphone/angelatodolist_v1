const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date=require(__dirname+"/date.js")

app.use(express.static('public'));
const items=["Buy Food", "Cook Food", "Eat Food"];
const workitems=["Fun"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.get("/work",function (req,res){
res.render('list',{
  listTitle:"Work",
  newListItems:workitems
});
});
app.get("/about",function(req,res){
  res.render("about");
});
app.get("/", function(req, res) {

  // const currentDay = today.getDay();
  // const dateName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  // if (today.getDate()===6||today.getDate()===0){
  //   day="Weekend";
  // }
  //   else{
  //     day="Weekday";
  //   }
  //   res.render('list',{kindofDay:day});
  // });
  // const day = dateName[currentDay];
  const day= date.getDate();
  res.render('list', {
    listTitle: day,
    newListItems:items
  });
});
// app.post("/work",function(req,res){
//     var item=req.body.newItem;
//     items.push(workitems);
//     res.redirect("/work");
//
//
// });
app.post("/",function(req,res){
  const item=req.body.newItem;
  if(req.body.list==="Work"){
    workitems.push(item);
    res.redirect("/work")
  }else
  items.push(item);
  res.redirect("/")

})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
