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
    //把陣列切成10個一包
//     function data_slice($data){
//        $process_data = [];
//        $ten_list = [];
       
//        foreach($data as $index => $row){

//            //每一列資料，只留index是數字的部分，去除掉index欄位名
//            $temp = [];
//            for($i=0; $i<(count($row)/2); $i++){
//                    array_push($temp, $row[$i]);
//            }

//            //切割每十筆資料為一個新陣列
//            array_push($ten_list, $temp);
//            if((($index%10) == 9) or ($index == (count($data)-1))){
//                    array_push($process_data, $ten_list);
//                    $ten_list = [];
//            }
//        }

//        return $process_data;
//    }
// $resultArr = [];
// foreach($process_data as $index =>$item){
//        $tenarr1 = [];
//        $tenarr2 = [];

//        if($index < 10){
//         array_push($tenarr1,$item);
       
//        }else{
//        array_push($tenarr2,$item);
       
//        };
// };
// array_push($resultArr, $tenarr1);
// array_push($resultArr, $tenarr2);


echo json_encode($process_data);
// $process_data = data_slice($ALLDATA);
// print_r($process_data);
// echo json_encode($resultArr);




?>