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
            totallmiles:"",
            milesArray:[],
          
        },
       


        
    },
    methods:{

      

    },
    computed:{

    },
    watch: {},
    beforeCreate() {
       
    },
    created() {
        fetch("./PHP/member_login02.php")
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            let MEMBER_DATA = res["MEMBER_DATA"];
            let FLIGHT_DATA = res["FLIGHT_DATA"];
            this.personal_data.lastName = MEMBER_DATA[0][1];
            this.personal_data.name = MEMBER_DATA[0][2];
            if(MEMBER_DATA[0][3]){
                this.personal_data.membertype = "商業會員";
            }else{
                this.personal_data.membertype ="一般會員";
            }
            this.personal_data.memberID =  MEMBER_DATA[0][0];
            this.personal_data.memberDate = MEMBER_DATA[0][4];
            //這邊處理里程
            let miles = FLIGHT_DATA[0][0];
            miles = (miles/10000);
            this.miles_data.totallmiles = miles;
            //里程切成陣列
            let stringMiles = String(miles);
            console.log(stringMiles);
            let  MilesARR = stringMiles.split("");
            // console.log(MilesARR.length);
            let count=(11-MilesARR.length);
            for(let i=0; i<=count; i++){
                MilesARR.unshift(0);
            }
            // console.log(MilesARR);
            this.miles_data.milesArray = MilesARR;

            
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