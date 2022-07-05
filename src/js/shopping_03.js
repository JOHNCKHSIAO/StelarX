new Vue({
    el:'#shopping_03',
    data:{
        order_list_local:[],
        shopping03_total_mile:0,
    },
    methods: {
        reduce(e){
            let i = e.target.dataset.idx;
            if(this.order_list_local[i]['商品數量'] > 1){
                this.order_list_local[i]['商品數量']--;
                this.saveLocalStorage();
            }
        },
        add(e){
            let i = e.target.dataset.idx;
            this.order_list_local[i]['商品數量']++;
            this.saveLocalStorage();
        },
        saveLocalStorage(){
            localStorage.setItem('order_list', JSON.stringify(this.order_list_local));
            console.log('finish');
        },
        deleteItem(e){
            let i = e.target.dataset.idx;
            this.order_list_local.splice(i,1);
            this.saveLocalStorage();
        }
    },
    computed: {
        
    },
    mounted(){
        // 把localStorage上面order_list裡面的東西拿出來放到shopping_03裡，再把order_list裡面的數值放到vue變數的rder_list_local陣列裡面
        this.order_list_local = JSON.parse(localStorage.getItem('order_list'));
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

new Vue({
    el:'#fill_in',
    data:{
        user_pick:{
            Pickup_Location:'',
            Pickup_data:'',
            Pickup_people:'',
            Pickup_Tel:'',
        }
    },
    methods: {
        exchange(e){
            e.preventDefault(); //先讓a連結不要發生作用，以下條件成立後才執行a連結動作
               
            let order_list_local = JSON.parse(localStorage.getItem('order_list'));
            let total = 0;
            for(let i=0; i<order_list_local.length; i++){
                total += (order_list_local[i]['商品數量'] * order_list_local[i]['里程數'])
                // console.log(this.order_list_local[i]);
            }

            if(total > 300000){
                alert('哩程數不足');
            }else{
                localStorage.setItem('Pickup_Information', JSON.stringify(this.user_pick));
                // window.location.href = "./shopping_04.html";
            }

            
            fetch('./PHP/exchange.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Pickup_Location: this.user_pick.Pickup_Location,
                    Pickup_data: this.user_pick.Pickup_data,
                    Pickup_people: this.user_pick.Pickup_people,
                    Pickup_Tel: this.user_pick.Pickup_Tel,
                })
                
            }).then(res=>{
                return res.text();
              })
              .then(res=>{
                console.log(res);
              })
        }
    },
})