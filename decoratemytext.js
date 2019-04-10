 var timer=null;
window.onload=function(){
    /*document.getElementById("btnForDecoration").onclick=function () {
         alert("hello world!");
    };*/
    //document.getElementById("btnForDecoration").onclick=function(){

        // var size = parseInt(document.getElementById("textarea").;
        // size +=2;
        // document.getElementById("textarea").style.fontSize = size+"px";
    //     var x= parseInt(document.getElementById("textarea").style.fontSize);
    //      x+=2;
    //     document.getElementById("textarea").style.fontSize=x+"pt";
    // };
 document.getElementById("checkbox").onchange=function() {
    var checkbox = document.getElementById("checkbox");
     let textarea=document.getElementById("textarea");
     if (checkbox.checked){
         textarea.className="decorated";
         // textarea.style.fontWeight = "bold";
         // textarea.style.color="green";
         // textarea.style.textDecoration="underline";

     } else {
         textarea.className="undecorated";
         // textarea.style.fontWeight = "normal";
         // textarea.style.color="black";
         // textarea.style.textDecoration="none";
     }

 };

     document.getElementById("btnForDecoration").onclick =function () {
         if (timer == null){
             timer = setInterval(function () {
                 // called each time the timer goes off
                 var x= parseInt(document.getElementById("textarea").style.fontSize);
                 x+=2;
                 document.getElementById("textarea").style.fontSize=x+"pt"},500); }
             else {
                 clearInterval(timer); timer = null;
             }
             }
         };



