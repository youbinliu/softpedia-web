var config = require('../config/config')
    ,fs = require('fs')
    ,$ = require('jquery')
var mongoose = require('mongoose')
mongoose.connect(config.updateConfig.db)

require("../web/models/feeds")


var  Feeds = mongoose.model('Feeds')



$(config.updateConfig.menu).each(function(){
    var cate = this.cate;
    var menu = this.name;
    this.cate_1 = menu;
    this.cate_2 = "";
    
    var f = new Feeds({name:this.name,cat_1:menu,cat_2:'',url:this.rss})
    f.save(function(err,feeds){
        if(err){
            console.log(err)
        }
       
    })
    
    $(cate).each(function(){ 
        //console.log(menu+"/"+this.name)
        this.cate_1 = menu;
        this.cate_2 = this.name;
        var ff = new Feeds({name:this.name,cat_1:this.cate_1,cat_2:this.cate_2,url:this.rss})
        ff.save(function(err,feeds){
            
        })
    })   
    
})
