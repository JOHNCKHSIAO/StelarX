vm = new Vue({
    el:'#ppl',
    data:{
        number:0,
       
    },
    methods: {
        minus(){
            if(this.number>0){
                this.number--
            }
        },
        add(){
            if(this.number<8){
                this.number++
            }
        },
        
    }
})

new Vue({
    el: '#app',
    data: {
        message: '123',

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
        }
    },
    methods: {
        setMessage(e) {
            this.message = e.target.value
        },
    },
    computed: {

    },

    
}) 