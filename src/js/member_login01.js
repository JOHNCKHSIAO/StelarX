let vm = new Vue({
    el:"#member-login",
    data:{
        form_data:{
            account_input :"",
            password_input :"",
        
        },
        messageOpacity:{
            opacity:0,
        },
        eyes:"fa-solid fa-eye-slash",
        passwordInputType:"password",
        errorMessage:"請輸入帳號或密碼",

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
        btnClick(){
            let account = this.form_data.account_input;
            let password = this.form_data.password_input;
            if((account=="") || (password=="")){
                this.errorMessage = "請輸入帳號或密碼";
                this.messageOpacity.opacity ="1";
            }else{
                let form =document.querySelector("#form");
                let inputFormData = new FormData(form);
                let url = "./PHP/member_login.php"
                fetch(url, {
                    body: inputFormData, // must match 'Content-Type' header
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, same-origin, *omit
                    // headers: {'content-type': 'application/json'},
                    method: 'POST', 
                    mode: 'cors',
                    redirect: 'follow', 
                    referrer: 'no-referrer', 
                  })
                  .then(res=>{
                    return res.text();
                  })
                  .then(res=>{
                    if(res=="loginOK"){
                        alert("登入成功，即將轉至會員中心");
                        setTimeout(()=>{
                            window.location = "./member_login02.html";
                        },1000)
                       return;
                       
                    }else if(res=="notAvailable"){
                        this.errorMessage = "您還不是我們的會員，請加入會員!";
                        this.messageOpacity.opacity ="1";
                        return;
                    }else{
                        this.errorMessage = "帳號或密碼錯誤";
                        this.messageOpacity.opacity ="1";
                        

                    }
                  })
            }
            

        },

    },
    computed:{

    },
    watch: {},
    beforeCreate() {
        
    },
    created() {
        
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