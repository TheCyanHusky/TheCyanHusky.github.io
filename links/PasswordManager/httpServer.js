var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express')
const app = express()

app.use(express.static('public')),

    http.createServer(function (req, res) {
        var q = url.parse(req.url, true);
        var filename = "." + q.pathname;
        if (req.url == "/") {
            fs.readFile("passwordManager.html", function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("404 Not Found");
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        } else if (req.url == "/submit" && req.method == 'POST') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("i gotcher stuff");
            return res.end();

        } else if (req.url == "/query" && req.method == 'GET') {
            
            
        } else {
            fs.readFile(filename, function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("404 Not Found");
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        }
    }).listen(8080);