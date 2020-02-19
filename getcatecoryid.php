<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "conncet.php";

$id = $_GET['id'];

$sql ="SELECT * FROM `category` WHERE `cat_id` ='{$id}' LIMIT 1";

$result = mysqli_query($con,$sql);
$row = mysqli_fetch_assoc($result);

// print_r($row);

echo $json = json_encode($row);
// echo json_encode(['data'=>$json]);

exit;

?>