<?php

include("connection.php");
session_start();
// echo $_SESSION["memberAccount"];
// $memberData = [
   
//         "ID" => "",
//         "ACCOUNT" => "",
//         "PASSWORD" => "",
//         "PERSONAL_ID"=> "",
//         "NAME" => "",
//         "LASTNAME"=>"",
//         "E_MAIL"=>"",
//         "CELLPHONE"=>"",
//         "BUSINESS"=>"",
//         "MEMBER_DATE"=>"",
//         "MEMBER_DATE" => "",

//     "travel" =>[

//     ],
//     "shopping"=>[

//     ],

// ];
// print_r($memberData);
$sql1 = "select * from stellarx.member where ACCOUNT = :account ";
$sql2 = "select DEPARTURE_TIME, MILEAGE ,ORINGIN , ORINGIN from stellarx.V_member_center_miles2 where ACCOUNT = :account ";
$sql3 = "select SHOPPING_ID, DELIVERY_DATE ,RECEIVER , RECEIVER_PHONE,RECEIVER_LOCATION, COMMODITY_NAME,QUANTITY 
        from stellarx.V_member_shopping3 where ACCOUNT = :account ";

function select($SESSIONarg,$PDOarg,$SQLarg){ //第一個參數要放Session
    $stmt1 = $PDOarg->prepare($SQLarg);
    $stmt1->bindValue(":account", $SESSIONarg);
    $stmt1->execute();
    $result = $stmt1->fetchAll();
    return $result;
}

//日期只需要到日 //把二維陣列拆開 //只留下一半的值
// [MEMBER_DATE] [DEPARTURE_TIME] 
function toSingleArr($ARRAYarg){
    
    $result = [];

    foreach($ARRAYarg as $index => $subArr){
        $temp = [];
            for($i=0; $i<(count($subArr)/2); $i++){
                     
            array_push($temp, $subArr[$i]);
        }

        array_push($result, $temp);
       
    }

    return $result;
}

$Member_Data = select($_SESSION["memberAccount"],$pdo,$sql1);
$Flight_Data = select($_SESSION["memberAccount"],$pdo,$sql2);
$Shopping_Data = select($_SESSION["memberAccount"],$pdo,$sql3);

$Member_DataArr = toSingleArr($Member_Data);
$Flight_DataArr = toSingleArr($Flight_Data);
$Shopping_DataArr = toSingleArr($Shopping_Data);

$RETURN_ARR = [
    "MEMBER_DATA" => $Member_DataArr,
    "FLIGHT_DATA" => $Flight_DataArr,
    "SHOPPING_DATA" => $Shopping_DataArr,
];

echo json_encode($RETURN_ARR);









?>