new Vue({
    el: '#main',

    data: {     // 變數放這裡！
        names: ['MARS', 'MERCURY', 'VENUS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'],
        classNum: 3,           
        // planetname:['火星','水星',]
    },

    methods: {
        rotate(index){
            this.classNum = index;
        },
    },

    computed: {
        classChange(){
            return `ring-display -current-${this.classNum}`;
        },
        planetImg(){
            return `./images/planet/${this.names[this.classNum]}.png`;
        },
        // planetInfo(){
        //     return
        // }
    },

})

// activity sliders
const activityCarousel = document.querySelector('.activity-sliders');
const carouselslides = document.querySelectorAll('.activity-slider');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselslides[0].clientWidth;

activityCarousel.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//button Listeners

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselslides.length -1) return;
    activityCarousel.style.transition = "transform 0.4s ease-in-out"
    counter++;
    activityCarousel.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0)return;
    activityCarousel.style.transition = "transform 0.4s ease-in-out"
    counter--;
    activityCarousel.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

activityCarousel.addEventListener('transitionend', ()=>{
    if(carouselslides[counter].id === 'lastClone'){
        activityCarousel.style.transition = "none";
        counter = carouselslides.length -2;
        activityCarousel.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if(carouselslides[counter].id === 'firstClone'){
        activityCarousel.style.transition = "none";
        counter = carouselslides.length -counter;
        activityCarousel.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});