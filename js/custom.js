// Drop down toggle
$(document).ready(function(){
    $(".down-arrow1").click(function(){
        $(".hidden-description1").toggle();
    });
    $(".down-arrow2").click(function(){
        $(".hidden-description2").toggle();
    });
    $(".down-arrow3").click(function(){
        $(".hidden-description3").toggle();
    });
    $(".down-arrow4").click(function(){
        $(".hidden-description4").toggle();
    });
    $(".down-arrow5").click(function(){
        $(".hidden-description5").toggle();
    });
    $(".down-arrow6").click(function(){
        $(".hidden-description6").toggle();
    });
    $(".down-arrow7").click(function(){
        $(".hidden-description7").toggle();
    });

});

//Add animate and initialize wow
$(document).ready(function(){
    'use strict'
    new WOW().init();
})