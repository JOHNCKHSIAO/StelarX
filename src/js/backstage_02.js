let vm = new Vue({
    el: '#backstage_02', //

    data: {
      backstage_02: [], //
      page:0,
    },
    methods: {
      edit(e){
         // console.log(e.target.dataset.idx);
         console.log(this.backstage_02[e.target.dataset.idx]);
      },
      changePage(e){
        this.page = e.target.dataset.page;
        // console.log(e.target);
    },
    },
    compute: {},
    watch: {},
    created() {
        let url = './PHP/backstage_02.php'; //
        fetch(url)
            .then(response => response.json())
            .then(text => {this.backstage_02 = text;
              // console.log(text);
            }); //
    },
    mounteds(){},
    destroyed(){},

})