<?php

include("connection.php");
session_start();
$arr = json_decode(file_get_contents('php://input'), true);

//print_r($arr);//有值
// $sql1 = "select ACCOUNT , PERSONAL_ID, PASSWORD,LASTNAME , NAME ,E_MAIL , CELLPHONE, BUSINESS from member where ACCOUNT = :account ";
$sql2 = "UPDATE member SET PASSWORD = :password, LASTNAME = :lastname , NAME =:name , E_MAIL = :email ,CELLPHONE = :cellphone, BUSINESS = :business WHERE  ACCOUNT = :account ";

$stmt1 = $pdo->prepare($sql2);
$stmt1->bindValue(":password", $arr["password"]);
$stmt1->bindValue(":lastname", $arr["lastname"]);
$stmt1->bindValue(":name", $arr["name"]);
$stmt1->bindValue(":email", $arr["email"]);
$stmt1->bindValue(":cellphone", $arr["cellphone"]);
$stmt1->bindValue(":business", $arr["business"]);
$stmt1->bindValue(":account", $_SESSION["memberAccount"]);
$affectedRow = $stmt1->execute();
echo($affectedRow);




// $affectedRow = updateMember($_SESSION["memberAccount"],$pdo,$sql2,$arr);
// echo($affectedRow);



// $result = selectOrUpdate($_POST,$_SESSION["memberAccount"],$pdo,$sql1,$sql2);
// echo $result;


?>