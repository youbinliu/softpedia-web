// category schema

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var SoftsSchema = new Schema({
    cate_1:String,
    cate_2:String,
    url:String,
    name:String,
    updateDate:String,
    description:String
})

mongoose.model('Softs', SoftsSchema)