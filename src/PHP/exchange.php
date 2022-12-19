<?php
    include("connection.php");
    session_start();

    // print_r($_SESSION["ID"]);
    // echo $_SESSION["ID"];
    $data  = json_decode(file_get_contents("php://input"), true);
    // print_r($data["Pickup_data"]);
    // print_r($data["Pickup_people"]);
    // print_r( $_SESSION["ID"]);


    $sql = " INSERT INTO shopping_list ( MEMBER_ID , SHOPPING_DATE, SITUATION , DELIVERY_DATE , RECEIVER , RECEIVER_PHONE , RECEIVER_LOCATION ) 
    VALUES (:MEMBER_ID, NOW() ,1,:DELIVERY_DATE,:RECEIVER,:RECEIVER_PHONE,:RECEIVER_LOCATION) ";
    
    $statement = $pdo->prepare($sql);
    $statement->bindValue(":MEMBER_ID", $_SESSION["ID"]);
    $statement->bindValue(":DELIVERY_DATE", $data["Pickup_data"]);
    $statement->bindValue(":RECEIVER", $data["Pickup_people"]);
    $statement->bindValue(":RECEIVER_PHONE", $data["Pickup_Tel"]);
    $statement->bindValue(":RECEIVER_LOCATION", $data["Pickup_Location"]);

    $statement->execute(); 
    echo("ok");

    // $data['Pickup_data']
    // $data['Pickup_people']
    // $data['Pickup_Tel']
    // $data['Pickup_Location']
?>