const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// creating home route
app.get('/', function(req, res){
    // browser sent request to our server
    // so we send index.html file
    res.sendFile(__dirname + '/index.html');
});
app.get('/subtract', function(req, res){
    res.sendFile(__dirname + '/subtract.html');
});
app.post('/subtract', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 - num2;
    res.send('you result is ' + result);
});
app.post('/', function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`<h1>My first Calculator App</h1>
    <form action="/" method = 'post'>
        <input type="text" name = 'num1' placeholder="Enter first Number">
        <input type="text" name = 'num2' placeholder="Enter Second Number">
        <button type = 'submit' name = 'submit'>Calculate</button>
        <h3>Your result is ${result}</h3>
    </form>`);
});
// creating port
app.listen(3000, function(){
    console.log("server is running");
})