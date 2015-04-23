/**
 * 浏览器检测
 * 用户代理检测
 * @authors Your Name (you@example.org)
 * 
 * @version $Id$
 */

var client=function(){
	var engine={//引擎
		ie:0,
		gecko:0,
		webkit:0,
		khtml:0,
		opera:0,
		//版本号
		ver:null
	};

	var browser={//浏览器
		ie:0,
		firefox:0,
		konq:0,
		opera:0,
		chrome:0,
		safari:0,
		//具体版本
		ver:null
	};
	//平台、设备和操作系统
	var system={
		win:false,
		mac:false,
		x11:false,
		//移动设备
		iphone:false,
		ipod:false,
		nokiaN:false,
		winMobile:false,
		macMobile:false,
		//游戏系统
		wii:false,
		ps:false
	};
	//检测呈现引擎和浏览器
	var ua=navigator.userAgent;
	if(window.opera){
		engine.ver=browser.ver=window.opera.version();
		engine.opera=browser.opera=parseFloat(engine.ver);
	}else if(/AppleWebKit\/(\S+)/.test(ua)){
		engine.ver=RegExp.$1;
		engine.webkit=parseFloat(engine.ver);
		//确定是Chrome还是Safari
		if(/Chrome\/(\S+)/.test(ua)){
			browser.ver=RegExp.$1;
			browser.chrome=parseFloat(browser.ver);
		}else if(/Version\/(\S+)/.test(us)){
			browser.ver=RegExp.$1;
			browser.safari=parseFloat(browser.ver);
		}else{
			var safariVersion=1;
			if(engine.webkit<100){
				safariVersion=1;
			}else if(engine.webkit<312){
				safariVersion=1.2;
			}else if(engine.webkit<412){
				safariVersion=1.3;
			}else{
				safariVersion=2;
			}
			browser.safari=browser.ver=safariVersion;
		}
	}else if(/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
		engine.ver=browser.ver=RegExp.$1;
		engine.khtml=browser.konq=parseFloat(engine.ver);
	}else if(/rv:([^\)]+)\)Gecko\/\d{8}/.test(ua)){
		engine.ver=RegExp.$1;
		engine.gecko=parseFloat(engine.ver);
		//确定是否为Firefox
		if(/Firefox\/(\S+)/.test(ua)){
			browser.ver=RegExp.$1;
			engine.firefox=parseFloat(browser.ver);
		}
	}else if(/MSIE ([^;]+)/.test(ua)){
		engine.ver=browser.ver=RegExp.$1;
		engine.ie=browse.ie=parseFloat(engine.ver);
	}
	//检测浏览器
	browser.ie=engine.ie;
	browser.opera=engine.opera;

	//检测平台
	var p=navigator.platform;
	system.win=p.indexOf("Win")===0;
	system.mac=p.indexOf("Mac")===0;
	system.x11=(p=="X11")||(p.indexOf("Linux")===0);

	//检测windows操作系统
	if(system.win){
		if(/Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
			if(RegExp.$1=="NT"){
				switch(RegExp.$2){
					case "5.0":
						system.win="2000";
						break;
					case "5.1":
						system.win="XP";
						break;
					case "6.0":
						system.win="Vista";
						break;
					default:
						system.win="NT";
						break;
				}
			}else if(RegExp.$1=="9x"){
				system.win="ME";
			}
			else{
				system.win=RegExp.$1;
			}
		}
	}
	//移动设备
	system.iphone=ua.indexOf("iPhone")>-1;
	system.ipod=ua.indexOf("iPod")>-1;
	system.nokiaN=ua.indexOf("NokiaN")>-1;
	system.winMobile=(system.win=="CE");
	system.macMobile=(system.iphone||system.ipod);

	//游戏系统
	system.wii=ua.indexOf("Wii")>-1;
	system.ps=/playstation/i.test(ua);

	return{
		engine:engine,
		browser:browser,
		system:system
	};
}();

function getObj(obj){
	var objKeys = Object.keys(obj);
	//objKeys = objKeys.sort();//这里写所需要的规则
	for(var i=0;i<objKeys.length;i++){
		alert(objKeys[i]+" : "+obj[objKeys[i]]);
	}
}

for(var o in client){
	//使用getObj函数
	//getObj(client[o]);
	//不使用函数，相当于二维数组
	for(var oChild in client[o]){
		alert(o+'的属性：\n['+oChild+']='+client[o][oChild]);
	}
}
