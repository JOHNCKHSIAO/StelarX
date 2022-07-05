<?php
 include("connection.php");
 $sql = "select SHOPPING_LIST_ID ,SHOPPING_DATE ,LASTNAME ,NAME ,sum(MILE) as TOTALLMILES from v_backstage04 where SHOPPING_LIST_ID = :id " ;
 $ALLDATA = [];
 for($i=1;$i<22;$i++){

    $statement = $pdo->prepare($sql);
    $statement->bindValue(":id",$i);
    $statement->execute();
    $data = $statement->fetchAll();
    array_push($ALLDATA , $data);
}

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
    //    print_r($process_data);//ok成功 
    echo json_encode($process_data);



?>