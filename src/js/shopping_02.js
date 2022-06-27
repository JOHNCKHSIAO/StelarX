new Vue({
    el:'#shopping_02',
    data:{
        vue_prod_num:0,
        shopping_2_list:[],
        bigImg:'',  // 切換步驟 
        lave_mile:0,
        quantity: 1, //商品數量
    },
    methods: {
        changeImg(src){ // 切換步驟
            // console.log(e.target.getAttribute("src"));
            this.bigImg = src
            // console.log(src);
        },
        reduce(){
            if(this.quantity > 1){
                this.quantity--
            }
        },
        add(e){
                this.quantity++
        },
        commodityApi(){
            // 抓commodity.php這支檔案
            let url = './PHP/commodity.php'; //
            fetch(url)
                // 解開php裡面的json檔案
                .then(response => response.json())
                // .then(text => console.log(text))
                .then(text => {
                    console.log(this.shopping_2_list);
                    this.shopping_2_list = text;
                    console.log(this.shopping_2_list);
                    let search_obj = new URLSearchParams(location.search);
                    let prod_num = search_obj.get("prods");
                    this.vue_prod_num = prod_num
                    this.bigImg = this.shopping_2_list[this.vue_prod_num][2]  // 切換步驟
                }) 
                // 這裡的text等於上一行解開json檔裡面陣列元素
                
        }

    },
    computed: {
        total_mile(){
            let total = this.shopping_2_list[this.vue_prod_num][1] * this.quantity
            if(this.lave_mile < total){
                alert("超過上限哩數")
                this.quantity = this.quantity-1 
                //+1會超過所以需要-1給他回到還沒超過的數字階段
                total = this.shopping_2_list[this.vue_prod_num][1] * this.quantity
                return total
            }
            else{
                return total
            }
            
        }
    },
    watch: {},
    created() {
        this.commodityApi()
        this.lave_mile = 300000
    },
    mounted(){},
    destroyed(){},
})