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

	$vender_name= $request->vender_name;
	$vender_email= $request->vender_email;
	$vender_address= $request->vender_address;
	$vender_state= $request->vender_state;
	$vender_city= $request->vender_city;
	$vender_mo= $request->vender_mo;
	$created_time =  date('Y/m/d');



	//

	$sql = "INSERT INTO `vender`(
		`vender_name`,
		`vender_email`,
		`vender_address`,
		`vender_state`,
		`vender_city`,
		`vender_mo`,
		`created_time`
		) VALUES 
		('{$vender_name}',
          '{$vender_email}',
          '{$vender_address}',
          '{$vender_state}',
          '{$vender_city}',
          '{$vender_mo}',
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