/**
 * Created by zeping on 2015/10/22.
 */
window.onload=draw;
function draw(){

      var pcanvas=document.getElementById("previougraph");
      var pctx=pcanvas.getContext("2d");

      var ncanvas=document.getElementById("nextgraph");
      var nctx=ncanvas.getContext("2d");


    playButton();
    homeIco();
    slideUpButton();



    // this is the previougraph
    pctx.beginPath();
    pctx.moveTo(20,50);
    pctx.lineTo(60,10);
    pctx.moveTo(20,50);
    pctx.lineTo(60,90);
    pctx.strokeStyle="white";
    pctx.lineWidth=15;
    pctx.lineCap="round";
    pctx.shadowBlur=10;
    pctx.shadowColor="black";
    pctx.stroke();


    //this is the nextgraph
    nctx.beginPath();
    nctx.moveTo(80,50);
    nctx.lineTo(40,10);
    nctx.moveTo(80,50);
    nctx.lineTo(40,90);
    nctx.strokeStyle="white";
    nctx.lineWidth=15;
    nctx.lineCap="round";
    nctx.shadowBlur=10;
    nctx.shadowColor="black";
    nctx.stroke();

}

function playButton(){

    var playcanvas=document.getElementById("plays");
    var ctx=playcanvas.getContext("2d");

    ctx.clearRect(0,0,100,100);

    //this is the playcanvas
    ctx.beginPath();
    ctx.arc(50,50,50,0,(Math.PI)*2,true);
    ctx.fillStyle="white";
    ctx.fill();


    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(35,20);
    ctx.lineTo(35,80);
    ctx.closePath();
    ctx.fillStyle="black";
    ctx.fill();


}


function stopPlayButton(){
    var scanvas=document.getElementById("plays");
    var sctx=scanvas.getContext("2d");


    sctx.clearRect(0,0,100,100);
    //this is the stopPlay
    sctx.beginPath();
    sctx.arc(50,50,50,0,2*Math.PI,true);
    sctx.fillStyle="white";
    sctx.fill();

    sctx.beginPath();
    sctx.rect(30,30,40,40);
    sctx.fillStyle="black";
    sctx.fill();

}




//this is the animate1
var j = 0;
function animate1() {

    var escanvas = document.getElementById("skill1");
    var ectx = escanvas.getContext("2d");




    ectx.fillStyle="#202020";
    ectx.fillRect(0,0,200,200);


    ectx.beginPath();
    ectx.arc(75, 75, 50, 0, 2*Math.PI, false);
    ectx.strokeStyle = "white";
    ectx.lineWidth = 20;
    ectx.stroke();

    ectx.font="20px 'Microsoft YaHei'";
    ectx.fillStyle="white";
    ectx.fillText("Html",55,85);

    ectx.font="10px 'Microsoft YaHei'";
    ectx.fillStyle="white";
    ectx.fillText("90%",55,65);

    ectx.beginPath();
    ectx.arc(75, 75, 50, 0, j * Math.PI, false);
    ectx.strokeStyle = "rgb(1,77,150)";
    ectx.lineWidth = 20;
    ectx.stroke();
    if(j<1.8){
        j = j +0.1;
    }
    else{
        clearInterval(b);
        a1_1=setInterval("animate1_1()",10);
    }
}
var b=setInterval("animate1()",40);
var a1_1;

var dg1=0;
function animate1_1(){
    var object=document.getElementById("skill1");

    object.style.transform="rotate("+dg3+"deg)";
    object.style.webkitTransform="rotate("+dg1+"deg)";
    dg1++;
}



var k =0;
function animate2() {
    var escanvas = document.getElementById("skill2");
    var ectx = escanvas.getContext("2d");


    ectx.fillStyle="#202020";
    ectx.fillRect(0,0,200,200);


    ectx.beginPath();
    ectx.arc(75, 75, 50, 0, 2*Math.PI, false);
    ectx.strokeStyle = "white";
    ectx.lineWidth = 20;
    ectx.stroke();

    ectx.font="20px 'Microsoft YaHei'";
    ectx.fillStyle="white";
    ectx.fillText("Css",55,85);

    ectx.font="10px 'Microsoft YaHei'";
    ectx.fillStyle="white";
    ectx.fillText("80%",55,65);

    ectx.beginPath();
    ectx.arc(75, 75, 50, 0, j * Math.PI, false);
    ectx.strokeStyle = "rgb(220,220,0)";
    ectx.lineWidth = 20;
    ectx.stroke();
    if (k < 1.6) {
        k = k + 0.1;
    }
    else {
        clearInterval(b2);
        a2_1=setInterval("animate2_1()",10);

    }
}
var b2=setInterval("animate2()",40);
var a2_1;

var dg2=0;
function animate2_1(){
    var object=document.getElementById("skill2");

    object.style.transform="rotate("+dg3+"deg)";
    object.style.webkitTransform="rotate("+dg2+"deg)";
    dg2++;
}

var m =0;
function animate3() {
    var escanvas = document.getElementById("skill3");
    var ectx = escanvas.getContext("2d");


    ectx.fillStyle="#202020";
    ectx.fillRect(0,0,200,200);


    ectx.beginPath();
    ectx.arc(75, 75, 50, 0, 2*Math.PI, false);
    ectx.strokeStyle = "white";
    ectx.lineWidth = 20;
    ectx.stroke();

    ectx.font="20px 'Microsoft YaHei'";
    ectx.fillStyle="white";
    ectx.fillText("Js,Jq",55,85);

    ectx.font="10px 'Microsoft YaHei'";
    ectx.fillStyle="white";
    ectx.fillText("70%",55,65);

    ectx.beginPath();
    ectx.arc(75, 75, 50, 0, j * Math.PI, false);
    ectx.strokeStyle = "rgb(150,150,150)";
    ectx.lineWidth = 20;
    ectx.stroke();
    if (m < 1.4) {
        m = m + 0.1;
    }
    else {
        clearInterval(b3);
        a3_1=setInterval("animate3_1()",10);
    }
}
var b3=setInterval("animate3()",40);
var a3_1;

var dg3=0;
function animate3_1(){
    var object=document.getElementById("skill3");

    object.style.webkitTransform="rotate("+dg3+"deg)";
    object.style.transform="rotate("+dg3+"deg)";
    dg3++;
}




//this is the homepage
function homeIco(){
  var Canvas=document.getElementById("home");
    var ctx=Canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(12,15);
    ctx.lineTo(30,0);
    ctx.lineTo(48,15);
    ctx.strokeStyle="white";
    ctx.lineWidth=3;
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(30,6);
    ctx.lineTo(42,16);
    ctx.lineTo(42,30);
    ctx.lineTo(34,30);
    ctx.lineTo(34,20);
    ctx.lineTo(26,20);
    ctx.lineTo(26,30);
    ctx.lineTo(18,30);
    ctx.lineTo(18,16);
    ctx.closePath();
    ctx.fillStyle="white";
    ctx.fill();

}


function slideUpButton(){
    var canvas=document.getElementById("slideUp");
    var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(0,0,800,500);
    ctx.fillStyle="#B6B6B6";
    ctx.fill();

   ctx.beginPath();
    ctx.moveTo(380,40);
    ctx.lineTo(400,20);
    ctx.lineTo(420,40);
    ctx.lineWidth=7;
    ctx.strokeStyle="white";
    ctx.lineCap="round";
    ctx.stroke();
}


function slideDownButton(){
    var canvas=document.getElementById("slideUp");
    var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(0,0,800,500);
    ctx.fillStyle="#B6B6B6";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(380,20);
    ctx.lineTo(400,40);
    ctx.lineTo(420,20);
    ctx.lineWidth=7;
    ctx.strokeStyle="white";
    ctx.lineCap="round";
    ctx.stroke();
}

function tipBox1(){
    var canvas=document.getElementById("tipBox");
    var ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,200,32);

    ctx.beginPath();
    ctx.moveTo(8,19);
    ctx.lineTo(16,27);
    ctx.lineTo(32,11);
    ctx.strokeStyle="rgb(0,160,0)";
    ctx.lineWidth=5;
    ctx.stroke();
}

function tipBox2(){
    var canvas=document.getElementById("tipBox");
    var ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,200,32);

    ctx.beginPath();
    ctx.moveTo(8,8);
    ctx.lineTo(24,24);
    ctx.moveTo(8,24);
    ctx.lineTo(24,8);
    ctx.strokeStyle="rgb(160,0,0)";
    ctx.lineWidth=5;
    ctx.stroke();

    ctx.font="10px 'Microsoft YaHei'";
    ctx.fillStyle="rgb(160,0,0)";
    ctx.fillText("请输入正确的邮箱地址",32,20);
}


function hint1(){
    var canvas=document.getElementById("hint");
    var ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,200,32);

    ctx.beginPath();
    ctx.moveTo(8,19);
    ctx.lineTo(16,27);
    ctx.lineTo(32,11);
    ctx.strokeStyle="rgb(0,160,0)";
    ctx.lineWidth=5;
    ctx.stroke();
}


function hint2(){
    var canvas=document.getElementById("hint");
    var ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,200,32);

    ctx.beginPath();
    ctx.moveTo(8,8);
    ctx.lineTo(24,24);
    ctx.moveTo(8,24);
    ctx.lineTo(24,8);
    ctx.strokeStyle="rgb(160,0,0)";
    ctx.lineWidth=5;
    ctx.stroke();

    ctx.font="10px 'Microsoft YaHei'";
    ctx.fillStyle="rgb(160,0,0)";
    ctx.fillText("请输入正确的号码",32,20);
}



function textCheck1(){
    var canvas=document.getElementById("textHint");
    var ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,200,32);

    ctx.beginPath();
    ctx.moveTo(8,19);
    ctx.lineTo(16,27);
    ctx.lineTo(32,11);
    ctx.strokeStyle="rgb(0,160,0)";
    ctx.lineWidth=5;
    ctx.stroke();
}


function textCheck2(){
    var canvas=document.getElementById("textHint");
    var ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,200,32);

    ctx.beginPath();
    ctx.moveTo(8,8);
    ctx.lineTo(24,24);
    ctx.moveTo(8,24);
    ctx.lineTo(24,8);
    ctx.strokeStyle="rgb(160,0,0)";
    ctx.lineWidth=5;
    ctx.stroke();

    ctx.font="10px 'Microsoft YaHei'";
    ctx.fillStyle="rgb(160,0,0)";
    ctx.fillText("请输入一段文字",32,20);
}