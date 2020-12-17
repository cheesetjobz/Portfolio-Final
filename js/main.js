/* Funktion til smooth scroll */
$(function() {
    /* Så menuen præcis dækker hero */
    var offset = 0;
    var scrollTime = 800;

    $('a[href^="#"]').click(function() {
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top + offset 
        }, scrollTime);
        return false;
    });
});

/* Menu transition on scroll */
$(document).scroll(function() {
    
    var $win = $(window);
    var winH = $win.height() - 125;   // Get the viewport height and minus menu height.

  var scrollTop = $(window).scrollTop();
        if (scrollTop > winH) {
            $('#menu').addClass("top-menu");
        }
        else{
            $('#menu').removeClass("top-menu");
        }
});



/* Burger menu */
$(document).ready(function(){
    $("#burger-menu").click(function(){
        $("#menu").toggleClass("active-menu");
        $(this).toggleClass("open-burger");
        $("html").toggleClass("no-scroll");
    })
    
    
    $("#menu.active-menu a").click(function(){
        $("#menu").toggleClass("active-menu");
        $("#burger-menu").toggleClass("open-burger");
        $("html").toggleClass("no-scroll");
    })
    
    
})