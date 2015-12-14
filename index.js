

$(window).load(function(){
$('img.fade').hide();
var dg_H = $(window).height();
var dg_W = $(window).width();
$('#wrap').css({'height':dg_H,'width':dg_W});
function anim() {
    $("#wrap img.fade").first().appendTo('#wrap').fadeOut(1500);
    $("#wrap img").first().fadeIn(1500);
    setTimeout(anim, 4000);
}
anim();})
$(window).resize(function(){window.location.href=window.location.href})

 //keep getting message: "uncaught reference error". Spent hours tryihng to figure out why this wasn't working. Only to realize it was the placement of my js script tags. I needed to place my script above:<script src="index.js"...

//playing with numbers orignally top down: 1500, 1500, 3000.

// found this article to help me achieve this: http://www.css-jquery-design.com/2013/05/jquery-animate-full-page-multiple-background-image-fade-in-out-effect/
