<?php

    include("connection.php");
  

    $data = json_decode(file_get_contents('php://input'), true);
    // echo gettype($data);
    // print_r($data);
    // echo $data["account"];
 

     //建立SQL語法
     $sql = "INSERT INTO stellarx.member (ACCOUNT, PASSWORD, PERSONAL_ID, NAME, LASTNAME, E_MAIL, CELLPHONE, BUSINESS, MEMBER_DATE, SITUATION) 
     VALUES (`$data['account']`, `$data['password']`, `$data['id']`, `$data['name']`, `$data['lastName']`, `$data['email']`, `$data['cellphone']`, `$data['companyNum']`, `Now()`, 1)";
     $pdo->exec($sql);
     echo "ok";

    //  select * from member where Name = '".$Name."' and PWD = '".$PWD."'

    
    

    //  //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
      // echo $sql; 
     //$statement = $pdo->query($sql);

    //  //抓出全部且依照順序封裝成一個二維陣列
     //$data = $statement->fetchAll();
    
    //  if(count($data)== 0){
    //     echo("true");
    //  }else{
    //     echo("false");
    //  }
     // print_r($data);

    //  $process_data = [];
     //將二維陣列取出顯示其值
    //  foreach($data as $index => $row){
    //         $temp = [];

    //         for($i=0; $i<(count($row)/2); $i++){
                   
    //                array_push($temp, $row[$i]);
    //         }

    //         array_push($process_data, $temp);
    //  }

     // print_r($process_data[0]);
    //  echo json_encode($process_data);



    // echo $_POST ;
   

?>