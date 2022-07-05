
let vm = new Vue({
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
        name:'',
        lastname:'',
        coname:'',
        colastname:'',
    },
    methods: {
        service_list(index){
            let str = '';
            let temp = Object.values(this.seat)[index];
            // console.log(Object.values(this.seat)[index]);
            console.log(temp);
            for(let i=0;i<temp.length;i++){
                if(i == (temp.length-1)){
                    str +=temp[i];
                }else{
                    str += temp[i]+', ';
                }
            }
            return str;
        }
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
<<<<<<< HEAD
        this.seat = JSON.parse(localStorage.getItem('seat_service'));
        // object.keys(seat) = JSON.parse(this.seat);
        console.log(Object.values(this.seat));

=======
        this.seat = localStorage.getItem('seat_service');
        // object.keys(seat) = JSON.parse(this.seat);
>>>>>>> dev

},


    updated() {
        
        
    },

    
}) ;

// document.getElementById('btn_next').addEventListener('click', e => {
//     document.getElementById('confirm').click();
// })