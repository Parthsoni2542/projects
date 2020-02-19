<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';

$id=$_GET['id'];

echo $sql = "DELETE FROM `category` WHERE `cat_id` = '{$id}' LIMIT 1";

if(mysqli_query($con,$sql))
{
	http_response_code(204);
}
else{
	return http_response_code(422);
}

?>