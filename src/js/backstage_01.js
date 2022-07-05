let vm = new Vue({
    el: '#app',
    data: {
        data_list:[
            //每10筆一個陣列
        ],
        page:0,
        data_num:[],
    },
    methods: {
        switchName(name){
            switch(name){
                case 'EARTH':
                    return '地球';
                    break;
            
                case 'MARS':
                    return '火星';
                    break;

                case 'MERCURY':
                    return '水星';
                    break;
                
                case 'VENUS':
                    return '金星';
                    break;

                case 'JUPITER':
                    return '木星';
                    break;

                case 'SATURN':
                    return '土星';
                    break;

                case 'URANUS':
                    return '天王星';
                    break;
                
                case 'NEPTUNE':
                    return '海王星';
                    break;

                default:
                    return '未知';
            }
        },
        changePage(e){
            this.page = e.target.dataset.page;
            // console.log(e.target);
        },
        // numTostringToArr(){
        //    let string = String(this.data_list.length);
        //    this.data_num = string.split("");
        // }
    },
    computed:{
        // numTostringToArr(){
        //     let length = String(this.data_list.length);
        //     let arr= [];
        //     for(let i = 1; i<=length;i++){
        //         arr = arr.push(i); 
        //     }
        //     console.log(arr);
        //     // return 
        //  }
    },
    created(){

        const url = './PHP/backstage_01.php';
        fetch(url)
            .then(response => response.json())
            // .then(text => console.log(text))
            .then(text =>{this.data_list = text;
            

            })

    },
    mounted() {
        
    },
    
            
});


// new Vue({
//     e1: "#backstage_01",
//     data:{
//         backstage_01:[],
//     },
//     methods:{
//         edit(e){
//         console.log(this.backstage_01[e.target.dataset.idx]);
//         },
//     },
//     compute: {},
//     watch: {},
//     created() {
//       let url = './PHP/backstage_01.php';
//       fetch(url)
//           .then(response => response.json())
//           .then(text =>{this.backstage_01 = text
//             console.log(text);});
//   },
//   mounteds(){},
//   destroyed(){},
// })