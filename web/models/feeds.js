// category schema

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var FeedsSchema = new Schema({
    cat_1:String,
    cat_2:String,
    url:String,
    name:String,
    isFeeds:{type:Boolean,default:true}
})

mongoose.model('Feeds', FeedsSchema)