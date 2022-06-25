<?php

$_POST = json_decode(file_get_contents("php://input"), true);

echo "成功";
print_r($_POST);

?>