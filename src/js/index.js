// 影片滾動播放
$(document).scroll(function () {

    var topnuml = $("#index-youtube").offset().top - $(document).scrollTop();
    // var bottomnuml = window.innerHeight - (topnuml + $("#index-youtube").height());
    if ($(document).scrollTop() >  ($("#index-youtube").offset().top -  window.innerHeight)) {
        $("#index-youtube").get(0).play();
    }  
    
    else {

        $("#index-youtube").get(0).pause();
    }
console.log(topnuml)
console.log($(document).scrollTop())
// console.log(bottomnuml);
});

// 輪播動畫
const swiper = new Swiper('.swiper', {
   
    direction: 'vertical',
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
   
  });