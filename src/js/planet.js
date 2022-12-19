new Vue({
    el: '#main',

    data: {     // 變數放這裡！
        names: ['MARS', 'MERCURY', 'VENUS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'],
        classNum: 3,
        h1:['火星', '水星', '金星', '木星', '土星', '天王星', '海王星'],
        h5:['MARS', 'MERCURY', 'VENUS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'],
        h4:['距離地球 5,400 萬公里', '距離地球 12,600 萬公里', '距離地球 9,600 萬公里', '距離地球 7,400 萬公里', '距離地球 9,200 萬公里', '距離地球 11,300 萬公里', '距離地球 13,300 萬公里'],
        h6:['坐落於太陽系的黃金地段，現為最繁華的商業之星。大量的金融貿易、科技、文化與最完善的交通、通信等現代化設施，為火星軟體園區最重要之奠基石。', '神秘且未知的行星，傳說歐若拉女神在此誕生，根據水星遺址記載，長長的綠光劃過星際，女神的恩惠會降臨在目睹星光之人，賜予幸福。水星具有特殊的磁極變化使得極光活動頻繁，又因無光害與遮蔽物，成為朝聖者們最嚮往的觀賞地點。', '根據西元1990 年代的探測顯示，金星表面富有大量的礦產與頻繁的火山運動，經過長年的開發與建設，現已成為最具規模性的火山探險園區，並被列為銀河系的 8 大旅遊勝地之一。', '原名 Jupiter 發音相近於邱比特，亦被稱為「邱比特之星」，由於特殊的高壓環境，使木星擁有全銀河獨特的「鑽石海」與「鑽石雨」奇景，進而成為約會首選勝地。', '坐擁顯著的行星環、龐大的腹地與筆直的航道，近年來已成為專業太空飛行選手最熱愛的競賽場地，並於2045年成為奧林匹克運動官方指定賽道，每年有將近200場賽事於這裡舉行，並吸引超過2億人次觀看。為提倡運動賽事與促進觀光，同時也提供一般旅客進行飛行船競賽體驗。', '有完善的「極地探險園區」與純白無暇的「冰雪世界」，在探索客進行極地探勘的同時，也能提供滑雪、冰川溜冰等各式雪上活動，滿足各年齡層的休閒娛樂，是絕佳的旅遊避暑勝地。', '這是一顆由37個隕石海-約5,487 個隕石島所組成的海島星球，同時被銀河知名旅遊雜誌譽為太陽系最後一片淨土，在這裡可以享受溫暖陽光、細緻的隕石細沙與各式星際水域活動，也可從空中俯瞰這星羅棋佈的隕石島嶼，同時兼具陸海空三種極致體驗。'],           

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