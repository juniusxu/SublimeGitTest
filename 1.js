	/*
		var colors=new Array();
		var count=colors.push("red","green");
		colors[colors.length]="black";
		
		var item=colors.shift();
		alert(item);
		item=colors.pop();
		alert(item);
		alert(colors.length);

		var colors2=new Array();
		//var count2=colors2.unshift("red","green");
		colors2.unshift("red");
		colors2.unshift("green");
		colors2.unshift("black");
		item=colors2.pop();
		alert(item);
		
		
		function compare(value1,value2){
			return value1-value2;	
		}
		var values=[0,1,5,3,4,10,15];
		values.sort(compare);
		alert(values);
		
		*/
	/*
	var colors=["r","b","g","y","p"];
	var colors2=colors.slice(1);
var now=new Date();
	
	alert(now);
	*/
	/*
	var text="cat,bat,sat,fat";
	var pattern1=/.at/g;
	var matches=pattern1.exec(text);
	alert(matches.index);
	alert(matches[0]);
	alert(pattern1.lastIndex);
	
	matches=pattern1.exec(text);
	alert(matches.index);
	alert(matches[0]);
	alert(pattern1.lastIndex);
	
	var pattern=new RegExp("at","gi");
	alert(pattern.toString());
	if(pattern1.test(text)){
		alert(RegExp.$_);
		alert(RegExp["$`"]);
		alert(RegExp["$'"]);
		alert(RegExp["$+"]);
		
	}
	*/
	/*
	function createComparisonFunction(propertyName){
		return function(obj1,obj2){
			var value1=obj1[propertyName];
			var value2=obj2[propertyName];
			return value1-value2;
		};
		
	}
	var data=[{name:"aaaa",age:22},{name:"bbbb",age:12}];
	data.sort(createComparisonFunction("name"));
	alert(data[0].name);
	
	data.sort(createComparisonFunction("age"));
	alert(data[0].age);
	*/
	/*
	function factorial(num){
		if(num<=1){
			return 1;
		}else{
			return num*arguments.callee(num-1);
		}
	}
	var trueFactorial=factorial;
	factorial=function(){
		return 0;
	}
	alert(trueFactorial(5));
	alert(factorial(5));
	*/
	/*
	var text="cat,bat,sat,fat";
	var result=text.replace(/(.at)/g,"uu($1)");
	alert(result);
	*/
	/*
	function htmlEscape(text){
		return text.replace(/[<>"&]/g,function(match,pos,originalText){
			switch(match){
				case "<":
					return "&lt";
				case ">":
					return "&gt";
				case "&":
					return "&amp";
				case "\"":
					return "&quot";
			}
		});
	}
	
	alert(htmlEscape("<script src=\"1.js\"></script>"));
	*/
	/*
	var uri="http://www.baidu.com/illegal value.html#start";
	alert(decodeURI(encodeURI(uri)));
	alert(decodeURIComponent(encodeURIComponent(uri)));
	*/
	/*select something randly from a to b
	function selectFrom(lowerValue,upperValue){
		var choice=upperValue-lowerValue+1;
		return Math.floor(Math.random()*choice+lowerValue);
	}
	//alert(selectFrom(2,10));
	var colors=["r","b","d","y","o"];
	alert(colors[selectFrom(0,colors.length-1)]);
	*/
	/*
	function Person(name,age,job){
		this.name=name;
		this.age=age;
		this.job=job;
		this.sayName=function(){
			alert(this.name);
		}
	}

	var person1=new Person("xx",12,"student");
	person1.sayName();
	*/

	/*
	function Person(){

	}
	Person.prototype.name="xxx";
	Person.prototype.age=22;
	Person.prototype.job="student";
	Person.prototype.sayName=function(){
		alert(this.name);
	};
	var person1=new Person();
	person1.sayName();
	var person2=new Person();
	person2.sayName();
	//alert(person1.sayName==person2.sayName);
	alert(Person.prototype.isPrototypeOf(person1));
	*/
	/*
	function Person(){

	}
	//////// care about the order of New Person() and Person.prototype
	var person=new Person();
	Person.prototype={
		constructor:Person,
		name:"xxx",
		age:22,
		job:"student",
		sayName:function(){
			alert(this.name);
		}
	};
	person.sayName();//error
	///////////
	*/
	/*
	Person.prototype={
		constructor:Person,
		name:"xxx",
		age:22,
		job:"student",
		sayName:function(){
			alert(this.name);
		}
	};
	var person=new Person();

	person.sayName();//right
	*/
	/*
	function Person(name,age,job){
		this.name=name;
		this.age=age;
		this.job=job;
		this.friends=["shelby","ccc"];
	}
	Person.prototype={
		constructor:Person,
		
		sayName:function(){
			alert(this.name);
		}
	};
	var person1=new Person("aaa",22,"2222");
	var person2=new Person("bbb",33,"333");
	person1.friends.push("van");
	alert(person1.friends);
	alert(person2.friends);
	person1.sayName();
	person2.sayName();
	alert(person1.friends===person2.friends);
	alert(person1.sayName===person2.sayName);
	*/

	/*
	function SuperType(){
		this.property=true;
	}
	SuperType.prototype.getSuperValue=function(){
		return this.property;
	};

	function SubType(){
		this.subproperty=false;
	}
	SubType.prototype=new SuperType();
	SubType.prototype.getSubValue=function(){
		return this.subproperty;
	};
	var instance=new SubType();
	alert(instance.getSuperValue());
	alert(instance instanceof SuperType);
	*/

	/*
	function SuperType(name){
		this.name=name;
		this.colors=["red","blue","green"];
	}
	SuperType.prototype.sayName=function(){
		alert(this.name);
	};
	function SubType(name,age){
		SuperType.call(this,name);
		this.age=age;
	}
	
	SubType.prototype=new SuperType();
	SubType.prototype.sayAge=function(){
		alert(this.age);
	};
	var instance1=new SubType("NiLenovo",44);
	instance1.colors.push("black");
	alert(instance1.colors);
	instance1.sayName();
	instance1.sayAge();

	var instance2=new SubType("Greg",99);
	alert(instance2.colors);
	instance2.sayName();
	instance2.sayAge();
	*/

	/*
	function object(o){
		function F(){}
		F.prototype=o;
		return new F();
	}  
	function inheritPrototype(subType,superType){
		var prototype=object(superType.prototype);
		prototype.constructor=subType;
		subType.prototype=prototype;
	}
	function SuperType(name){
		this.name=name;
		this.colors=["red","blue","green"];
	}
	SuperType.prototype.sayName=function(){
		alert(this.name);
	};
	function SubType(name,age){
		SuperType.call(this,name);
		this.age=age;
	}
	inheritPrototype(SubType,SuperType);
	SubType.prototype.sayAge=function(){
		alert(this.age);
	};
	var instance1=new SubType("NiLenovo",44);
	instance1.colors.push("black");
	alert(instance1.colors);
	instance1.sayName();
	instance1.sayAge();

	var instance2=new SubType("Greg",99);
	alert(instance2.colors);
	instance2.sayName();
	instance2.sayAge();
	*/
	/*
	function createFunctions(){
		var result=new Array();
		for(var i=0;i<10;i++){
			result[i]=function(num){
				return function(){
					return num;
				};
			}(i);//????????????????????????????????????
		}
		return result;
	}
	var funcs=createFunctions();
	for(var i=0;i<10;i++){
		document.write(funcs[i]()+"<br/>");
	}
	*/
	/*test
	function Person(){}
	console.log(Person.__proto__.__proto__===Object.prototype);//Object==Object
	console.log(Person.__proto__===Function.prototype);//Object===Object
	console.log(Person.prototype.__proto__===Object.prototype);

	//null===null
	console.log(Person.prototype.__proto__.__proto__===Object.prototype.__proto__);
	*/
	/*
	function outputNumbers(count){
		(function(){
			for(var i=0;i<count;i++){
				alert(i);
			}
		})();
		//alert(i);
	}
	outputNumbers(5);
	*/
	/*
	(function(){
		var name="";
		Person=function(value){
			name=value;
		};
		Person.prototype.getName=function(){
			return name;
		};
		Person.prototype.setName=function(value){
			name=value;
		};
	})();
	var person=new Person("Lenovo");
	alert(person.getName());
	person.setName("Greg");
	alert(person.getName());
	var person2=new Person("Lenovo2");
	alert(person.getName());
	//person2.setName("Greg2");
	alert(person2.getName());
	*/
	/*
	var singleton=function(){
		var privateVariable=10;
		function privateFunction(){
			return false;
		}
		return{
			publicProperty:true,
			publicMethod:function(){
				privateVariable++;
				return privateFunction();
			}
		};
	}();
	*/

	/*
	function BaseComponent(){

	}
	function OtherComponent(){

	}
	var application=function(){
		var componnents=new Array();
		componnents.push(new BaseComponent());
		return{
			getComponent:function(){
				return componnents.length;
			},
			registerComponent:function(componnent){
				if(typeof componnent=="object"){
					componnents.push(componnent);
				}
			}
		};
	}();
	application.registerComponent(new OtherComponent());
	alert(application.getComponent());
	*/


	/*
	var singleton=function(){
		var privateVariable=10;
		function privateFunction(){
			return false;
		}
		var object=new CustomType();
		object.publicProperty=true;
		object.publicMethod=function(){
				privateVariable++;
				return privateFunction();
			};
		return object;
	}();
	*/

	/*
	function BaseComponent() {

	}

	function OtherComponent() {

	}
	var application = function() {
		var componnents = new Array();
		componnents.push(new BaseComponent());

		var app = new BaseComponent();

		app.getComponent = function() {
			return componnents.length;
		};
		app.registerComponent = function(componnent) {
			if (typeof componnent == "object") {
				componnents.push(componnent);
			}
		};
		return app;
	}();
	application.registerComponent(new OtherComponent());
	console.log(application.getComponent());
	*/
	/*闭包*/
	var datamodel = {  
	    table : [],  
	    tree : {}  
	};  
	   
	(function(dm){  
	    for(var i = 0; i < dm.table.rows; i++){  
	       var row = dm.table.rows[i];  
	       for(var j = 0; j < row.cells; i++){  
	           drawCell(i, j);  
	       }  
	    }  
	     
	    //build dm.tree    
	})(datamodel); 

	var person = function(){  
    //变量作用域为函数内部，外部无法访问  
    var name = "default";     
     
    return {  
       getName : function(){  
           return name;  
       },  
       setName : function(newName){  
           name = newName;  
       }  
    }  
}();  
   
console.log(person.name);//直接访问，结果为undefined  
console.log(person.getName());  
person.setName("abruzzi");  
console.log(person.getName());  
