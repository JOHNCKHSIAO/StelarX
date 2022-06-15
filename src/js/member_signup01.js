    /*
    畫面操作
    1. 帳號blur後 要去比對是否有重複 如有  下方訊息用透明度操作顯示(要改css的間距)
    2. Id 同上
    3.按下一步  按鈕設定data attribute 密碼欄位要出現
    密碼欄位出現要順一點....先隱形再顯示(透明度)
    4.眼睛可以操控看不看的到密碼(type=text 或是 password)  也要切換圖(閉眼或睜開)
    
    */
    
    let account_input = document.querySelector("#account_input");
    let id_input = document.querySelector("#id_input");
    let accountCheck_message = document.querySelector("#accountCheck_message");
    let idCheck_message = document.querySelector("#idCheck_message");
    let password_div = document.querySelector("#password_div");
    let checkPassword_div = document.querySelector("#checkPassword_div");
    let checkPassword_input = document.querySelector("#checkPassword_input");
    let password_input = document.querySelector("#password_input");
    let checkPassword_message = document.querySelector("#checkPassword_message");
    console.log(checkPassword_message);
    let lastName_div = document.querySelector("#lastName_div");
    let name_div = document.querySelector("#name_div");
    let email_div = document.querySelector("#email_div");
    let cell_div = document.querySelector("#cell_div");
    let cbusinessNumber_div = document.querySelector("#businessNumber_div");
    let submitBtn = document.querySelector("#submitBtn");
    let openeyes= document.querySelectorAll("i");
    console.log(openeyes);
    // console.log(openeyes[0]);
    // console.log(submitBtn);
    
    account_input.addEventListener("focus",()=>{
        accountCheck_message.style.opacity="1";
    })
    account_input.addEventListener("blur",()=>{
        accountCheck_message.style.opacity="0";
    })
    id_input.addEventListener("focus",()=>{
        idCheck_message.style.opacity="1";
    })
    id_input.addEventListener("blur",()=>{
        idCheck_message.style.opacity="0";
    })
    checkPassword_input.addEventListener("focus",()=>{
        checkPassword_message.style.opacity="1";
    })
    checkPassword_input.addEventListener("blur",()=>{
        checkPassword_message.style.opacity="0";
    })
   
    submitBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        let account=account_input.value;
        let id=id_input.value;
        console.log(account,id);
        if(submitBtn.hasAttribute("data-step")){
            password_input.disabled="disabled";
            checkPassword_input.disabled="disabled";
            lastName_div.classList.remove("displaynone");
            name_div.classList.remove("displaynone");
            cell_div.classList.remove("displaynone");
            cbusinessNumber_div.classList.remove("displaynone");
            email_div.classList.remove("displaynone");
            lastName_div.classList.add("fadeIn");
            name_div.classList.add("fadeIn");
            cell_div.classList.add("fadeIn");
            email_div.classList.add("fadeIn");
            cbusinessNumber_div.classList.add("fadeIn");
            submitBtn.removeAttribute("data-step");
            submitBtn.setAttribute("data-finished","finished"); 
        }else if(submitBtn.hasAttribute("data-finished")){
            window.location.href = "./member_signup02.html";
           
        }else if(!(submitBtn.hasAttribute("data-step"))){
            password_div.classList.remove("displaynone");
            checkPassword_div.classList.remove("displaynone");
            password_div.classList.add("fadeIn");
            checkPassword_div.classList.add("fadeIn");
            submitBtn.setAttribute("data-step","step1");
            account_input.disabled="disabled";
            id_input.disabled="disabled";
        }else{
            alert("請輸入帳號或ID");
        }
     

    })

    openeyes.forEach(element=>{
        console.log(element);
        element.addEventListener("click",(e)=>{
            if(element.classList.contains("fa-solid")){
                element.classList.remove("fa-solid");
                element.classList.remove("fa-eye-slash");
                element.classList.add("fas");
                element.classList.add("fa-eye");
                checkPassword_input.type="text";
                password_input.type="text";
            }else{
                element.classList.remove("fas");
                element.classList.remove("fa-eye");
                element.classList.add("fa-solid");
                element.classList.add("fa-eye-slash");
                checkPassword_input.type="password";
                password_input.type="password";
            }
            

        });
    })










