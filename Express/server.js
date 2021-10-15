var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// app.use(express.static('public'));  
app.get('/user', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  

app.post('/user', urlencodedParser,function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
}) 

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  
