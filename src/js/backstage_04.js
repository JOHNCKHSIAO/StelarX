let vm = new Vue({
    el: '#backstage_04',

    data: {
      backstage_04: [],
      page:0,
    },
    methods: {
      edit(e){
         // console.log(e.target.dataset.idx);
         console.log(this.backstage_04[e.target.dataset.idx]);
      },
      changePage(e){
        this.page = e.target.dataset.page;
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