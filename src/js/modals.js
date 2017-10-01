/**********************
    POP UP MODAL #1
**********************/

$(document).ready(function(){
    $("#button-popup").click(function(){
        $(".window-popup").fadeIn(1000);
    });

    $(".window-popup").click(function(){
        $(".window-popup").fadeOut();
    });

});