var mongoose = require("mongoose")
,   Soft = mongoose.model("Softs")
,	Config = require("../../config/config")
,	$ = require('jquery')
,   request = require('request')

exports.category = function(req,res){
    
    var cate_1 = req.params.cate_1;
    var cate_2 = req.params.cate_2;
    
    if(cate_1 === undefined || cate_1 === null)cate_1="WINDOWS";
    if(cate_2 === undefined || cate_2 === null)cate_2 = ""
    
    
    var cfg = Config.updateConfig.menu
    Soft.find({cate_1:cate_1,cate_2:cate_2},function(err,softs){
        
        if(err){
        	res.status(500).send('数据库查询错误');
        	return;
        }
        
        res.render("category",{softs:softs,menu:cfg,cate1:cate_1,cate2:cate_2})
        
    })
    
}

exports.search = function(req,res){
	
	var cate = req.body.cate
	var keywords = req.body.search
	
	var url = ""
	
	if(cate == "WINDOWS"){
		url = "http://win.softpedia.com/dyn-search.php?search_term="+keywords+"&x=0&y=0"
	}else if(cate == "GAMES"){
		url = "http://games.softpedia.com/dyn-search.php?search_term="+keywords+"&x=0&y=0"
	}else if(cate == "DRIVERS"){
		url = "http://drivers.softpedia.com/dyn-search.php?search_term="+keywords+"&x=9&y=9"
	}else if(cate == "MAC"){
		url = "http://mac.softpedia.com/dyn-search.php?search_term="+keywords+"&x=1&y=10"
	}else if(cate == "LINUX"){
		url = "http://linux.softpedia.com/dyn-search.php?search_term="+keywords+"&x=0&y=0"
	}else if(cate == "SCRIPT"){		
		url = "http://webscripts.softpedia.com/dyn-search.php?search_term="+keywords+"&x=0&y=0"
	}else if(cate == "HANDLELD"){
		url = "http://handheld.softpedia.com/dyn-search.php?search_term="+keywords+"&x=10&y=11"
	}else{
		
	}
	
	request({ 
            uri:url,
            headers:{"User-Agent":"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.11 (KHTML, like Gecko)"+
            "Chrome/23.0.1271.97 Safari/537.11"}
            },
            function (error, response, body) {
            if (error || response.statusCode !== 200) {
                console.log('Error when contacting '+url);
                return;
            }
			
            if(body === undefined){
                console.log("error:"+url)                    
                return;
            }
            
            var tables = $(body).find(".narrow_listheadings")
            
            if(tables==null || tables ==""){
            	console.log("tables are not finded")
            	return
            }
            
            tables.each(function(){
            	tds = this.find("td")
            	if(tds.length == 3){
            		var icon = td[0].find("img").attr("src")
            		var name = td[1].children("h2").children("a").html()
            		var developer = td[1].children("h2").children("span").children("a").html()
            		var description = td[1].children("p").html()
            		var downloads = td[2].children("p").html()
            		
            		console.log("icon:"+icon)
            		console.log("name:"+name)
            		console.log("developer:"+developer)
            		console.log("description:"+description)
            		console.log("downloads:"+downloads)
            	}
            	
            })
            
    })
    
    res.render("search")
	
	
	
}
