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
    let checkPassword_message = document.querySelector("#checkPassword_message");
    let lastName_div = document.querySelector("#lastName_div");
    let name_div = document.querySelector("#name_div");
    let email_div = document.querySelector("#email_div");
    let cell_div = document.querySelector("#cell_div");
    let cbusinessNumber_div = document.querySelector("#businessNumber_div");
    let submitBtn = document.querySelector("#submitBtn");
    console.log(submitBtn);
    
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
    submitBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        submitBtn.setAttribute("data-step","step1");
        password_div.classList.remove("displaynone");
        checkPassword_div.classList.remove("displaynone");
    })










