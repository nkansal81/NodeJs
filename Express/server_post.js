var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  

app.post('/process_post', urlencodedParser,function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
}) 

app.delete('/deleteUser/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      // const id = req.params.id;
      const user = data.indexOf(p=> p.id === id)
      // console.log(data);
      // var user = data["user" + id];
      // console.log(user)
      // data.splice((id-1),1);
      delete user;
      // delete data["user" + req.params.id];
       
      // console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  
