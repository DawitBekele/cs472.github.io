var timer1=null;
var timer2=null;
var index=0;
var animtype=null;
var speed=250;
window.onload=function(){
    animation();
    changefont();
    start();
    stop();
}
// animation selection
function animation() {
    let textElem = document.getElementById("text-area");
    const anim = document.getElementById("animation");
    anim.onchange = function () {
        if (anim.options[anim.selectedIndex].text==="Juggler"){
            textElem.value = JUGGLER;
            animtype=JUGGLER;
        } else if (anim.options[anim.selectedIndex].text === "Exercise") {
            textElem.value = EXERCISE;
            animtype=EXERCISE;
        } else if (anim.options[anim.selectedIndex].text === "Bike") {
            textElem.value = BIKE;
            animtype=BIKE;
        } else if (anim.options[anim.selectedIndex].text === "Dive") {
            textElem.value = DIVE;
            animtype=DIVE;
        }
    }
}
//start button clicked
function start() {
    document.getElementById("start").onclick = function () {
        const animation = animtype.split("=====\n");
         const iterateindex=animation.length-1;//the length of the frames after changed to array
        document.getElementById("start").disabled=true;
        document.getElementById("stop").disabled=false;

        timer2 = setInterval(function (){
            document.getElementById("text-area").value = animation[index];
            if (index === iterateindex) {// loop through the array
                index = 0;
            } else {
                index++;
            }
        }, 250);

        document.getElementById("turbo").onchange=function(){
            let  turbo1=document.getElementById("turbo");
            if(turbo1.checked){
                clearInterval(timer2);
                timer1 = setInterval(function () {
                    document.getElementById("text-area").value = animation[index];
                    if (index === iterateindex) {// loop through the array
                        index = 0;
                    } else {
                        index++;
                    }
                }, 50);
            }
            else{
                clearInterval(timer1);
                timer2 = setInterval(function (){
                    document.getElementById("text-area").value = animation[index];
                    if (index === iterateindex) {// loop through the array
                        index = 0;
                    } else {
                        index++;
                    }
                }, 250);

            }
        };
    }
}
//stop function
function stop(){
        document.getElementById("stop").onclick=function(){
        clearInterval(timer1);
        clearInterval(timer2);
            document.getElementById("text-area").value = animtype;
            document.getElementById("stop").disabled=true;
            document.getElementById("start").disabled=false;
        };
    }
//text area font sizing
function changefont(){
    let textElem = document.getElementById("text-area");
    const fontsize = document.getElementById("fontsize");
    fontsize.onchange = function (){
            textElem.style.fontSize =fontsize.value;
    }
}
