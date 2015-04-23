/**
 * [将NodeList对象转换为数组]
 * @param  {[type]} nodes [description]
 * @return {[type]}       [description]
 */
/*function convertToArray(nodes){
	var array=null;
	try{
		array=Array.prototype.slice.call(nodes,0);//非IE浏览器
	}catch(ex){
		array=new Array();
		for(var i=0,len=nodes.length;i<len;i++){
			array.push(nodes[i]);
		}
	}
	return array;
}
var myList=document.getElementsByTagName("html");
var myListArray=convertToArray(myList);
// if(myListArray[0].nodeType==1){
// 	alert(myListArray[0].nodeName);
// }
// 
var html=document.documentElement;
alert(html===document.childNodes[0]);
alert(html===document.lastChild);*/

//document.title="change title";

var div=document.getElementById("myDiv");
alert(div.className);
alert(div.attributes.getNamedItem("lang").nodeValue);
/**
 * 输出标签的属性
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
function outputAttributes(element){
	var pairs=new Array();
	for(var i=0,len=element.attributes.length;i<len;i++){
		var attrName=element.attributes[i].nodeName;
		var attrValue=element.attributes[i].nodeValue;
		if(element.attributes[i].specified){
			pairs.push(attrName+"=\""+attrValue+"\"");
		}
	}
	return pairs.join(" ");
}
alert(outputAttributes(div));


//创建文本节点
var element=document.createElement("div");
element.className="message";
var textNode=document.createTextNode("hello world");
element.appendChild(textNode);
var anotherTextNode=document.createTextNode(" Good");
element.appendChild(anotherTextNode);
document.body.appendChild(element);

/*//规范化文本节点
alert(element.childNodes.length);
element.normalize();
alert(element.childNodes.length);
alert(element.firstChild.nodeValue);*/

//分割文本节点
/*var newNode=element.firstChild.splitText(5);//从位置5开始分割
alert(element.firstChild.nodeValue);
alert(newNode.nodeValue);
alert(element.childNodes.length);*/

//DocumentFragment类型
var fragment=document.createDocumentFragment();
var ul=document.getElementById("myList");
var li=null;
for(var i=0;i<3;i++){
	li=document.createElement("li");
	li.appendChild(document.createTextNode("Item "+(i+11)));
		fragment.appendChild(li);
}
ul.appendChild(fragment);

//document.body.scrollByLines(5);
//document.div.scrollIntoView();
/**
 * 确定某节点是不是另一个节点的后代
 * @param  {[type]} refNode   [参考节点]
 * @param  {[type]} otherNode [要检查的节点]
 * @return {[type]}           [description]
 */
function contains(refNode,otherNode){
	if(typeof refNode.contains=="function"&&(!client.engine.webkit||client.engine.webkit>=522)){
		return refNode.contains(otherNode);
	}else if(typeof refNode.compareDocumentPosition=="function"){
		return !!(refNode.compareDocumentPosition(otherNode)&16);
	}else{
		var node=otherNode.parentNode;
		do{
			if(node==refNode){
				return true;
			}else{
				node=node.parentNode;
			}
		}while(node!==null);
		return false;
	}
}

function getInnerText(element){
	return(typeof element.textContent=="string")?element.textContent:element.innerText;
}
function setInnerText(element,text){
	if(typeof element.textContent=="string"){
		element.textContent=text;
	}else{
		element.innerText=text;
	}
}
setInnerText(div,"hello");
alert(getInnerText(div));
/**
 * [动态加载外部javascript文件]
 * @param  {[type]} url [外部js文件地址]
 * @return {[type]}     [description]
 */
function loadScript(url){
	var script=document.createElement("script");
	script.type="text/javascript";
	script.src=url;
	document.body.appendChild(script);
}
/**
 * 以全局作用域中的字符串加载js脚本
 * @param  {[type]} code [js代码]
 * @return {[type]}      [description]
 */
function loadScriptString(code){
	var script=document.createElement("script");
	script.type="text/javascript";
	try{
		script.appendChild(document.createTextNode(code));
	}catch(ex){
		script.text=code;
	}
	document.body.appendChild(script);
}
//loadScriptString("function sayHi(){alert('hi');}");
/**
 * 动态加载样式
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function loadStyles (url) {
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.type="text/css";
	link.href=url;
	var head=document.getElementsByTagName("head")[0];
	head.appendChild(link);
	// body...
}
/**
 * 以全局作用域中的字符串加载css样式
 * @param  {[type]} css [description]
 * @return {[type]}     [description]
 */
function loadStyleString(css){
	var style=document.createElement("style");
	style.type="text/css";
	try{
		style.appendChild(document.createTextNode(css));
	}catch(ex){
		style.stylesheet.cssText=css;
	}
	var head=document.getElementsByTagName("head")[0];
	head.appendChild(style);
}
//loadStyleString("body{background-color:red}");
//
var table=document.createElement("table");
table.border=1;
table.width="100%";

var tbody=document.createElement("tbody");
table.appendChild(tbody);

tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));

tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2"));
tbody.rows[1].insertCell(1);
tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));

document.body.appendChild(table);