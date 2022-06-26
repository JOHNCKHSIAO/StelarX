// 下拉QA選單
$(document).ready(function () {
    $('.qa_up').click(function () {
        $(this).parent().find('.qa_down').slideToggle(200);
        // $(this).find('img').attr("src","images/qa/qa_up.svg");
        
        if($(this).find('img').attr("style") != undefined){
            $(this).find('img').removeAttr("style");
        }else{
            $(this).find('img').attr("style","transform: rotateZ(180deg);");
        }
        
        $(this).parent().siblings().find('.qa_down').slideUp(200)
    })

    //抓表單
    let name = document.querySelector("#input_name") //姓名欄位
    let tel = document.querySelector("#input_tel") //電話欄位
  let email = document.querySelector("#input_email") //信箱欄位
let planets =document.querySelector(".my_pla_sel") //下拉選單星球
let textarwa = document.querySelector("#textarea")//意見欄位

  

  let obj ={
    obj_name:name.value,
    obj_tel:tel.value,
    obj_email:email.value,
    obj_sel:planets.value,
    obj_textarwa:textarwa.value
  }
let jsonObj = JSON.stringify(obj);

$("#btn").click(function(){

    $('#send_data')[0].click();
    // console.log($('#send_data')[0]);
    // fetch("./PHP/contact.php",{
    //     method: "POST",
    //     // headers: {
    //     //     'Content-Type': 'application/json'
    //     // },
        
    //     body: JSON.stringify({
    //         obj_name:name.value,
    //         obj_tel:tel.value,
    //         obj_email:email.value,
    //         obj_sel:planets.value,
    //         obj_textarwa:textarwa.value
    //     })
    // })
    

})
// console.log(obj);




 
});
