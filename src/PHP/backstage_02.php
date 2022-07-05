<?php

       include("connection.php");

       //建立SQL語法
       $sql = "SELECT * FROM member";

       //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       $statement = $pdo->query($sql);

       //抓出全部且依照順序封裝成一個二維陣列
      $data = $statement->fetchAll();

       // print_r($data);

      // $process_data = [];
       //將二維陣列取出顯示其值
       // foreach($data as $index => $row){
       //        $temp = [];

       //        for($i=0; $i<(count($row)/2); $i++){
                     
       //               array_push($temp, $row[$i]);
       //        }

       //        array_push($process_data, $temp);
       // }

       // print_r($process_data[0]);
       function data_slice($data){
              $process_data = [];
              $ten_list = [];
              
              foreach($data as $index => $row){
      
                  //每一列資料，只留index是數字的部分，去除掉index欄位名
                  $temp = [];
                  for($i=0; $i<(count($row)/2); $i++){
                          array_push($temp, $row[$i]);
                  }
      
                  //切割每十筆資料為一個新陣列
                  array_push($ten_list, $temp);
                  if((($index%10) == 9) or ($index == (count($data)-1))){
                          array_push($process_data, $ten_list);
                          $ten_list = [];
                  }
              }
      
              return $process_data;
          }
      
       $process_data = data_slice($data);
       echo json_encode($process_data);

?>