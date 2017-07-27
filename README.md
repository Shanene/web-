## web前端学习笔记
# HTML
1.绝对长度值：pt 磅 1pt=3/4px, pc 皮咔 1pc=12磅<br/>
  相对长度值：em 当设置字体为12px时，1em=12px,如未设置时，em的值根据浏览器默认字体大小来确定。在IE浏览器默认字体为16px;em/2=ex;<br/>
# JS
1.转换类
<ul>
  <li>parseInt("65535个字节")//65535</li>
  <li>parseInt("emc65535个字节")//NaN</li>
 <li>parseInt("01011",2)//11. 8,16进制以此类推</li>
 </ul>
 Number(false)//0 <br/>
 Number(true) //1 <br/>
 Number("false") //NaN <br/>
 Number("true") //NaN <br/>
 Number(undefined) //NaN <br/>
 Number(null) //0 <br/>
 Number("3.14") //3.14 <br/>
 Number("11") //11 <br/>
 Number("203.11.12") //NaN <br/>
 Number("360buy") //NaN <br/>
 Boolean()函数：<br/>
 数据类型：
 String 为空时为false，否则为true<br/>
 Number 为数字+0，-0,0，NaN是为false，否则为true<br/>
 Null,Undefined false
 Object，Array 当其值不为null是为true，否则为false<br/>
 2：关系运算<br/>
"3.14"==3.14//true<br/>
true==1//true<br/>
false==0//true<br/>
null==undefined//true<br/>
""==0//true<br/>
3:其他运算<br/>
var a=5;alert(void(a));//undefined<br/>
js枚举类型定义：<br/>
方法 1:var DataType = {String1:value1,String2:value2 }<br/>
方法 2:var DataType = {};<br/>
DataType.String1=value1;<br/><br/>
DataType.String2=value2;<br/>
遍历枚举类型：<br/>
1:var DataType = {String1:"value1",String2:"value2"};
for(var i in DataType ){<br/>
DataType[i]; //获取value<br/>i;//下标<br/>alert(DataType[i]);}<br/>
2:var person={name:"a",age:"30",like:"eat"};<br/>
for(prop in person){<br/>
alert(prop+":"+person[prop])}//分三次弹出1:name:a 2:age:30 3:like:eat<br/>
3:var a=[2,3,45,5,67,89];for(index in a){if(5<a[index]){alert("a的"+(index+1)+"个元素"+a[index]+"大于5");}}
for  in语句不需要定义计数器，所以在遍历一个数组是，其所消耗的资源要比for语句更低，执行效率更高，建议尽量使用for in语句来遍历数组，以提高脚本的执行效率。


 
 

 

