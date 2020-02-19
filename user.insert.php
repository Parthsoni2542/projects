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

	$first_name= $request->first_name;
	$middle_name= $request->middle_name;
	$last_name= $request->last_name;
	$email= $request->email;
	$mobile_no= $request->mobile_no;
	$mobile_no2= $request->mobile_no2;
	// $password = $request->password;		
	$password = md5($password);
	$created_time =  date('Y/m/d');


	//

	$sql = "INSERT INTO `users`(
		`first_name`,
		`middle_name`,
		`last_name`,
		`email`,
		`mobile_no`,
		`mobile_no2`,
		`password`,
		`created_time`
		) VALUES 
		('{$first_name}',
          '{$middle_name}',
          '{$last_name}',
          '{$email}',
          '{$mobile_no}',
          '{$mobile_no2}',
          '{$password}',
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