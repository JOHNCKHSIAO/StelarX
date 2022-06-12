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
 

  


});