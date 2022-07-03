
new Vue({
    el: '#booking03',
    data: {
        message: '123',
        number:0,
        cabin:'',
        seat_name:{
            one_a_active: '1A',
            one_b_active: '1B',
            one_c_active: '1C',
            one_d_active: '1D',
            one_e_active: '1E',
            one_f_active: '1F',
            one_g_active: '1G',
            one_h_active: '1H',
            one_2a_active: '2A',
            one_2b_active: '2B',
            one_2c_active: '2C',
            one_2d_active: '2D',
            one_2e_active: '2E',
            one_2f_active: '2F',
            one_2g_active: '2G',
            one_2h_active: '2H',
        },

        seat: {
            one_a_active: false,
            one_b_active: false,
            one_c_active: false,
            one_d_active: false,
            one_e_active: false,
            one_f_active: false,
            one_g_active: false,
            one_h_active: false,
            one_2a_active: false,
            one_2b_active: false,
            one_2c_active: false,
            one_2d_active: false,
            one_2e_active: false,
            one_2f_active: false,
            one_2g_active: false,
            one_2h_active: false,
        },
    },
    methods: {
        setMessage(e) {
            this.message = e.target.value
        },
        minus(){
            if(this.number>0){
                this.number--
                localStorage.setItem('people', this.number);
            }
        },
        add(){
            if(this.number<8){
                this.number++
                localStorage.setItem('people', this.number);
            }
        },
        choose(e){
            
            if(!this.seat[e.target.dataset.seat]){
                let choose_seat = 0;
                for(let item in this.seat){
                    if(this.seat[item]){
                        choose_seat += 1;
                    }
                    
                }
                if(choose_seat == this.number){
                    alert('已達上限人數');
                }else{
    
                    this.seat[e.target.dataset.seat] = !this.seat[e.target.dataset.seat];
                }
            }else{
                this.seat[e.target.dataset.seat] = false;
            }
        },
        confirm(e){
            // e.preventDefault();
            // console.log('object');
            let service_list = {};
            let booking_customize = document.getElementsByClassName('booking-customize');
            for(let i=0; i<booking_customize.length; i++){
                let seat = booking_customize[i].dataset.seat;
                let check_box = booking_customize[i].querySelectorAll('input');

                let temp = [];
                for(let j=0; j<check_box.length; j++){

                    if(check_box[j].checked){
                        // console.log(check_box[j].value);
                        temp.push(check_box[j].value);
                    }
                }

                service_list[seat] = temp;
            }
            // console.log(service_list);
            localStorage.setItem('seat_service',JSON.stringify(service_list));
        }
    },
    computed: {

    },
    mounted() {
        if(localStorage.getItem('people')){
            this.number = localStorage.getItem('people');

        }

        if(localStorage.getItem('cabin')){
            this.cabin = localStorage.getItem('cabin');

        }



    },
    updated() {
        
        
    },

    
}) 

document.getElementById('btn_next').addEventListener('click', e => {
    document.getElementById('confirm').click();
})