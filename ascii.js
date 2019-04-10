window.onload=function(){

    document.getElementById("start").onclick=function(){
        alert("hello!");
    }

}
//
function animation(){
    const anim=document.getElementById("animation").onchange ;
    if(anim.selected==="Juggler"){
        $("text-area").value = JUGGLER;
    }
    else if(anim.selected==="Exercise"){
        $("text-area").value = EXERCISE;
    }
    else if(anim.selected==="Bike"){
        $("text-area").value = BIKE;

    }
    else if(anim.selected==="Dive"){
        $("text-area").value = DIVE;
    }
}
//start button clicked
function start(){
    document.getElementById("start").onclick=function(){
        alert("hello!");
    }
}