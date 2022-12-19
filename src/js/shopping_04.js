new Vue({
    el:'#shopping_04',
    data:{
        order_list_local:[],
        shopping03_total_mile:0,

        user_pick:{},
        img_src:{
            '海王星':"./images/planet/NEPTUNE.png",
            '水星':"./images/planet/MERCURY.png",
            '天王星':"./images/planet/URANUS.png",
            '木星':"./images/planet/JUPITER.png",
            '火星':"./images/planet/MARS.png",
            '地球':"./images/planet/Earth.png",
            '金星':"./images/planet/VENUS.png",
            '土星':"./images/planet/SATURN.png",
        },
        img:'',
    },
    methods: {

    },
    computed: {
        
    },
    mounted(){
        // 把localStorage上面order_list裡面的東西拿出來放到shopping_03裡，再把order_list裡面的數值放到vue變數的rder_list_local陣列裡面
        this.order_list_local = JSON.parse(localStorage.getItem('order_list'));

        this.user_pick = JSON.parse(localStorage.getItem('Pickup_Information'));

        this.img = this.img_src[this.user_pick.Pickup_Location]
    },
    updated() {  //如需有要因數據更改導致DOM重新泫然，可放置updated裡

        // 下面這裡在是計算shopping_02裡面所選的所有商品和數量加總的總兌換里程數
        let total = 0;
        for(let i=0; i<this.order_list_local.length; i++){
            total += (this.order_list_local[i]['商品數量'] * this.order_list_local[i]['里程數'])
            // console.log(this.order_list_local[i]);
        }
        this.shopping03_total_mile = total;
    },
})