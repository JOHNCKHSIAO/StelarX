let vm =new Vue({
    el: '#backstage_05', //

    data: {
      backstage_05: [], //
    },
    methods: {
      edit(e){
         // console.log(e.target.dataset.idx);
         console.log(this.backstage_05[e.target.dataset.idx]);
      },
    },
    compute: {},
    watch: {},
    created() {
        let url = './PHP/backstage_05.php'; //
        fetch(url)
            .then(response => response.json())
            .then(text => this.backstage_05 = text); //
    },
    mounteds(){},
    destroyed(){},

})