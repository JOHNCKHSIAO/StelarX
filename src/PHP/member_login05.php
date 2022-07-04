<?php

       include("connection.php");
       session_start();

       //建立SQL語法
       $sql = "select SHOPPING_ID , DELIVERY_DATE ,LAST_NAME ,NAME, RECEIVER_PHONE ,RECEIVER_LOCATION ,COMMODITY_NAME ,QUANTITY
       from v_member_shopping3 where ACCOUNT = :account";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       // $statement = $pdo->query($sql);

       $statement = $pdo->prepare($sql);
       $statement->bindValue(":account" ,$_SESSION["memberAccount"]);
       // echo $_SESSION["memberAccount"];
       // echo $sql;



       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();
       $statement->execute();
       $member  =  $statement->fetchAll();
       // print_r($data);

       $process_data = [];
       // //將二維陣列取出顯示其值
       foreach($member as $index => $row){
              $temp = [];

              for($i=0; $i<(count($row)/2); $i++){
                     
                     array_push($temp, $row[$i]);
              }

              array_push($process_data, $temp);
       }

       // print_r($process_data[0]);
       echo json_encode($process_data);


?>