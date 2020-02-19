<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';

error_reporting(E_ERROR);
$users = [];

$sql= "SELECT * FROM users";

if ($result=mysqli_query($con,$sql))
 {
	$cr=0;
	while ($row = mysqli_fetch_assoc($result)) 
	{
		$users[$cr]['user_id'] = $row['user_id'];  // id pass kari ho e
		$users[$cr]['first_name'] = $row['first_name'];
		$users[$cr]['middle_name'] = $row['middle_name'];
		$users[$cr]['last_name'] = $row['last_name'];
		$users[$cr]['email'] = $row['email'];
		$users[$cr]['mobile_no'] = $row['mobile_no'];
		$users[$cr]['mobile_no2'] = $row['mobile_no2'];
		$users[$cr]['password'] = $row['password'];


		$cr++;
	}
	//print_r($students)

echo json_encode($users);
}
else{
	http_response_code(404);
}

?>