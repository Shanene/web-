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
 数据类型$nbsp;结果<br/>
 String 为空时为false，否则为true<br/>
 Number 为数字+0，-0,0，NaN是为false，否则为true<br/>
 Null,Undefined false
 Object，Array 当其值不为null是为true，否则为false<br/>
 

