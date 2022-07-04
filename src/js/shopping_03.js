new Vue({
    el:'#shopping_03',
    data:{
        name_id:0,
        order_list_local:[],
        order_list_local_test:[{
            商品ID:'歐若拉香氛',
            商品數量:1,
        }]
    },
    methods: {

    },
    mounted(){
        this.order_list_local = JSON.parse(localStorage.getItem('order_list'));
        

    },
})