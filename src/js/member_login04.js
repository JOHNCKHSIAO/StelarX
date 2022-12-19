$(document).ready(function () {
    $('.mileCardUp').click(function () {
        $(this).parent().find('.mileCardDown').slideToggle(200);
        $(this).parent().siblings().find('.mileCardDown').slideUp(200)
        $(".g-progress").css("width", "300");   //進度條動畫

    })


});
$(window).scroll(function () {
    var scroll = $(this).scrollTop()
    if (scroll >= $('.mainMile').position().top - 100) {
        $('.bgsvg').css("height", 700); //線條動畫

    }

});
