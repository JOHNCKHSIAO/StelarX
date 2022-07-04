
new Vue({
    el: '#booking06',
    data: {
        day:'',
        month:'',
        cabin:'',
        dest:'',
        ppl:'',
        price:'',
        seat1:'',
        service1:'',
        seat2:'',
        service2:'',
    },
    methods: {
        
    },
    computed: {

    },
    mounted() {
        this.day = localStorage.getItem('day');
        // this.day = JSON.parse(this.day);

        this.month = localStorage.getItem('month');
        // this.month = JSON.parse(this.month);

        this.ppl = localStorage.getItem('people');
        this.ppl = JSON.parse(this.ppl);

        this.cabin = localStorage.getItem('cabin');
        // this.cabin = JSON.parse(this.cabin);

        this.dest = localStorage.getItem('dest');
        this.dest = JSON.parse(this.dest);

        this.seat1 = localStorage.getItem('seat_service');
        this.seat1 = JSON.parse(this.seat1);

        },


    updated() {
        
        
    },

    
}) 

// document.getElementById('btn_next').addEventListener('click', e => {
//     document.getElementById('confirm').click();
// })