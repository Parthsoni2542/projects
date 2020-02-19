<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';

error_reporting(E_ERROR);
$venders = [];

$sql= "SELECT * FROM vender";

if ($result=mysqli_query($con,$sql))
 {
	$cr=0;
	while ($row = mysqli_fetch_assoc($result)) 
	{
		$venders[$cr]['v_id'] = $row['v_id'];  // id pass kari ho e
		$venders[$cr]['vender_name'] = $row['vender_name'];
		$venders[$cr]['vender_email'] = $row['vender_email'];
		$venders[$cr]['vender_address'] = $row['vender_address'];
		$venders[$cr]['vender_state'] = $row['vender_state'];
		$venders[$cr]['vender_city'] = $row['vender_city'];
		$venders[$cr]['vender_mo'] = $row['vender_mo'];
		$cr++;
	}
	// print_r($students)

echo json_encode($venders);
}
else{
	http_response_code(404);
}

?>