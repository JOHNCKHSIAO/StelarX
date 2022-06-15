// 影片滾動播放
// $(document).scroll(function () {

//     var topnuml = $("#index-youtube").offset().top - $(document).scrollTop();
//     // var bottomnuml = window.innerHeight - (topnuml + $("#index-youtube").height());
//     if ($(document).scrollTop() >  ($("#index-youtube").offset().top -  window.innerHeight)) {
//         $("#index-youtube").get(0).play();
//     }  
    
//     else {

//         $("#index-youtube").get(0).pause();
//     }
// console.log(topnuml)
// console.log($(document).scrollTop())
// // console.log(bottomnuml);
// });


// 輪播動畫
var swiper = new Swiper(".mySwiper", {
  
  slidesPerView: 4,// 頁面放幾張卡片
  spaceBetween: 20,// 卡片相隔間距
  slidesPerGroup: 1,// 一次卡點幾張
  loop: true,
 
  // loopFillGroupWithBlank: true,
 
 
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});