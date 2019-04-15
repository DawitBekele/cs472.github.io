"use strict";
$(function(){
    var touch = false;
    
    $(".boundary:not(.example)").mouseover( function(){
        if(touch){
         touch = false;
         $(".boundary:not(.example)").addClass("youlose");
         $("#status").text("Sorry you lost :[");
        }
    });

    $("#end").mouseover(function(){
        if(touch){
            $("#status").text("You win! :]");
            touch = false;
        } else if(touch){
         $("#status").text("Sorry you lost :[");
        }
    });

    $("#start").click(function(){
        if(!touch){
            touch = true;
            $(".boundary:not(.example)").removeClass("youlose");
            $("#status").text("Go ahead towards \"E\".");
        }
    });

    $("#maze").mouseleave(function(){
        if(touch){
            touch = false;
            $(".boundary:not(.example)").addClass("youlose");
            $("#status").text("Sorry you lost :[ ");
        }
    });

});