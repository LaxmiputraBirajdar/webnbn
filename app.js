const express = require("express")
const ejs = require("ejs")
const app = express();



app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get("/", function(req, res)
{

  res.render("homa");
})

app.get('/:page', function(req, res) {
  var page = req.params.page;
  console.log(req.params.page);
  
  res.render(page);
});



app.listen(3000, function(){
    console.log("Runninig on the port 3000");
})