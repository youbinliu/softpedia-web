var mongoose = require("mongoose")
,   Soft = mongoose.model("Softs")
,	Config = require("../../config/config")
,   request = require('request')
,	$ = require('jquery')
,	Url = require('url');
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

var requestAction = function(url,cb){
	request({ 
            uri:url,
            headers:{"User-Agent":"Mozilla/5.0"
            },
            proxy:"http://122.72.80.100:80",
            encoding:"utf-8"
            },
            function (error, response, body) {
            if (error || response.statusCode !== 200) {
                console.log('Error when contacting '+url);
                cb(null)
                return;
            }
            
            if(body === undefined){
                console.log("error:"+url)    
                cb(null)            
                return;
            }
            cb(body)
	})
}

exports.search = function(req,res){
	
	var cate = req.body.cate
	var keywords = req.body.keywords
	var page = parseInt(req.body.page)
	
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
	
	if(page>0)url = url+"&p_page="+page
	
	url = encodeURI(url)
	
	console.log(url)
	
	requestAction(url,function(body){
		if(body == null){
			res.render("search",{softs:[],cate1:"WINDOWS"})
			return
		}
		
        var tables = $(body).find(".narrow_listheadings")
        
        if(tables==null || tables ==""){
        	console.log("tables are not finded")
        	res.render("search",{softs:[],cate1:"WINDOWS"})
        	return
        }
        var softs = [];
        tables.each(function(){
        	tr = $(this).find("tr")
        	tds = $(tr[0]).find("td")
        	
        	if(tds.length == 3){
        		var icon = $(tds[0]).find("img").attr("src")
        		var name = $(tds[1]).children("h2").children("a").html()
        		var link = $(tds[1]).children("h2").children("a").attr("href")
        		var developer = $(tds[1]).children("h2").children("span").children("a").html()
        		var description = $(tds[1]).children("p").html()
        		var more = "<i class='icon-time'></i>"+$(tds[2]).children("p").html()
        		more = more.replace(/<br \/>/g,"<i class=\"icon-file\"></i>")
        		
        		soft = {}
        		soft.icon = icon
        		soft.name = name
        		soft.link = link
        		soft.developer = developer
        		soft.description = description
        		soft.more = more;
        		softs.push(soft)
        	}
        	
        })
        pre = page - 1
        next = page + 1
        res.render("search",{softs:softs,cate1:cate,keywords:keywords,pre:pre,next:next})
   	})
    
}

exports.download = function(req,res){
	var link = req.body.link
	
	requestAction(link,function(body){
		if(body == null){
			res.send("")
			return
		}
		
		dlpage = $(body).find("img[src='http://s1.softpedia-static.com/base_img/download_button_2011a.gif']").parent().attr("href")
		
		requestAction(dlpage,function(data){
			if(data == null){
				res.send("")
				return
			}
			atags = $(data).find("a")
			atags.each(function(){
				url = $(this).attr("href")
				pn = Url.parse(url).pathname;
				q = Url.parse(url).query
				if(pn === "/dyn-postdownload.php" && q != "p=6635&t=0&i=1"){
					requestAction(url,function(d){
						if(d == null){
							res.send("")
							return
						}
						
						aa = $(d).find("a")
						aa.each(function(){
							if($(this).html() === "click here"){
								res.send($(this).attr("href"))
								return true
							}
						})
					})
				}
			})
			
		})
	})
	
	//res.send("")
}

