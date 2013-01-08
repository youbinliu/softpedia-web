var mongoose = require("mongoose")
,   Soft = mongoose.model("Softs")


exports.menu = function(req,res){
    res.render("feed")    
    
}

exports.category = function(req,res){
    
    var cate_1 = req.params.cate_1;
    var cate_2 = req.params.cate_2;
    
    if(cate_1 === "")cate_1="WINDOWS";
    if(cate_2 === undefined || cate_2 === null)cate_2 = ""
    
    Soft.find({cate_1:cate_1,cate_2:cate_2},function(err,softs){
        
        if(err)res.status(500).send('数据库查询错误');
        
        res.render("category",{softs:softs})
        
    })
    
}