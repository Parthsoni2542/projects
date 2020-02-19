<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");


require 'conncet.php';

error_reporting(E_ERROR);
$categorys = [];

$sql= "SELECT * FROM category";

if ($result=mysqli_query($con,$sql))
 {
	$cr=0;
	while ($row = mysqli_fetch_assoc($result)) 
	{
		$categorys[$cr]['cat_id'] = $row['cat_id'];  // id pass kari ho e
		$categorys[$cr]['category_name'] = $row['category_name'];
		$cr++;
	}
	// exit(0);
// print_r($students)
echo json_encode($categorys);
}
else{
	http_response_code(404);
}



?>