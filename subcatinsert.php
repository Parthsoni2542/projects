<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
print_r($_POST);

require 'conncet.php';
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) 
{

$request = json_decode($postdata);

print_r($request);
// console.log($request);

	$subcategory_name = $request->subcategory_name;
    $cat_id = $request->cat_id;
    $created_time =  date('Y/m/d');

	//
	$sql = "INSERT INTO `subcategory`(`cat_id`,`subcategory_name`,`created_time`) VALUES ('{$cat_id}','{$subcategory_name}','{$created_time}')";

         if (mysqli_query($con,$sql))
        {
         	http_response_code(201);
        }
         else{
         	http_response_code(422);
        }
}

?>