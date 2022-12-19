        // const url = './php/information.php';
        // fetch(url)
        //     .then(response => response.json())
        //     .then(text => console.log(text));

        new Vue({
            el: '#shopping_01', //

            data: {
                shopping_1_list: [], //
            },
            methods: {},
            compute: {},
            watch: {},
            created() {
                let url = './PHP/commodity.php'; //
                fetch(url)
                    .then(response => response.json())
                    .then(text => this.shopping_1_list = text); //
            },
            mounted(){},
            destroyed(){},
        })

        new Vue({
            el:'#shopping_02',
            data:{
                shopping_2_list:[],
                bigImg:'./images/shopping_cart/t-shirt 2.jpg',
            },
            methods: {
                changeImg(e){
                    // console.log(e.target.getAttribute("src"));
                    this.bigImg = e.target.getAttribute("src");
                },
            },
            compute: {},
            watch: {},
            created() {
                let url = './PHP/commodity.php'; //
                fetch(url)
                    .then(response => response.json())
                    .then(
                        text => this.shopping_2_list = text
                    ); //
            },
            mounted(){},
            destroyed(){},
        })