<?php


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

    include("connection.php");

    $sql = "SELECT * FROM stellarx.V_route_flight_time";
    $statement = $pdo->query($sql);
    $data = $statement->fetchAll();


    echo json_encode(data_slice($data));


?>