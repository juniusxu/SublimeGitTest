/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-10 14:16:36
 * @version $Id$
 */

		var colors=new Array();
		var count=colors.push("red","green");
		colors[colors.length]="black";
		
		var item=colors.shift();
		console.log(item);
		item=colors.pop();
		console.log(item);
		console.log(colors.length);

		var colors2=new Array();
		//var count2=colors2.unshift("red","green");
		colors2.unshift("red");
		colors2.unshift("green");
		colors2.unshift("black");
		item=colors2.pop();
		console.log(item);
		
		
		function compare(value1,value2){
			return value1-value2;	
		}
		var values=[0,1,5,3,4,10,15];
		values.sort(compare);