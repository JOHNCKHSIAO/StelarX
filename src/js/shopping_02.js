var shopping_vm = new Vue({
    el:'#shopping_02',
    data:{
        vue_prod_num:0,
        shopping_2_list:[],
        bigImg:'',  // 切換步驟 
        lave_mile:0,
        quantity: 1, //商品數量
        Add_to: 1, //加入購物車

        // 1.
        order_list:[],
        already_exist:false,
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
        add(){
                this.quantity++
        },
        join_in(e){
            e.preventDefault();  //為了讓他不要去執行到外層a連結的動作
            this.Add_to++
            // 3.
            if(this.already_exist){
                for(let i=0; i<this.order_list.length; i++ ){
                    if(this.order_list[i]['商品ID'] === this.vue_prod_num){
                        // 幾個產品就跑幾次
                        this.order_list[i]['商品數量'] = this.quantity;
                        //因為已經存在，所以只要改商品數量
                    }
                }
            }else{//如果不存在的話
                let order_item = {
                    '商品ID': this.vue_prod_num,
                    '商品數量': this.quantity,
                    '商品圖':this.shopping_2_list[this.vue_prod_num][2],
                    '里程數':this.shopping_2_list[this.vue_prod_num][1],
                    '商品名稱':this.shopping_2_list[this.vue_prod_num][0],
                };
                if(this.order_list){//如果order_list 有其他商品資料的話，push到後面
                    this.order_list.push(order_item);
                }else{//如果order_list 沒資料的話，直接存入order_item
                    this.order_list = order_item;
                }
                this.already_exist = true;
                // console.log(this.order_list);
            }
            //localStorage.setItem意思是把資料存進localStorage裡
            localStorage.setItem('order_list', JSON.stringify(this.order_list));
            //改購物車上面的數量
            document.getElementById("Shopp_add").innerText=this.order_list.length;
            
        },
        commodityApi(){
            // 抓commodity.php這支檔案
            let url = './PHP/commodity.php'; //
            fetch(url)
                // 解開php裡面的json檔案
                .then(response => response.json())
                // .then意思表示做下一件事，接著要做的事情放到()裡面
                // .then(text => console.log(text))
                .then(text => {
                    // 這裡的text等於上一行解開json檔裡面陣列元素
                    this.shopping_2_list = text;
                    localStorage.setItem('shopping_02',this.shopping_2_list);
                    // console.log(this.shopping_2_list);
                    let search_obj = new URLSearchParams(location.search);
                    let prod_num = search_obj.get("prods");
                    this.vue_prod_num = prod_num
                    this.bigImg = this.shopping_2_list[this.vue_prod_num][2] // 切換步驟
                }) 
        },
        rightNow(){
            if(this.already_exist){
                for(let i=0; i<this.order_list.length; i++ ){
                    if(this.order_list[i]['商品ID'] === this.vue_prod_num){
                        // 幾個產品就跑幾次
                        this.order_list[i]['商品數量'] = this.quantity;
                        //因為已經存在，所以只要改商品數量
                    }
                }
            }else{//如果不存在的話
                let order_item = {
                    '商品ID': this.vue_prod_num,
                    '商品數量': this.quantity,
                    '商品圖':this.shopping_2_list[this.vue_prod_num][2],
                    '里程數':this.shopping_2_list[this.vue_prod_num][1],
                    '商品名稱':this.shopping_2_list[this.vue_prod_num][0],
                };
                if(this.order_list){//如果order_list 有其他商品資料的話，push到後面
                    this.order_list.push(order_item);
                }else{//如果order_list 沒資料的話，直接存入order_item
                    this.order_list = order_item;
                }
                this.already_exist = true;
                // console.log(this.order_list);
            }
            //localStorage.setItem意思是把資料存進localStorage裡
            localStorage.setItem('order_list', JSON.stringify(this.order_list));
        },
    },
    computed: {
        total_mile(){
            let total = this.shopping_2_list[this.vue_prod_num][1] * this.quantity
            if(this.lave_mile < total){
                alert("哩程數不足")
                this.quantity = this.quantity-1 
                //+1會超過所以需要-1給他回到還沒超過的數字階段
                total = this.shopping_2_list[this.vue_prod_num][1] * this.quantity
                return total
            }
            else{
                return total
            }
        },
        
    },
    watch: {

    },
    created() {  
        this.commodityApi()
        this.lave_mile = 300000
    },
    mounted(){ //綁html，和html畫面有關
        // 2.
        let search_obj = new URLSearchParams(location.search); //抓網址上面戴的參數
        
        if(localStorage['order_list']){ //如果localStorage有order_list這個資料ˋ的話做下面的事情
            // console.log('object');
            let order_list_local=JSON.parse(localStorage['order_list']);
            // 先把他轉回成振烈
            this.order_list = order_list_local;
            // 把這個鎮列存到vue的變數裡面
            // console.log(this.vue_prod_num);
            for(let i=0; i<order_list_local.length; i++ ){
                if(order_list_local[i]['商品ID'] == search_obj.get("prods")){
                    // 如果商品id有存在localStorage裡面的話
                    // console.log('object');
                    this.already_exist = true;
                    // 會把已經存在設成true
                    this.quantity = order_list_local[i]['商品數量'];
                    // 然後把localStorage的產品數量存回vue的quantity變數哩
                }
            }
        }
    },
    updated() { //要呈現甚麼效果可以放這裡
        
    },
    destroyed(){

    },
})