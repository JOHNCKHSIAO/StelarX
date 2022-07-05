new Vue({
    el: '#backstage_04',

    data: {
      backstage_04: [],
    },
    methods: {
      edit(e){
         // console.log(e.target.dataset.idx);
         console.log(this.backstage_04[e.target.dataset.idx]);
      },
    },
    compute: {},
    watch: {},
    created() {
        let url = './PHP/backstage_04.php';
        fetch(url)
            .then(response => response.json())
            .then(text =>{this.backstage_04 = text
                console.log(text)});
    },
    mounteds(){},
    destroyed(){},
})