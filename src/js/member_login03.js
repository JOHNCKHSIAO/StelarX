const vm = new Vue({
    el:"#personal-info",
    data:{
        form_data:{
            account:"",
            personal_id:"",
            password:"",
            passwordCheck:"",
            lastName:"",
            name:"",
            email:"",
            cellphone:"",
            companyCode:"",
           
        
        },
        messageOpacity:{
            opacity:0,
        },
        error:{
            lastname:false,
            name:false,
            email:false,
            cellphone:false,

        },
        

        eyes:"fa-solid fa-eye-slash",
        passwordInputType:"password",
        password_message:"",
        checkpassword_message:"",
        passwordStatus:true,
        checkInputValue:true,
    },
    methods:{
        hideMessage(){
            this.messageOpacity.opacity ="0";
        },
        eyesToggle(){
            if(this.eyes == "fa-solid fa-eye-slash"){
                this.eyes = "fas fa-eye";
                this.passwordInputType = "text";
            }else{
                this.eyes = "fa-solid fa-eye-slash";
                this.passwordInputType = "password";
            }
        },
        checkpassword(){
            let password = this.form_data.password;
            let checkPassWord = this.form_data.passwordCheck;
            if((password == null)||(password == "")||(password.length< 6)){
                this.passwordStatus = false;
                this.messageOpacity.opacity ="1";
                this.password_message = "密碼長度至少需要6個字元";
            }else if(password !== checkPassWord ){
                this.passwordStatus = false;
                this.messageOpacity.opacity ="1";
                this.password_message = "請輸入正確密碼";
            }else{
                this.passwordStatus = true;
            }

        },
        checkNotNull(value,whitcharea){
            if((value == null)||(value == "")){
                switch(whitcharea){
                    case 1:
                        this.error.lastname = true;
                        break;
                    case 2:
                        this.error.name = true;
                        break;
                    case 3:
                        this.error.email = true;
                        break;
                    case 4:
                        this.error.cellphone = true;
                        break;
                }
            }else{
                switch(whitcharea){
                    case 1:
                        this.error.lastname = false;
                        break;
                    case 2:
                        this.error.name = false;
                        break;
                    case 3:
                        this.error.email = false;
                        break;
                    case 4:
                        this.error.cellphone = false;
                        break;
                }
            }
        },
        btnClick(){
            

            // let form = document.querySelector("#form");
            // let inputFormData = new FormData(form);
            // let url = "./PHP/member_login03.php";
            // fetch(url, {
            //     body: inputFormData, // must match 'Content-Type' header
            //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //     credentials: 'same-origin', // include, same-origin, *omit
            //     // headers: {'content-type': 'application/json'},
            //     method: 'POST', 
            //     mode: 'cors',
            //     redirect: 'follow', 
            //     referrer: 'no-referrer', 
            // })
            // .then(res=>{res.text()})
            // .then(res=>{console.log(res);})

      
            
            // form.submit();
            // let account = this.form_data.account_input;
            // let password = this.form_data.password_input;
            // if((account=="") || (password=="")){
            //     this.errorMessage = "請輸入帳號或密碼";
            //     this.messageOpacity.opacity ="1";
            // }else{
            //     let form =document.querySelector("#form");
            //     let inputFormData = new FormData(form);
            //     let url = "./PHP/member_login.php"
            //     fetch(url, {
            //         body: inputFormData, // must match 'Content-Type' header
            //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //         credentials: 'same-origin', // include, same-origin, *omit
            //         // headers: {'content-type': 'application/json'},
            //         method: 'POST', 
            //         mode: 'cors',
            //         redirect: 'follow', 
            //         referrer: 'no-referrer', 
            //       })
            //       .then(res=>{
            //         return res.text();
            //       })
            //       .then(res=>{
            //         if(res=="loginOK"){
            //             alert("登入成功，即將轉至會員中心");
            //             setTimeout(()=>{
            //                 window.location = "./member_login02.html";
            //             },1000)
            //            return;
            //         }else if(res=="notAvailable"){
            //             this.errorMessage = "您還不是我們的會員，請加入會員!";
            //             this.messageOpacity.opacity ="1";
            //             return;
            //         }else{
            //             this.errorMessage = "帳號或密碼錯誤";
            //             this.messageOpacity.opacity ="1";
                        

            //         }
            //       })
            // }
            

        },

    },
    computed:{
      
    },
    watch: {},
    beforeCreate() {
        
    },
    created() {
        fetch("./PHP/member_login03.php")
        .then(res=>{return res.json();} )
        .then(res=>{
            console.log(res);//ok有值
            this.form_data.account = res[0][0];
            this.form_data.personal_id = res[0][1];
            this.form_data.password = res[0][2];
            this.form_data.passwordCheck =  res[0][2];
            this.form_data.lastName = res[0][3];
            this.form_data.name = res[0][4];
            this.form_data.email = res[0][5];
            this.form_data.cellphone = res[0][6];
            this.form_data.accountcompanyCode =res[0][7];

        })
    },
    beforeMount() {
      
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