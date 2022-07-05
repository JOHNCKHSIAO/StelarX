new Vue({
    el: '#login05', //

    data: {
        member_login05: [],
    },
    methods: {},
    compute: {},
    watch: {},
    created() {
        let url = './PHP/member_login05.php'; //
        fetch(url)
            .then(response => response.json())
            // .then(text => console.log(text))
            .then(text => this.member_login05 = text); //
    },
    mounted() {},
    updated() {
        // //開關動畫
        // $('.mileCardUp').click(function (e) {
        //     $(e.target).parent().find('.mileCardDown').slideToggle(200);
        //     $(e.target).parent().siblings().find('.mileCardDown').slideUp(200)
        

        // })
       

    },
})
