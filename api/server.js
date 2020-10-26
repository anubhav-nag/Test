const express = require('express');
const path = require('path');
const server = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
 
server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.use(bodyParser.json());

// EXPRESS SPECIFIC STUFF
server.use('/static',express.static('static')); // serving static files
server.use(express.urlencoded());

//set the templates directory
server.set('views', path.join(__dirname, '../templates')); 

// settings to render html templates
nunjucks.configure('templates', {
  express: server,
  autoescape: true
});
server.set('view engine', 'html');

// only to check server is working or not
server.get('/trifle', (req, res) => { 
    res.status(200).json({message:"its working"})
});


//routes for pages
server.use('/',require('./home')); // ./home ==> home.js
server.use('/about',require('./about'));
server.use('/contact',require('./contact'));

module.exports = server;