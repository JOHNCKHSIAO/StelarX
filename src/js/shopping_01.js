new Vue({
    el: '#shopping_1',

    data: {
        shopping_1_list: [],
    },
    methods: {
        
    },
    computed: {

    },
    watch: {},
    created() {
        let url = './PHP/commodity.php';
        fetch(url)
            .then(response => response.json())
            .then(text => this.shopping_1_list = text);
    },
})