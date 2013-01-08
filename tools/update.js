var $ = require('jquery'),
    htmlparser = require('htmlparser'),
    request = require('request'),
    config = require('./config/config'),
    fs = require("fs"),
    poolModule = require("generic-pool"),
    Proxy = require("./lib/proxy").proxy
var mongoose = require('mongoose')
//mongoose.connect(config.updateConfig.db)

var modelsPath = __dirname + '/web/models'
,   modelFiles = fs.readdirSync(modelsPath)
modelFiles.forEach(function(modelName){
    require(modelsPath+'/'+modelName)
})

var p = new Proxy()


var  Feeds = mongoose.model('Feeds')
Feeds.remove()

var totalCount = 0;
var pool = poolModule.Pool({
    name : "feed",
    create:function(callback){
        callback(1);
    },
    destroy:function(client){
    },
    max:300,
    idletimeoutMillis : 30000,
	log:false
})

var handler = new htmlparser.RssHandler(function (error, dom) {
    if(error){
        console.log(error)
    }else{
		if(dom.items === undefined || dom.items.length === 0){
	   		console.log(dom)
			return;
		}
        dom.items.forEach(function(el,index){
        //    console.log(el.title)
        //    console.log(el.link)
            var feeds = {};
            feeds.cate_1 = '';
            feeds.cate_2 = '';
            feeds.url = el.link;
            var f = new Feeds(feeds);
            f.save();
        })
        
    }

})

var initRssFeed = function(url,item){
    var curMenu = item.name;
    var curRss = item.rss;
    
    if (!curRss.match(/^http(s)?:\/\//i))return;

   // pool.acquire(function(err,obj){
		
		
		//console.log("the "+totalCount+" begain to request "+curRss)

        request({ 
            uri:curRss,
            headers:{
            "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Charset":"GBK,utf-8;q=0.7,*;q=0.3",
            "Accept-Encoding":"gzip,deflate,sdch",
            "Accept-Language":"zh-CN,zh;q=0.8","Connection":"keep-alive",
            "User-Agent":"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11"},
            "proxy":"http://"+url },
            function (error, response, body) {
            if (error || response.statusCode !== 200) {
                console.log('Error when contacting softpedia.com of '+curMenu);
			//	pool.release(obj);
                return;
            }
			
            console.log("the "+totalCount+" request had recived")
            if(body === undefined){
                    console.log("error:"+curRss)
                    //console.log(error)
                    //console.log(response)
                  //  pool.release(obj)
                    return;
            }
            var parser = new htmlparser.Parser(handler);
            parser.parseComplete(body);   
            ++totalCount;
            console.log("the "+totalCount+" parser finshed,begin to release obj")
           // pool.release(obj);             
      //});  
    })
    
}

$(config.updateConfig.menu).each(function(){
    var cate = this.cate;
    var menu = this.name;
    this.cate_1 = menu;
    this.cate_2 = "";
    
    p.randomProxy(this,initRssFeed)
    
    
    $(cate).each(function(){ 
        //console.log(menu+"/"+this.name)
        this.cate_1 = menu;
        this.cate_2 = this.name;
        p.randomProxy(this,initRssFeed)
    })   
})
/*
pool.drain(function() {            
    pool.destroyAllNow();
});
*/