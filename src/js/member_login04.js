$(document).ready(function () {
    $('.mileCardUp').click(function () {
        $(this).parent().find('.mileCardDown').slideToggle(200);
        $(this).parent().siblings().find('.mileCardDown').slideUp(200)
        $(".g-progress").css("width","300");
    })
  
 

  


});