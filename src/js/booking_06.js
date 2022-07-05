
new Vue({
    el: '#booking06',
    data: {
        day:'',
        month:'',
        cabin:'',
        dest:'',
        ppl:'',
        price:'',
        seat:'',
        service:'',
    },
    methods: {
        
    },
    computed: {

    },
    mounted() {
        this.lastname = localStorage.getItem('customlastName');
        this.name = localStorage.getItem('customName');

        this.colastname = localStorage.getItem('customcolastName');
        this.coname = localStorage.getItem('customcoName');

        this.day = localStorage.getItem('day');
        this.month = localStorage.getItem('month');

        this.ppl = localStorage.getItem('people');
        this.ppl = JSON.parse(this.ppl);

        this.cabin = localStorage.getItem('cabin');

        this.dest = localStorage.getItem('dest');
        this.dest = JSON.parse(this.dest);

        // object.keys(seat)
        this.seat = localStorage.getItem('seat_service');
        object.keys(seat) = JSON.parse(this.seat);

},


    updated() {
        
        
    },

    
}) 

// document.getElementById('btn_next').addEventListener('click', e => {
//     document.getElementById('confirm').click();
// })