var t = 0;
var timt = setInterval(tim, 1000);
function tim(){
t = t+1;
document.getElementById("time").value=t;
}
/* random appearance of food  */
function food(){
setInterval(function(){
var top = Math.floor(Math.random() * 35);
var left = Math.floor(Math.random() * 60);
document.getElementById("fol").innerText="food-height = " + top;
document.getElementById("fot").innerText="food-width = " + left;
var food = document.getElementById("food").style;
food.top=top+"vh";food.left=left+"vw";
document.getElementById("foodi").value=top;
document.getElementById("foodw").value=left;
},5000)}
var s = 0;
setInterval(sco, 600);
function sco(){
var hei=document.getElementById("foodi").value;
var wid=document.getElementById("foodw").value;
var h = a - hei;
var w = r - wid;
document.getElementById("foodt").innerText="for height = "+ h;
document.getElementById("foodl").innerText="for width = "+ w ;

 if((h < 5 && h > -5) && (w > -5 && w < 5))
{s=s+1;
document.getElementById("score").value=s};
}

/* movement of the snake */

/* for the default movement */

/*  var interval = setInterval(move, 100);/*  */
var a = 30;
var r = 0;
var sped = 100;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;

function move(){
var butu=document.getElementById("up").style;
var butr=document.getElementById("rb").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
if(butr.backgroundColor=="#306B35"|| butd.backgroundColor=="#306B35" || butl.backgroundColor=="#306B35"){
 butu.backgroundColor="white";
}
else{;
var snake = document.getElementById("snake").style;
a = a-1;
r = r;
document.getElementById("demo").innerText="height =" + a; snake.top=a+"vh";
document.getElementById("be").innerText="";
   }}
  /* to increase the speed */
  
  function sp(){
 setInterval(function(){
     sped = sped - 1;
document.getElementById("spd").value=sped;
}
,100)}
    /* to move right */
function demo(){
alert("start");
/*  setInterval(function(){
var speed = document.getElementById("spd").value;
document.getElementById("ospd").value=speed;
},100)/*  */
var speed = 100;
var intervalR = setInterval(moveR,speed);
var intervalD = setInterval(moveD,speed);
var intervalL = setInterval(moveL, speed);
var intervalU = setInterval(moveU, speed);

}
function delay(){
    setTimeout(right , 10);
}
function right(){
var snake = document.getElementById("snake").style;
      snake.transform="rotate(90deg)";
var butr=document.getElementById("rb").style;
var butu=document.getElementById("up").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
butr.backgroundColor="#3A6B35";
butu.backgroundColor="white";
butd.backgroundColor="white";
butl.backgroundColor="white";
}
function moveR(){
var butu=document.getElementById("up").style;
var butr=document.getElementById("rb").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
var snake = document.getElementById("snake").style;
if(butd.backgroundColor=="#3A6B35"|| butu.backgroundColor=="#3A6B35" || butl.backgroundColor=="#3A6B35"  ||  snake.transform!=="rotate(90deg)" ){
 butr.backgroundColor="white";
}
else{
var snake = document.getElementById("snake").style;
    r = r+1;
document.getElementById("demo1").innerText="width =" + r;        snake.left=r+"vw";
document.getElementById("be").innerText="";
}}
  
     /* to move down */
  
function down(){

 var snake = document.getElementById("snake").style;
      snake.transform="rotate(180deg)";
var butr=document.getElementById("rb").style;
var butu=document.getElementById("up").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
butd.backgroundColor="#3A6B35";
butu.backgroundColor="white";
butr.backgroundColor="white";
butl.backgroundColor="white";
}
      function moveD(){
var butu=document.getElementById("up").style;
var butr=document.getElementById("rb").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
var snake = document.getElementById("snake").style;
if(butr.backgroundColor=="#3A6B35"|| butu.backgroundColor=="#3A6B35" || butl.backgroundColor=="#3A6B35" || snake.transform!=="rotate(180deg)"){
 butd.backgroundColor="white";
}
else{
 var snake = document.getElementById("snake").style;
    a = a+1;
document.getElementById("demo").innerText="height =" + a;snake.top=a+"vh";
}}
 
        /* to move left */
  
function lft(){
var snake = document.getElementById("snake").style;
    snake.transform="rotate(-90deg)";
    var butr=document.getElementById("rb").style;
var butu=document.getElementById("up").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
butl.backgroundColor="#3A6B35";
butu.backgroundColor="white";
butr.backgroundColor="white";
butd.backgroundColor="white";
}
      function moveL(){
var butu=document.getElementById("up").style;
var butr=document.getElementById("rb").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
var snake = document.getElementById("snake").style;
if(butr.backgroundColor=="#3A6B35"|| butu.backgroundColor=="#3A6B35" || butd.backgroundColor=="#3A6B35" || snake.transform!=="rotate(-90deg)"){
 butl.backgroundColor="white";
}    
 else{
 var snake = document.getElementById("snake").style;
    r = r-1;
document.getElementById("demo1").innerText="width =" + r;snake.left=r+"vw";
}
}
      
      /* to move up */
function up(){
var snake = document.getElementById("snake").style;
      snake.transform="rotate(0deg)";
var butr=document.getElementById("rb").style;
var butu=document.getElementById("up").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
butr.backgroundColor="white";
butu.backgroundColor="#3A6B35";
butd.backgroundColor="white";
butl.backgroundColor="white";
}
function moveU(){
var butu=document.getElementById("up").style;
var butr=document.getElementById("rb").style;
var butd=document.getElementById("do").style;
var butl=document.getElementById("le").style;
var snake = document.getElementById("snake").style;
if(butd.backgroundColor=="#3A6B35"|| butr.backgroundColor=="#3A6B35" || butl.backgroundColor=="#3A6B35"  ||  snake.transform!=="rotate(0deg)" ){
 butu.backgroundColor="white";
}
else{
var snake = document.getElementById("snake").style;
    a = a-1;
document.getElementById("demo").innerText="height =" + a;        snake.top=a+"vh";
document.getElementById("be").innerText="";
}}
       /* to lose */
       
 function lose(){
var lose2 = setInterval(lose1,100);}
 function lose1(){ 
 if(a <= -1 || a >= 36 || r <= -2 || r >= 64 ){
 var x = document.getElementById("score").value;
var y =document.getElementById("time").value
 document.getElementById("sc").innerText=x;
 document.getElementById("st").innerText=y;
 document.getElementById("ori").style.display="none";
 document.getElementById("sb").style.display="block";
 clearInterval(timt);
 } 
 }
