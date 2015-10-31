/**
 * Created by zeping on 2015/6/11.
 */

$(document).ready(function(){
    $("html,body").stop(true,false).animate({
        scrollTop:"0px"},100);
    $("#rs").click(function(){
        $("html,body").stop(true,false).animate({
            scrollTop:"0px"},1000);
    });
    $("#pt").click(function(){
        $("html,body").stop(true,false).animate({scrollTop:"800px"},1000);
    });
    $("#ct").click(function(){
        $("html,body").stop(true,false).animate({scrollTop:"1600px"},1000);
    });

    $(".bottommenu li").click(function() {
        if($(this).attr("id")!=="rs") {
            $(".active").removeClass("active");
            $(this).addClass("active");
            $("#rs").removeClass("activehome")
        }
        else{
            $(".active").removeClass("active");
            $(this).addClass("activehome");
        }

    });
    $("#gallery ul,#plays").mouseover(function(){
        $("#gallery a #plays").stop(true,false).fadeIn(500);
    }).mouseleave(function(){
        $("#gallery a #plays").stop(true,false).fadeOut(500);
    });


    $("#next #nextgraph").click(function () {
           x=$(".show").attr("id");
           if(x==="last"){
               alert("已是最后一张，跳转到第一张");
               $(".show").removeClass("show");
               $("#first").addClass("show");
           }
           else{
               $(".show").removeClass("show").next().addClass("show");
           }


       });


    $("#previous #previougraph").click(function(){
       y=$(".show").attr("id");
        if(y==="first"){
            alert("当前是第一张，跳转到最后一张");
            $(".show").removeClass("show");
            $("#last").addClass("show");
        }
           else
            $(".show").removeClass("show").prev().addClass("show");



    });


    $("#plays").click(startFunction);

var isSlideUp=true;
    $("#slideUp").click(function(){
        if(isSlideUp){
            $("#skill").animate({height:"300px"});

            slideDownButton();
            clearInterval(a1_1);
            clearInterval(a2_1);
            clearInterval(a3_1);
            $("#skill canvas").css({"webkitTransform":"rotate(0deg)","transform":"rotate(0deg)"});
            isSlideUp=false;
        }else{
            $("#skill").animate({height:"400px"});
            slideUpButton();
            a1_1=setInterval("animate1_1()",10);
            a2_1=setInterval("animate2_1()",10);
            a3_1=setInterval("animate3_1()",10);
            isSlideUp=true;
        }

    });

    $("#phone").blur(verifyPhone);
    $("#textBox").blur(verifyText);
    $("#emailBox").blur(verifyEmail);
    $("#submitButton").click(verify);

});







//var zoom=function(){
//    $("#slidefull").show();
//    $(".showfull").removeClass("showfull");
//    var startId = $(".show").attr("rel");
//    $("#" + startId).addClass("showfull");
//}


var slideFunction=function(){
    var z=$(".show").attr("id");
    if(z==="last"){
        $(".show").fadeOut("slow",function(){
            $(this).removeClass("show");
        });
        $("#first").fadeIn("slow").addClass("show");
    }
    else {
        $(".show").fadeOut("slow", function(){
            $(this).removeClass("show");
        }).next().fadeIn("slow").addClass("show");
    }
};

var a;
var isPlay=true;
var startFunction= function(){

    if(isPlay){
        a=setInterval(slideFunction,2000);
        stopPlayButton();
        isPlay=false;
    }
    else{
       clearInterval(a);
        playButton();
        isPlay=true;
    }
};



function verifyEmail(){
    var obj=document.getElementById("emailBox");
    var email=obj.value;
    var length=email.length;
    var last4=email.substring(length-4,length);
    var j=0;

    if(length===0){
        tipBox2();
    }
    else if(last4===".com"){
        for(var i=0;i<length;i++){
           if( email[i]==="@") {
               j++;
           }
        }
        if(j===1){
            tipBox1();
            return true;

        }
        else{
            tipBox2();
            return false;
        }

    }
    else{
        tipBox2();
        return false;

    }

}



function createComment(){
    var email=document.getElementById("emailBox");
    var emailAddress=email.value;

    var phoneBlank=document.getElementById("phone");
    var phoneNumber=phoneBlank.value;

    var textBlank=document.getElementById("textBox");
    var textContent=textBlank.value;

    var node=document.createElement("div");
    var nodeChild1=document.createElement("div");
    var nodeChild2=document.createElement("article");
    var nodeChild3=document.createElement("div");
    var  nodeGrandChild1=document.createTextNode("邮箱:"+emailAddress+"   电话:"+phoneNumber);
    var  nodeGrandChild2=document.createTextNode(textContent);
    var nodeGrandChild3=document.createElement("input");

    node.setAttribute("class","createComment");
    nodeChild1.setAttribute("class","commentTop");
    nodeChild3.setAttribute("class","commentBottom");
    nodeGrandChild3.setAttribute("type","button");
    nodeGrandChild3.setAttribute("value","删除");
    nodeGrandChild3.setAttribute("class","deleteButton");

    node.appendChild(nodeChild1);
    node.appendChild(nodeChild2);
    node.appendChild(nodeChild3);
    nodeChild1.appendChild(nodeGrandChild1);
    nodeChild2.appendChild(nodeGrandChild2);
    nodeChild3.appendChild(nodeGrandChild3);
    document.getElementById("comment").appendChild(node);


    nodeChild3.onclick=function(){
        var isdelete=confirm("确定要删除吗？");
        if(isdelete){
            node.parentNode.removeChild(node);
        }

    }
}


function verifyPhone(){
    var object=document.getElementById("phone");
    var phone=object.value;

    if(phone.length==0){
        hint2();
        return false;
    }
    for(i=0;i<phone.length;i++){
        if(isNaN(phone[i]))
        {
            hint2();
            return false;
        }

    }
    hint1();
    return true;
}

function verifyText(){
    var object=document.getElementById("textBox");

    if( object.value.length==0){
        textCheck2();
        return false;
    }
    else{
        textCheck1();
        return true;
    }

}


function verify(){
    var i=verifyEmail();
    var j=verifyPhone();
    var k=verifyText();
    if(i&&j&&k){
        createComment();
        alert("发送成功");
    }
    else{
        alert("请仔细检查您的信息");
    }

}