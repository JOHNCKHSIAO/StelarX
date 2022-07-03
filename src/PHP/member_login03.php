<?php

include("connection.php");
session_start();
$sql1 = "select ACCOUNT , PERSONAL_ID, PASSWORD,LASTNAME , NAME ,E_MAIL , CELLPHONE, BUSINESS from member where ACCOUNT = :account ";
$sql2 = "UPDATE member SET PASSWORD = :password, LASTNAME = :lastname , NAME =:name , E_MAIL = :email ,CELLPHONE = :cellphone, BUSINESS = :business,
WHERE  ACCOUNT = :account ";

function select($SESSIONarg,$PDOarg,$SQLarg){ //第一個參數要放Session
    $stmt1 = $PDOarg->prepare($SQLarg);
    $stmt1->bindValue(":account", $SESSIONarg);
    $stmt1->execute();
    $result = $stmt1->fetchAll();
    return $result;
}


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


function updateMember($SESSIONarg,$PDOarg,$SQLarg,$POSTarg){

    $stmt1 = $PDOarg->prepare($SQLarg);
    $stmt1->bindValue(":password", $POSTarg["password"]);
    $stmt1->bindValue(":lastname", $POSTarg["lastname"]);
    $stmt1->bindValue(":name", $POSTarg["name"]);
    $stmt1->bindValue(":email", $POSTarg["email"]);
    $stmt1->bindValue(":cellphone", $POSTarg["cellphone"]);
    $stmt1->bindValue(":business", $POSTarg["business"]);
    $affectedRow = $stmt1->execute();
    return $affectedRow; 

}



function selectOrUpdate($ARGPOST,$ARGSESSION,$PDOARG,$SQL1,$SQL2){

    if(count($ARGPOST)==0){

        $Member_Data = select($ARGSESSION,$PDOARG,$SQL1);
        $Member_DataArr = toSingleArr($Member_Data);
        return json_encode($Member_DataArr);


    }else{

        $retunvalue = updateMember($ARGSESSION,$PDOARG,$SQL2,$ARGPOST);
        return  $retunvalue;

    }

}


$result = selectOrUpdate($_POST,$_SESSION["memberAccount"],$pdo,$sql1,$sql2);
echo $result;


?>