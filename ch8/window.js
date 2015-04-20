/**
 * test windows.js
 * @authors Your Name (you@example.org)
 * @date    2015-04-13 17:00:25
 * @version $Id$
 */
/*var blocked=false;//是否允许弹出新窗口
try{
	var bdWin=window.open("http://www.baidu.com","_blank");
	if(bdWin===null){
		blocked=true;
	}
}catch(ex){
	blocked=true;
}
if(blocked){
	alert("the popup was blocked");
}else{
	alert("the popup was not blocked");
}*/

/*
setTimeout推荐使用函数调用
var num=0;
var max=10;
function incrementNumber(){
	num++;
	if(num<max){
		setTimeout(incrementNumber,500);
		alert(num);
	}else{
		alert("done");
	}
}
setTimeout(incrementNumber,500);*/

/*if(confirm("are you sure?")){
	alert("so glad you're sure!");
}else{
	alert("sorry to hear you're not sure!");
}
var result=prompt("what is your name?");
if(result!==null){
	alert("welcome, "+result);
}*/


/**
 * [获取URL每个查询字符串参数]
 * @return {[type]} [description]
 */
function getQeuryStringArgs(){
	//获取查询字符串并去掉开头问号
	var qs=(location.search.length>0?location.search.substring(1):"");
	qs="q=js&num=10";
	alert(qs);
	var args={};
	//取每一项
	var items=qs.split("&");
	var item=null,
		name=null,
		value=null;
	//每一项添加到args中
	for(var i=0;i<items.length;i++){
		item=items[i].split("=");
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);
		args[name]=value;
	}
	return args;
}
// var args=getQeuryStringArgs();
// alert(args["q"]);
// alert(args["num"]);
/*location.hash="#section1";
location.search="?q=php";
location.hostname="www.baidu.com";
location.pathname="mydir";
location.port=8080;*/

/**
 * 检测浏览器插件(除IE)
 * @param  {[type]}  name [插件名称]
 * @return {Boolean}      [description]
 */
function hasPlugin(name){
	name=name.toLowerCase();
	for(var i=0;i<navigator.plugins.length;i++){
		if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
			return true;
		}
	}
	return false;
}
// alert(hasPlugin("Flash"));
// alert(hasPlugin("QuickTime"));
// alert(hasPlugin("Java"));
/**
 * [检测浏览器插件(IE)]
 * @param  {[type]}  name [description]
 * @return {Boolean}      [description]
 */
function hasIEPlugin (name) {
	try{
		new ActiveXObject(name);
		return true;
	}catch(ex){
		return false;
	}

}
	//检测flash
	alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
	//检测QuickTime
	alert(hasIEPlugin("QuickTime.QuickTime"));