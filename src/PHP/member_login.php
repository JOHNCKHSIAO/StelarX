<?php

include("connection.php");
//print_r($_POST);//ok有傳進來
// $member = [];
// $member["name"] = "john";
// $member["gender"] = "trans";
// print_r($member);  //可以這樣賦值

// function memberArr($account,$password,$sqlMessage,$returnMessage){
//     return [
//         "account" => $account,
//         "password" => $password,
//         "sqlMessage"=> $sqlMessage,
//         "returnMessage"=>$returnMessage
//     ];
// };     也可用function建立陣列....

// $arr = memberArr("jphn","male","",""); //成功...
// print_r($arr);

$member = $_POST;

$sql1 = "select ACCOUNT,PASSWORD from stellarx.member
where ACCOUNT = :account ";

// $sql2 = "select ACCOUNT, PASSWORD from stellarx.member
// where ACCOUNT = :account and PASSWORD = :password ";

$stmt1 = $pdo->prepare($sql1);
$stmt1->bindValue(":account", $member["account"]);
// $stmt1->bindValue(":password", $member["password"]);
$stmt1->execute();
$result = $stmt1->fetchAll();
// $password = $result[0];
// print_r($password);
// echo($password["PASSWORD"]);
// print_r($result);  // 這是一個二維陣列 第一層陣列裡面只有一筆值(索引值為0) 值是一個陣列(第二層陣列)第二層陣列
//共有四筆資料  兩筆是用數字當索引  兩筆是用key 當索引
// print_r($result);

if (count($result)==0){ //比對帳號  無帳號回報沒有帳號

    echo("notAvailable");
    return;
}else{ //比對密碼  錯誤回報錯誤

    foreach($result as $index => $arr){
       if ($arr["PASSWORD"] == $member["password"]){
        session_start();
        $_SESSION["memberAccount"] = $arr["ACCOUNT"];
        echo("loginOK");
        

       }else{

        echo("false");

       }

    }

}



// }elseif($result[0]["password"] != $member["password"] ){

//     echo("false");

// }else{

//     echo("loginOk");

// }


?>