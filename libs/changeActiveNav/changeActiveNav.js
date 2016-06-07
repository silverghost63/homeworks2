var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.navigation__link--active").removeClass("navigation__link--active");
            $(this).addClass("navigation__link--active");
        } else {
            $(this).removeClass("navigation__link--active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $(".top-menu a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.navigation__link--active").removeClass("navigation__link--active");
        $(this).addClass("navigation__link--active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});