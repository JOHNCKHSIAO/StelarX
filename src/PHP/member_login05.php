<?php

       include("connection.php");
       session_start();

       //建立SQL語法
       $sql = "select v.SHOPPING_ID , v.DELIVERY_DATE ,v.LAST_NAME ,v.NAME, v.RECEIVER_PHONE ,v.RECEIVER_LOCATION ,v.COMMODITY_NAME ,v.QUANTITY,c.images
       from v_member_shopping v
              join commodity c
                     on v.COMMODITY_NAME = c.COMMODITY_NAME where ACCOUNT = :account";

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