window.addEventListener("load", function(){
    // console.log(vm.quantity)
    // document.getElementById("Shopp_add").innerText=shopping_vm.Add_to;

    // document.getElementById("shopping_cart_top").addEventListener("click", function(){
    // localStorage.setItem("shopping_number",shopping_vm.Add_to)
    // });
    let order_list_local=JSON.parse(localStorage['order_list']);
    // JSON.parse可以把JSON字串轉換成JavaScript的數值或是物件
    // 把上面這行打在shopping_03裡面，他可以從localStorage裡面抓資料出來
    document.getElementById("Shopp_add").innerText=order_list_local.length;
})
