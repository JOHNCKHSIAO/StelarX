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
      let planets = document.querySelector(".my_pla_sel") //下拉選單星球
      let textarwa = document.querySelector("#textarea")//意見欄位
      let formContent = document.querySelector("#my_tra_form");
      console.log(formContent);

  

//   let obj ={
//     obj_name:name.value,
//     obj_tel:tel.value,
//     obj_email:email.value,
//     obj_sel:planets.value,
//     obj_textarwa:textarwa.value
//   }
// let jsonObj = JSON.stringify(obj);

$("#btn").click(function(){
    let formContentData = new FormData(formContent);
    let url = "./PHP/contact.php";
    // $('#send_data')[0].click();
    // console.log($('#send_data')[0]);
    fetch(url, {
      body:formContentData, // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      // headers: {
      //   'user-agent': 'Mozilla/4.0 MDN Example',
      //   'content-type': 'form-data'
      // },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // *client, no-referrer
    })
    .then(res=>{return res.text()})
    .then(res=>{
      if(res=="ok"){ alert("成功")} 
    alert("已送出")

    })

})
// console.log(obj);




 
});
