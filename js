1.转换类
<ul>
  <li>parseInt("65535个字节")//65535</li>
  <li>parseInt("emc65535个字节")//NaN</li>
 <li>parseInt("01011",2)//11. 8,16进制以此类推</li>
 </ul>
 Number(false)//0 
 Number(true) //1 
 Number("false") //NaN
 Number("true") //NaN
 Number(undefined) //NaN
 Number(null) //0 
 Number("3.14") //3.14 
 Number("11") //11 
 Number("203.11.12") //NaN 
 Number("360buy") //NaN 
Boolean()函数：
 数据类型：
 String 为空时为false，否则为true
 Number 为数字+0，-0,0，NaN是为false，否则为true
 Null,Undefined false
 Object，Array 当其值不为null是为true，否则为false
 2：关系运算
"3.14"==3.14//true
true==1//true
false==0//true
null==undefined//true
""==0//true
3:其他运算
var a=5;alert(void(a));//undefined
js枚举类型定义：
方法 1:var DataType = {String1:value1,String2:value2 }
方法 2:var DataType = {};
DataType.String1=value1;
DataType.String2=value2;
遍历枚举类型：
1:var DataType = {String1:"value1",String2:"value2"};
for(var i in DataType ){
DataType[i]; //获取value<br/>i;//下标<br/>alert(DataType[i]);}
2:var person={name:"a",age:"30",like:"eat"};
for(prop in person){
alert(prop+":"+person[prop])}//分三次弹出1:name:a 2:age:30 3:like:eat
3:var a=[2,3,45,5,67,89];for(index in a){if(5<a[index]){alert("a的"+(index+1)+"个元素"+a[index]+"大于5");}}
for  in语句不需要定义计数器，所以在遍历一个数组是，其所消耗的资源要比for语句更低，执行效率更高，建议尽量使用for in语句来遍历数组，以提高脚本的执行效率。<br/>
4:arguments参数集合
function b(){
	var a=[];
	var sum=0;
	var average=0;
	for(arg in arguments){
		if("number"===typeof arguments[arg]){
			a.push(arguments[arg]);
		}
	}//arguments.length=4,arguments[0]=3
		for(arg in a){
			sum+=a[arg];
		}<br/>
		average=sum/a.length;
		return average;
	}
	alert(b(3,5,9,"b"));//5.67
5:Object原型对象的方法
返回true和false
ObjectName.hasOwnProperty(property);//判断对象是否具有某个特定的属性
ParentObjectName.isPrototypeOf(ChildObjectName);//判断对象是否为另一个对象的原型
如： var objTest=new Object();alert(Object.isPrototypeOf(objTest));//true
ObjectName.propertyIsEnumerable(property)//判断对象的某一个属性是否可以被枚举
6:字符串对象<br/>
var a="javascript";<br/>console.log(a.chartAt(4))//s
console.log(a.charCodeAt(4))//115  输出字母s在utf-8字符集的编号
检索字符串,若失败，则返回-1：<br/>var a="inter and outer";alert(a.indexOf("and"))//6
alert(a.indexOf("and",7))///-1都只检索第一次出现的位置
document.write(str.lastIndexOf("Hello") + "<br />")//0
7:连接字符串： var a="java".concat("s","cript");alert(a)//javascript
8:提取字符串片段：var str="Hello world!"document.write(str.substring(3))//lo world!
document.write(str.substring(3,7))//lo w
document.write(str.slice(3,7))//lo w
document.write(str.sub(StartIndex,length))//<br />这几种方法推荐使用slice（）方法
9：分割字符串："2:3:4:5".split(":")	//将返回["2", "3", "4", "5"]
"|a|b|c".split("|")	//将返回["", "a", "b", "c"]
var str="How are you doing today?"document.write(str.split(" ",3))//How,are,you
10:输出时间信息：Js获取当前日期时间及其它操作:http://www.cnblogs.com/carekee/articles/1678041.html 
11:数组：
表示的是第几个元素之后添加 var a=[1,2,3,4,5];
a.splice(2,0,8,9)//1,2,8,9,3,4,5<br />
表示倒数第几个元素之前添加 a.splice(-1,0,6,7)//1,2,3,4,6,7,5
a.splice(2,2)//1,2,5
a.splice(2,2,6,7)//1,2,6,7,5
var a=[3,1,322,6,5667,4]; a.sort();alert(a);//1,3,322,4,5667,6
function all(m,n){return m-n;} a.sort(all);alert(a);//1,3,4,6,322,5667
a.reverse();alert(a);//5667,322,6,4,3,1
12:创建正则表达式实例：var a=/Patten/Tag;Tag关键字支持g,i,m三种值,分别指全局匹配、区分大小写匹以及多行匹配。如 var a=/^[a-z]$/i;
还可以 var a=new RegExp("^[a-z]$","i");
13：匹配检索： var a="javascript";b=/script/;
if(-1!==a.search(b)){alert("yes")}else alert("no")//yes
匹配替换：var a=/va/;var b="vaScript"; var c=b.replace(a,"java");alert(b)//javaScript
窗口对象：var a=prompt("请输入你的姓名","请在此输入");
if(null!==a && ""!==a){
	alert("您的姓名是"+a);
}
else alert("您没有输入你的姓名");
检测是否启用cookie功能
<br />
if(window.navigator.cookieEnabled){
	alert("支持cookie功能");
}else alert("不支持cookie功能");//navigator 浏览器对象
# 屏幕对象
window.screen.availHeight //除任务栏以外的显示屏幕高度（px）;window.screen.availWidth //除任务栏以外的显示屏幕高度（px）;
window.screen.height //显示屏幕的高度 window.screen.width //显示屏幕的高度
window.screen.color.Depth(整数)
# 定位对象
window.location.href="http://baidu.com" //从此页面跳转到百度首页
# 访问元素集合
Window.document.images.length//统计页面中图像的数量<br/>
# 获取当前文档的其他信息
alert("本页的主机地址是"+document.domain);
alert("本页的最后一次编辑的时间是"+document.lastModified);
if(null!==doucument.referrer)alert("本页的是由"+document.referrer+"跳转而来");//如果当前文档是由超链接跳转而来，则获取该超链接所在文档的URL，否则返回null<br/>
if(""!==document.title) alert("本页面的标题为"+document.title);
alert("本页的URL为"+document.URL);
# 打开和关闭web文档流
 var new_doc = document.open("text/html","replace");
    var txt = "这是新的文档";
    new_doc.write(txt);
    new_doc.close();
# Element对象
<input  id="all" type="checkbox" name="username" />
 var a =document.getElementById('all');alert(a.tagName);//INPUT
alert(a.nodeName)//INPUT
tagName只针对于XHTML和HTML中的document类型和element类型的节点有效；而nodeName还对attribute类型和text类型节点有效，所以尽量使用nodename。
# 读取关联节点信息
1：获取父节点<form action="" id="form">
<input type="number" name="text1" id="num1">
<input type="number" name="text2" id="num2"></form>
 var a =document.getElementById('num1');
 var b=a.parentNode;
  alert(b.nodeName);//FORM
 var c =document.getElementById('form');
var d=a.childNodes;
for(var i=0;i<d.length;i++)
alert(d.item(i).nodeName);
# Event对象的方法
<p>
	<button type="button" name="test" onclick="javascript:showName();"></button>
</p>
function showName()
{
	alert(event.target.name);
}//test
B/S:B指的是browser S指的是server服务器
C/S：c为client 客户端（QQ等）




