
var express = require('express')
var app = express()
var rootDir = "/www/"
var gateway = require('gateway')

var options = {
  '.php': 'php-cgi'
}

var middleware = gateway(__dirname + rootDir, options)

app.all('/',(req,res) => {
    
    middleware(req, res, function(err) {
        res.writeHead(204, err)
        res.end()
      })
})

app.all('/index.php',(req,res) => {
    middleware(req, res, function(err) {
        res.writeHead(204, err)
        res.end()
      })
})

app.listen(8888)
