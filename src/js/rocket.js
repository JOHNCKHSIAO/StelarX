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