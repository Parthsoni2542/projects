<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
print_r($_POST);
require 'conncet.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) 
{
	$request  = json_decode($postdata);

	// print_r($request);

print_r($request);
	//Sanitize 

$category_name= $request->category_name;
$created_time =  date('Y/m/d');
$created_ip = $_SERVER['REMOTE_ADDR'];

	$sql = "INSERT INTO `category`(
		`category_name`,`created_time`,
        `created_ip`
		) VALUES 
		('{$category_name}',
		'{$created_time}',
        '{$created_ip}')
         ";


         if (mysqli_query($con,$sql))
          {
         	http_response_code(201);
         }
         else
         {
         	http_response_code(422);
         }
}

?>