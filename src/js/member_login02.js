const vm = new Vue({
    el:"#member-login02-wrapper",
    data:{
        personal_data:{//把03的資料一起抓出來 送到localstorage 到03的時候渲染
            lastName:"",
            name:"",
            membertype:"",
            memberID:"",
            membertype:"",
            memberDate:"",
           
        },
        miles_data:{
           //抓一個二維陣列 透過迴圈把各個陣列取出來 一個陣列渲染一個區塊

        },
        miles:[],//把里程總數->轉成陣列 逐項帶入格子


        
    },
    methods:{
        // onloadandfetch(){
        //     fetch("./PHP/member_login02.php")
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res["FLIGHT_DATA"]);
        //     console.log(res["MEMBER_DATA"]);
        //     console.log(res["SHOPPING_DATA"]);
        //     res["MEMBER_DATA"][5] = this.personal_data.lastName;
        //     res["MEMBER_DATA"][4] = this.personal_data.name;
        //     res["MEMBER_DATA"][0] = this.personal_data.memberID;
        //     res["MEMBER_DATA"][9] = this.personal_data.memberDate;

        // })
        // }
      

    },
    computed:{

    },
    watch: {},
    beforeCreate() {
        // fetch("./PHP/member_login02.php")
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res["FLIGHT_DATA"]);
        //     console.log(res["MEMBER_DATA"]);
        //     console.log(res["SHOPPING_DATA"]);
        //     res["MEMBER_DATA"][5] = this.personal_data.lastName;
        //     res["MEMBER_DATA"][4] = this.personal_data.name;
        //     res["MEMBER_DATA"][0] = this.personal_data.memberID;
        //     res["MEMBER_DATA"][9] = this.personal_data.memberDate;

        // })
    },
    created() {
        fetch("./PHP/member_login02.php")
        .then(res=>res.json())
        .then(res=>{
            // console.log(res["FLIGHT_DATA"]);
            console.log(res["MEMBER_DATA"]);
            let arr = res["MEMBER_DATA"][0];
            console.log(arr);
            this.personal_data.lastName = arr[5];
            this.personal_data.name = arr[4];
            this.personal_data.memberID = arr[0]; 
            this.personal_data.memberDate = arr[9];
            

        })
    },
    beforeMount() {
        // fetch("./PHP/member_login02.php")
        // .then(res=>{
        //     localStorage.setItem("data",res);
        // })
    },
    mounted() {
       
    },
    beforeUpdate() {
       
    },
    updated() {
       
    },
    beforeDestroy() {
        
    },
    destroyed() {
      
    },
}) 