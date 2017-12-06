var basicAuth = require('basic-auth');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

const taskcont = require('./controller/task_controller.js');
var modelos = require ('./models/modelos').modelos;

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

const jsrsasign = require('jsrsasign');

app.post('/api/tasks', taskcont.guardar);
app.get('/api/tasks', taskcont.getTask);
app.delete('/api/tasks/:id', taskcont.borrar);
app.post('/api/auth/token', taskcont.mostrartoken);

exports.app = app;