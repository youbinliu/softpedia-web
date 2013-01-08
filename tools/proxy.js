var $ = require('jquery'),
    request = require('request'),
    htmlparser = require('htmlparser')

var mongoose = require('mongoose')
, Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/softpedia")

var ProxySchema = new Schema({
    url:String
},{_id:false})
mongoose.model('Proxy', ProxySchema)
var  ProxyModel = mongoose.model('Proxy')

var count_id = 0;
var clearDB = function(){
	ProxyModel.remove(function(err,p){
		if(err)console.log(err)
	})
}
var store = function(ipport){
    ProxyModel.findOne({url:ipport},function(error,p){
        if(!p){
			++count_id;
            var pp = new ProxyModel({url:ipport,id:count_id})
            pp.save();
        }else{
           // console.log(ipport+" has exist")
        }
    })
}

var fetchLinktool = function(){
    request({uri:"http://proxy.linktool.org/"},
           
            function (error, response, body) {
                if (error || response.statusCode !== 200) {
                    console.log('Error when contacting proxy.linktool.org');
                    return;
                }
                var list = $(body).find("dd");
                
                list.each(function(){
                    if(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,4}/.test($(this).html()))
                    {
                        //console.log($(this).html());
                        store($(this).html())
                    }
                    
                })        
                
            }
    )
}


var fetchSitedigger = function(){    
    
    request({uri:"http://www.site-digger.com/html/articles/20110516/proxieslist.html"},           
            function (error, response, body) {
                if (error || response.statusCode !== 200) {
                    console.log('Error when contacting proxy.linktool.org');
                    return;
                }
                var textarea = $(body).find("textarea").text().split("\n");
                textarea.forEach(function(el,idx){
                    //console.log(idx+":"+el)
                    store(el)
                })
                        
            }
    )
}


var requestCnproxy = function(url){
     request({uri:url},           
            function (error, response, body) {
                if (error || response.statusCode !== 200) {
                    console.log('Error when contacting www.cnproxy.com/proxy');
                    return;
                }
                
                var handler = new htmlparser.DefaultHandler(function (error, dom){});
                var parser = new htmlparser.Parser(handler);
                parser.parseComplete(body);      
                
                var proxyList = htmlparser.DomUtils.getElementById("proxylisttb", handler.dom);
                if(proxyList === undefined)return;
                
                var tables = htmlparser.DomUtils.getElementsByTagName("table", proxyList);
                if(tables === undefined || tables.length !== 3){
                    console.log("cnproxy format error");
                    return;
                }
                
                var trlist = htmlparser.DomUtils.getElementsByTagName("tr",tables[2]);
                trlist.forEach(function(el,index){
                    if(el.children[0] === undefined || el.children[0].children[0] === undefined)return;
                
                    var ip = el.children[0].children[0].data
                    if(!/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(ip))return;
                    var portraw = htmlparser.DomUtils.getElementsByTagType("script",el);
                    portraw = htmlparser.DomUtils.getElementsByTagType("text",portraw);
                    
                    if(portraw[0] === undefined)return;
                    portraw = portraw[0].data;
                    t = portraw.substring(19,portraw.length-1).split("+");
                    
                    var port = [];
                    port['z']="3";port['m']="4";port['k']="2";
                    port['l']="9";port['d']="0";port['b']="5";
                    port['i']="7";port['w']="6";port['r']="8";port['c']="1";                    
                    
                    p = '';
                    t.forEach(function(e,i){
                        p += port[e]
                    })
                    //console.log(ip+":"+p)
                    store(ip+":"+p)
                })
            }
        )
    
}

var fetchCnproxy = function(){

    var host = "http://www.cnproxy.com/proxy";
    for(var i = 1; i < 11; ++i){
        var url = host+i+".html";
        requestCnproxy(url);        
    }
    host = "http://www.cnproxy.com/proxyedu";
    for(i = 1; i < 3; ++i){
        url = host+i+".html";
        requestCnproxy(url);        
    }
}

var proxy = function(){
    
}

proxy.prototype.updateProxyIps = function(){
	console.log("begin to update")
	clearDB();
    //fetchLinktool(); 
    //fetchCnproxy();
    fetchSitedigger();
	console.log("updated...")
}

proxy.prototype.randomProxy = function(param,cb){
	ProxyModel.count(function(err,count){
		if(count == 0){
			console.log("please update first")
			return;
		}
		id = Math.floor(Math.random()*count+1)
		ProxyModel.findOne({id:id},function(err,p){
			if(!p)return cb("");
			else return cb(p.url,param);
		})
	})	
}
//var p = new proxy();
var show = function(url){
	console.log(url)
}

var ppp = new proxy()
ppp.updateProxyIps()

exports.proxy = proxy