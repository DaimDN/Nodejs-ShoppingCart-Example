const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');
var Shoppingcart = ["apple", "mango", "orange" , "banana", "Kiwi"];


app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
var date = new Date();
var day = "";
if (date.getDay() == 0 || date.getDay()==6){
day = "Weekend";
}
else{
day = "Weekday";
}


res.render("index", {n: Shoppingcart});
});


app.post('/', function(req, res){
  var input = req.body.items;
  Shoppingcart.push(input);
  res.redirect('/');
})
app.post('/remove', function(req, res){
  Shoppingcart.pop();
  res.redirect('/');
})


app.listen(port, function(req, res){
  console.log("server is up and running on port " + port);
})
