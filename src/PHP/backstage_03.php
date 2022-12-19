<?php

       include("connection.php");

       //建立SQL語法
       $sql = "select NAME_ID,COMMODITY_NAME,MILE,(ORINGIN_QUANTITY - sum(SOLD_QUANTITY)) as NOWQUALITY ,sum(SOLD_QUANTITY) as TOTALLSOLD 
       from v_backstage03
       where NAME_ID = :nameID ";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $NAME_ID = ["SSX_SCD_000","SX_WINE_000","SX_FCMASK_000","SX_TSHIRT_000","SX_CANVASBAG_000","SX_MUG_000","SX_PIN_0000","SX_KEYRING_000"];
       // echo $NAME_ID[5]; //ok有值
      
       $ALLDATA = [];
       for($i=0;$i<count($NAME_ID);$i++){

              $statement = $pdo->prepare($sql);
              $statement->bindValue(":nameID",$NAME_ID[$i]);
              $statement->execute();
              $data = $statement->fetchAll();
              array_push($ALLDATA , $data);

       }
      
       // print_r($ALLDATA);
       //這是三層的陣列  第二層只有一個值
       $process_data = [];
       foreach($ALLDATA as $item => $arr ){
              
              foreach($arr as $index => $row ){
                     
                     $temp = [];

                     for($i=0; $i<(count($row)/2); $i++){
                     
                            array_push($temp, $row[$i]);
                     }
              
              array_push($process_data, $temp);
              
              }

       }
       // print_r($process_data);//ok成功
       echo json_encode($process_data);



       // $statement = $pdo->query($sql);
       // $statement->bindValue(":NAME_ID",)

       //抓出全部且依照順序封裝成一個二維陣列
       // $data = $statement->fetchAll();

       // print_r($data);

       // $process_data = [];
       // //將二維陣列取出顯示其值
       // foreach($data as $index => $row){
       //        $temp = [];

       //        for($i=0; $i<(count($row)/2); $i++){
                     
       //               array_push($temp, $row[$i]);
       //        }

       //        array_push($process_data, $temp);
       // }

       // // print_r($process_data[0]);
       

?>