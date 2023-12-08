const express = require('express')
var bodyParser = require('body-parser');
const fs = require('fs');
const { finished } = require('stream');
const app = express()
const port = 3000


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));


var accounts = {}; //use fs to load the json file and parse it here

require('fs').readFile('links/PasswordManager/accounts.json', 'utf8', function (err, data) {
    if (err) {

        // error handle
    }
    else {

        accounts = JSON.parse(data);
    }
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/submit', (req, res) => {
    console.log(req.body)
    accounts[req.body.sName] = req.body.Password
    data = JSON.stringify(accounts)

    fs.writeFileSync('links/PasswordManager/accounts.json', data, finished);

    function finished(err) {
        console.log('success');
    }

    res.send(`Your user was ${req.body.sName} and your pass was ${req.body.Password}<br><button onclick="window.history.go(-1)">BACK</button>`)

})

// app.get('/query', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

app.get('/query', (req, res) => {

    let foundPassword = accounts[req.query.sQuery];


    if (foundPassword) {
        res.send(`${req.query.sQuery}'s Password is ${foundPassword}!<br><button onclick="window.history.go(-1)">BACK</button>`)
    } else {
        res.send(`${req.query.sQuery} not found`)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})