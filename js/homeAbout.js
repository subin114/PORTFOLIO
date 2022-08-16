$(function () {
    $(".about_icon > li").mouseover(function () {
        $(this).children(".burble").stop().fadeIn();
    }).mouseout(function () {
        $(".burble").stop().hide();
    });
})