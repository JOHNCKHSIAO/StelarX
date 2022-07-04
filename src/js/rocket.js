

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




// <!--------------------------- scroll -------------------------->


var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();

const controller = new ScrollMagic.Controller();



tl.from("#fv-main-bg", 1, {x:0, opacity: 0});
tl.from("#fv-main-h5", 2, {x:0, opacity: 0}, "=-1");


tl2.from(".about-aether", 1, {x:0, opacity: 0});
tl2.from("#about-aether-span", 1, {width:0});
tl2.from("#about-aether-h6", 1, {x:-100, opacity: 0}, "=-1");


tl3.from(".info-left", 1, {opacity: 0 ,scale: 1});
tl3.from(".info-right", 1, {x:50, opacity: 0}, "=-1");
tl3.from("#info-data-diameter", 1.5, {opacity: 0 ,scale: 1});
tl3.from("#info-data-weight", 1.5, {x:200, opacity: 0}, "=-1.5");
tl3.from("#info-data-height", 1.5, {x:-200, opacity: 0}, "=-1.5");


tl4.from(".rocket-left", 1, {x:200,opacity: 0});
tl4.from(".eqpt-top", 1, {x:-200, opacity: 0}, "=-1");
// tl4.from("#eqpt-top-img", 1, {x:-200, opacity: 0}, "=-1");
// tl4.from("#eqpt-top-h4", 1, {x:-200, opacity: 0}, "=-1");
// tl4.from("#eqpt-top-detail", 1, {x:-200, opacity: 0}, "=-1");
// tl4.from("#eqpt-top-h6", 1, {x:-200, opacity: 0}, "=-1");


tl5.from(".eqpt-bottom", 1, {x:-100, opacity: 0}, "=-1");
// tl5.from("#eqpt-bottom-img", 1, {x:-100, opacity: 0});
// tl5.from("#eqpt-bottom-h4", 1, {x:-100, opacity: 0}, "=-1");
// tl5.from("#eqpt-bottom-h6", 1, {x:-100, opacity: 0}, "=-1");
// tl5.from("#eqpt-bottom-detail", 1, {x:-100, opacity: 0}, "=-1");


tl6.from(".bottom-bg", 1, {width:0});
tl6.from(".intro-bottom-up", 1, {x:0, opacity: 0});
tl6.from(".intro-bottom-down", 1, {x:0, opacity: 0}, "=-.3");


tl7.from(".sep-line", 1, {width:0});




const scene = new ScrollMagic.Scene({
    triggerElement: ".fv-main",
    // triggerHook: "onLeave",
    // duration: "100%"
})
    // .setPin(".main-bg")
    .setTween(tl)
        .addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: ".rocket-about"
})
    .setTween(tl2)
        .addTo(controller);


const scene3 = new ScrollMagic.Scene({
    triggerElement: ".engine-info"
})
    .setTween(tl3)
        .addTo(controller);


const scene4 = new ScrollMagic.Scene({
    triggerElement: ".rocket-rocket"
})
    .setTween(tl4)
        .addTo(controller);


const scene5 = new ScrollMagic.Scene({
    triggerElement: ".eqpt-bottom"
})
    .setTween(tl5)
        .addTo(controller);


const scene6 = new ScrollMagic.Scene({
    triggerElement: ".cabin-intro-bottom"
})
    .setTween(tl6)
        .addTo(controller);


const scene7 = new ScrollMagic.Scene({
    triggerElement: ".rocket-bodyguard"
})
    .setTween(tl7)
        .addTo(controller);



function updatePercentage(){
    tl.progress();
}
