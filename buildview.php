<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';

error_reporting(E_ERROR);
$bulding = [];

$sql= "SELECT * FROM bulding";

if ($result=mysqli_query($con,$sql))
 {
	$cr=0;
	while ($row = mysqli_fetch_assoc($result)) 
	{
		$bulding[$cr]['b_id'] = $row['b_id'];  // id pass kari ho e
		$bulding[$cr]['bulding_name'] = $row['bulding_name'];
		$bulding[$cr]['bulding_address'] = $row['bulding_address'];
		$bulding[$cr]['bulding_area'] = $row['bulding_area'];
		$bulding[$cr]['bulding_state'] = $row['bulding_state'];
		$bulding[$cr]['bulding_city'] = $row['bulding_city'];
		$cr++;
	}
	//print_r($students)

echo json_encode($bulding);
}
else{
	http_response_code(404);
}

?>