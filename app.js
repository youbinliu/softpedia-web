var express = require('express')
,   fs = require('fs')

var app = express()

app.root = __dirname;
var config = require('./config/config')

//test
var mongoose = require('mongoose')
mongoose.connect(config.settings.db)

var modelsPath = app.root + '/web/models'
,   modelFiles = fs.readdirSync(modelsPath)
modelFiles.forEach(function(modelName){
    require(modelsPath+'/'+modelName)
})


config.appSet(app)
require("./config/routes").setup(app)




app.listen(config.settings.port);
console.log('Listening on port '+config.settings.port);