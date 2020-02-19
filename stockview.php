<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';

error_reporting(E_ERROR);
$stockadd = [];

$sql= "SELECT * FROM stocks JOIN product ON stocks.v_id = product.p_id JOIN vender ON vender.v_id = product.p_id ORDER BY stock_id";

if ($result=mysqli_query($con,$sql))
 {
	$cr=0;
	while ($row = mysqli_fetch_assoc($result)) 
	{	$stockadd[$cr]['stock_id'] = $row['stock_id'];
		$stockadd[$cr]['vender_name'] = $row['vender_name'];  // id pass kari ho e
		$stockadd[$cr]['product_name'] = $row['product_name'];
		$stockadd[$cr]['date'] = $row['date'];
		$stockadd[$cr]['bill_no'] = $row['bill_no'];
		$stockadd[$cr]['quantity'] = $row['quantity'];
		$stockadd[$cr]['bill_image'] = $row['bill_image'];
		$cr++;
	}
	// print_r($students)

echo json_encode($stockadd);
}
else{
	http_response_code(404);
}
?>