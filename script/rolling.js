var speed=13;

var tabLeft=document.getElementById("demoLeft");
var tab1=document.getElementById("marquee_01");
var tab2=document.getElementById("marquee_02");
tab2.innerHTML=tab1.innerHTML;

function Marquee1(){
if(tabLeft.scrollLeft>=tab2.offsetWidth)
tabLeft.scrollLeft-=tab1.offsetWidth
else{
tabLeft.scrollLeft++;
}
}

var MyMar=setInterval(Marquee1,speed);

tabLeft.onmouseover=function() {clearInterval(MyMar)};
tabLeft.onmouseout=function() {MyMar=setInterval(Marquee1,speed)};