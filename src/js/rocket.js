

// <!-------------- 數字跳動 -------------->

$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});


// let valueDisplays = document.querySelectorAll(".num")
// let interval = 50;

// valueDisplays.forEach((valueDisplays) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplays.getAttribute("data-val"));

//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function(){
//         startValue += 1 ;
//         valueDisplays.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });




// <!-------------- 火箭艙_觸控面板 -------------->

let switch1 = document.querySelector("#toggle-switch1");
let pop1 = document.querySelector("#pop1");
let switch2 = document.querySelector("#toggle-switch2");
let pop2 = document.querySelector("#pop2");
let switch3 = document.querySelector("#toggle-switch3");
let pop3 = document.querySelector("#pop3");
let switch4 = document.querySelector("#toggle-switch4");
let pop4 = document.querySelector("#pop4");


switch1.addEventListener("mouseover",function(e){
    pop1.classList.toggle("pop-active");
})
switch1.addEventListener("mouseout",function(e){
    pop1.classList.toggle("pop-active");
})


switch2.addEventListener("mouseover",function(e){
    pop2.classList.toggle("pop-active");
})
switch2.addEventListener("mouseout",function(e){
    pop2.classList.toggle("pop-active");
})


switch3.addEventListener("mouseover",function(e){
    pop3.classList.toggle("pop-active");
})
switch3.addEventListener("mouseout",function(e){
    pop3.classList.toggle("pop-active");
})


switch4.addEventListener("mouseover",function(e){
    pop4.classList.toggle("pop-active");
})
switch4.addEventListener("mouseout",function(e){
    pop4.classList.toggle("pop-active");
})




// <!--------------------------- 火箭_加值輪播 -------------------------->

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("event-slides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}