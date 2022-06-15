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