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

	$bulding_name= $request->bulding_name;
	$bulding_address= $request->bulding_address;
	$bulding_area= $request->bulding_area;
	$bulding_state= $request->bulding_state;
	$bulding_city= $request->bulding_city;
	$created_time =  date('Y/m/d');


	//

	$sql = "INSERT INTO `bulding`(
		`bulding_name`,
		`bulding_address`,
		`bulding_area`,
		`bulding_state`,
		`bulding_city`,
		`created_time`
		) VALUES 
		('{$bulding_name}',
          '{$bulding_address}',
          '{$bulding_area}',
          '{$bulding_state}',
          '{$bulding_city}',
          '{$created_time}')
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