<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
print_r($_POST);
// print_r($_POST);
require "conncet.php";

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);


	// print_r($request);

	$id = $_GET['id'];
	$category_name= $request->category_name;


	// $sql ="UPDATE `category` SET `cat_id`=[value-1],`category_name`=[value-2],`status`=[value-3],`created_time`=[value-4],`created_by`=[value-5],`created_ip`=[value-6],`edited_time`=[value-7],`edited_by`=[value-8],`edited_ip`=[value-9] WHERE 1"


	 $sql="UPDATE `category` SET `category_name=`='$category_name' WHERE `cat_id`='{$id}' LIMIT 1";

	if(mysqli_query($con, $sql))
	{
		http_response_code(204);

	}
	else{
		return http_response_code(422);
	}

}





?>