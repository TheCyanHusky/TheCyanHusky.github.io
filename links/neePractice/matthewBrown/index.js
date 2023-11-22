// Importing 'express' module like modding minecraft |:-0|
const express = require('express')
const ejs = require('ejs')
// make ne express app
const app = express();

//CONSTANTS
const PORT = 3000

//SET
app.set('view engine', 'ejs');

//Create GET endpoint for the root
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

//create GET endpoint for ${Name}
app.get(`/greeting`, (req, res) => {
    console.log(req.query.name);
    let greetName = "Guest"
    if (req.query.name) {
        greetName = req.query.name
    }
    res.render('head.ejs', {greetName})
});


//in terminal, get your IP with 'ipconfig'
///have a friend connect to /joke
/// http://172.16.3.127:3000/joke 

//start an HTTP listen server with express
app.listen(PORT, (error) => {
    console.log(`Server started on Port ${PORT}`);
});

