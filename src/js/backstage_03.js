const vm=new Vue({
    el: '#backstage_03', //

    data: {
      backstage_03: [], //
      page:0,
    },
    methods: {
      edit(e){
         // console.log(e.target.dataset.idx);
         console.log(this.backstage_03[e.target.dataset.idx]);
      },
      changePage(e){
        this.page = e.target.dataset.page;
        // console.log(e.target);
    },
    },
    compute: {},
    watch: {},
    created() {
        let url = './PHP/backstage_03.php'; //
        fetch(url)
            .then(response => response.json())
            .then(text => {this.backstage_03 = text
              console.log(text);    
          }); //
    },
    mounteds(){},
    destroyed(){},

})