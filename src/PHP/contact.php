<?php

// $_POST = json_decode(file_get_contents("php://input"), true);

// echo "成功";
// print_r($_POST);
 //MySQL相關資訊
 $db_host = "stellarx02.cpvupuwvckud.us-west-1.rds.amazonaws.com";
 $db_user = "stelarx";
 $db_pass = "password";
 $db_select = "stellarx";

 //建立資料庫連線物件
 $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

 //建立PDO物件，並放入指定的相關資料
 $pdo = new PDO($dsn, $db_user, $db_pass);

 //---------------------------------------------------
  //建立SQL
  $sql = "INSERT INTO stellarx.message(Name, PWD, CreateDate) VALUES ('王小明', 'abc123', NOW())";

  //執行
  $pdo->exec($sql);

  echo "新增成功!"


    echo $_GET['option'];

?>