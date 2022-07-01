    /*
    畫面操作
    1. 帳號blur後 要去比對是否有重複 如有  下方訊息用透明度操作顯示(要改css的間距)
    2. Id 同上
    3.按下一步  按鈕設定data attribute 密碼欄位要出現
    密碼欄位出現要順一點....先隱形再顯示(透明度)
    4.眼睛可以操控看不看的到密碼(type=text 或是 password)  也要切換圖(閉眼或睜開)
    
    */

  let vm = new Vue({
    el: '#memberr_register_area',
    data: {
        eyes:"fa-solid fa-eye-slash",
        passwordInputType:"password",
        btnStep:1, 
        // accAndIdDisabled:false,
        accountOpacity:{
            opacity:0,
        },
        passwordOpacity:{
            opacity:0,
        },
        passwordcheckOpacity:{
            opacity:0,
        },
        idOpacity:{
            opacity:0,
        },
        accountAndIdCheck:{
            account:"",
            id:"",
        },
        accountMessage:"帳號長度須介於5~50字元!",
        idMessage:"請輸入正確格式的個人ID",
        passwordCheckMessage:"密碼長度至少需要6個字元",
        checkPassword_message_v:"密碼不符，請重新輸入",
        form_data:{
            account_input_v:"",
            id_input_v:"",
            password_input_v:"",
            checkPassword_input_v:"",
            lastName_input_v:"",
            name_input_v:"",
            email_input_v:"",
            cellphone_input_v:"",
            company_input_v:"",
        }
    },
    methods: {
        checkAccount(){
            //有時間加入一個驗證非空白字元
            // let regex = new RegExp("\f\n\r\t\v");
            let accountValue = this.form_data.account_input_v;
            if(accountValue.length < 5 || accountValue.length > 50){
                this.accountOpacity.opacity = 1;
                this.accountAndIdCheck.account = false;
                return;

            }else{
                let url = "./PHP/checkaccount.php";
                fetch(url, {
                    body: JSON.stringify({account : accountValue}), // must match 'Content-Type' header
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, same-origin, *omit
                    headers: {
                      'content-type': 'application/json'
                    },
                    method: 'POST', 
                    mode: 'cors',
                    redirect: 'follow', 
                    referrer: 'no-referrer', 
                  })
                  .then(res=>{
                    return res.text();
                  })
                  .then(res=>{
                    // alert(res);
                    if(res=="accountOK"){
                        this.accountAndIdCheck.account = true;
                        return
                    }else{
                        this.accountOpacity.opacity= 1;
                        this.accountMessage = "這個帳號已經有人使用，請試試其他的!";
                        this.accountAndIdCheck.account = false;
                    }
                  })
            }
        },
        checkID(){
            //有時間加入正則表達 一英文6數字
            // let regex = new RegExp("\f\n\r\t\v");
            let idValue = this.form_data.id_input_v;
            if((idValue.length) !=7){
                this.idOpacity.opacity = 1;
                this.idMessage = "請輸入正確格式的個人ID";
                this.accountAndIdCheck.id = false;
                return;
            }else{
                let url = "./PHP/checkaccount.php";
                fetch(url, {
                    body: JSON.stringify({inputID : idValue}), // must match 'Content-Type' header
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, same-origin, *omit
                    headers: {
                      'content-type': 'application/json'
                    },
                    method: 'POST', 
                    mode: 'cors',
                    redirect: 'follow', 
                    referrer: 'no-referrer', 
                  })
                  .then(res=>{
                    return res.text();
                  })
                  .then(res=>{
                    // alert(res);
                    if(res=="idOK"){
                        this.accountAndIdCheck.id = true;
                        return
                    }else{
                        this.idOpacity.opacity= 1;
                        this.idMessage = "您已經是我們的會員，請選擇會員登入";
                        this.accountAndIdCheck.id = false;
                    }
                  })
            }

        },
        messageOff(){
            this.accountOpacity.opacity= 0;
            this.idOpacity.opacity= 0;
            this.passwordOpacity.opacity= 0;
            this.passwordcheckOpacity.opacity = 0;
        },
        btnClick(e){
            let password_div = document.querySelector("#password_div");
            let checkPassword_div = document.querySelector("#checkPassword_div");
            let checkPassword_input = document.querySelector("#checkPassword_input");
            let password_input = document.querySelector("#password_input");
            let account_input = document.querySelector("#account_input");
            let id_input = document.querySelector("#id_input");
            let lastName_div = document.querySelector("#lastName_div");
            let name_div = document.querySelector("#name_div");
            let email_div = document.querySelector("#email_div");
            let cell_div = document.querySelector("#cell_div");
            let cbusinessNumber_div = document.querySelector("#businessNumber_div");
         

            if(this.btnStep==3){
                alert("go");
                let memberInfo = {
                    account : this.form_data.account_input_v,
                    id: this.form_data.id_input_v,
                    password : this.form_data.password_input_v,
                    name: this.form_data.name_input_v,
                    lastName : this.form_data.lastName_input_v,
                    cellphone : this.form_data.cellphone_input_v,
                    companyNum : this.form_data.company_input_v,
                    email : this.form_data.email_input_v
                }
                console.log(memberInfo);
                let url ="./PHP/addMember.php";
                fetch(url, {
                    body: JSON.stringify(memberInfo), // must match 'Content-Type' header
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, same-origin, *omit
                    headers: {
                      'content-type':'application/json'
                    },
                    method: 'POST', 
                    mode: 'cors',
                    redirect: 'follow', 
                    referrer: 'no-referrer', 
                  })
                  .then(res=>{return res.text();})
                  .then(res=>{if(res=="ok"){
                    window.location = "./member_signup02.html"
                  }})
                
            }else if(this.btnStep==2) {
                checkPassword_input.disabled="disabled";
                password_input.disabled="disabled";
                lastName_div.classList.remove("displaynone");
                name_div.classList.remove("displaynone");
                email_div.classList.remove("displaynone");
                cell_div.classList.remove("displaynone");
                cbusinessNumber_div.classList.remove("displaynone");
                lastName_div.classList.add("fadeIn");
                name_div.classList.add("fadeIn");
                email_div.classList.add("fadeIn");
                cell_div.classList.add("fadeIn")
                cbusinessNumber_div.classList.add("fadeIn");
                this.btnStep = 3;

            }else if((this.accountAndIdCheck.id== true) && (this.accountAndIdCheck.account==true)){
                e.preventDefault();
                // this.accAndIdDisabled = true;
                account_input.disabled="disabled";
                id_input.disabled="disabled";
                password_div.classList.remove("displaynone");
                checkPassword_div.classList.remove("displaynone");
                password_div.classList.add("fadeIn");
                checkPassword_div.classList.add("fadeIn");
            }else{
              return;
            }
        },
        checkPassWord(arg){
            let password = this.form_data.password_input_v;
            let checkPassWord = this.form_data.checkPassword_input_v;
            switch(arg){
                case 1 :
                    if(password.length< 6){
                        this.passwordOpacity.opacity="1";
                        this.passwordCheckMessage ="密碼長度至少需要6個字元";
                        return;
                    };

                    break;

                case 2 :
    
                    if(checkPassWord.length < 6){
                        
                        this.passwordOpacity.opacity="1";
                        this.passwordCheckMessage ="密碼長度至少需要6個字元";
                        return;
                    }else if(password !== checkPassWord){

                        this.passwordcheckOpacity.opacity="1";
                        return;
                    }else{
                        this.btnStep = 2; 
                    }
            }
             
        },
        closeOrOpen(){
            if(this.eyes == "fa-solid fa-eye-slash"){
                this.eyes = "fas fa-eye";
                this.passwordInputType = "text";
            }else{
                this.eyes = "fa-solid fa-eye-slash";
                this.passwordInputType = "password";
            }
        }
    },
    computed: {
       
        
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

  });






