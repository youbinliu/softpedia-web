// category schema

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var CateSchema = new Schema({
    name:String
  , cate2:[]
})

var CategorySchema = new Schema({
    menu: String
  , cate:[CateSchema]
})

mongoose.model('Category', CategorySchema)