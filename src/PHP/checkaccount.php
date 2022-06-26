<?php

    include("connection.php");

    $data = json_decode(file_get_contents('php://input'), true);
    //echo $data["account"]; //ok 有值
   //echo gettype($data); // ok 是array
   $abc = array_key_exists("account",$data); //判斷是否有"account" 這個key 因為有可能要驗證ID
   //  echo $abc; //回傳布林值 但是echo 會是0 或1

    if ($abc==true){
      $accountValue = $data["account"];
      $sql = "SELECT ACCOUNT FROM stellarx.member where ACCOUNT = '$accountValue'" ;
      $statement = $pdo->query($sql);
      $data = $statement->fetchAll();
      if(count($data)== 0){
        echo("accountOK");
      }else{
        echo("accountFalse");
      }

    }else{
      //echo "elseOK";
      $inputIDValue = $data["inputID"];
      //echo $inputIDValue;
      $sql = "SELECT PERSONAL_ID FROM stellarx.member where PERSONAL_ID = '$inputIDValue'";
      // echo $sql;
      $statement = $pdo->query($sql);
      $data = $statement->fetchAll();
      // print_r($data);
      if(count($data)== 0){
        echo("idOK");
      }else{
        echo("idFalse");
      }
    }

   //  $abc? $accountValue = $data["account"] : $inputIDValue = $data["inputID"];
   //  $abc? $sql = "SELECT ACCOUNT FROM stellarx.member where ACCOUNT = '.$accountValue'" :   $sql = "SELECT PERSONAL_ID FROM stellarx.member where PERSONAL_ID = '.$inputIDValue'";
  
   

     //建立SQL語法

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