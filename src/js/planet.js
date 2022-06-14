new Vue({
    el: '#main',

    data: {     // 變數放這裡！
        names: ['MARS', 'MERCURY', 'VENUS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'],
        classNum: 3,           

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
        }
    },

})