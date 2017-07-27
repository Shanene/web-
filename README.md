## web前端学习笔记
# HTML
1.绝对长度值：pt 磅 1pt=3/4px, pc 皮咔 1pc=12磅<br/>
  相对长度值：em 当设置字体为12px时，1em=12px,如未设置时，em的值根据浏览器默认字体大小来确定。在IE浏览器默认字体为16px;em/2=ex;<br/>
# JS
1.转换类
<ul style="list-of-style:none;">
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
 

