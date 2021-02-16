
var express = require('express')
var app = express()
var rootDir = "./www/"
var gateway = require('gateway')

var options = {
  '.php': 'php-cgi'
}

var middleware = gateway(__dirname + '/www', options)

app.get('/',(req,res) => {
    
    middleware(req, res, function(err) {
        res.writeHead(204, err)
        res.end()
      })
})

app.post('/index.php',(req,res) => {
    
    middleware(req, res, function(err) {
        res.writeHead(204, err)
        res.end()
      })
})

app.get('/index.php', (req, res) => {
    res.redirect('/')
})

app.listen(8888)