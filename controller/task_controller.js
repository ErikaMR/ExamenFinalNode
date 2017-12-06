var basicAuth = require('basic-auth');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var modelos = require ('../models/modelos').modelos;
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const jsrsasign = require('jsrsasign');
app.use(bodyParser.json());

exports.guardar = function(request, response){  
    response.setHeader('Content-Type', 'application/json');
    console.log(request.body.text);
    if (request.body.text && request.body.done && request.body.date) {
      if(modelos.length>0){
        var n = (modelos[modelos.length-1].id);
      }
      else{
        n = 0;
      }
      request.body.id = n+1;
      request.body.createdAt = new Date();
      request.body.updatedAt = new Date();
      modelos.push(request.body);
      response.send('{"id:":'+request.body.id+'}'); 
    }else{
      response.status(400);
      response.send("Not Found");
    }
};

exports.getTask = function(request,response){
      response.setHeader('Content-Type', 'application/json');
      response.send(modelos);
};

exports.borrar = function(request,response){
      response.setHeader('Content-Type', 'application/json');
      var error = false;
      for (var i = 0; i < modelos.length; i++){
        if (modelos[i].id == request.params.id){
          modelos.splice(i,1);
          response.send("Eliminado");
        }
      }
        response.send("NotFound");
};

exports.mostrarToken = function(request,response){
      response.setHeader('Content-Type', 'application/json');

      var usname = request.body.username;
      var pssw = request.body.password;

};