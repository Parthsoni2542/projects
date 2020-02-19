<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';

error_reporting(E_ERROR);
$subcategorys = [];
				
				
$sql= "SELECT * FROM category INNER JOIN subcategory ON category.cat_id = subcategory.cat_id ";


if ($result=mysqli_query($con,$sql))
 {
	$cr=0;
	while ($row = mysqli_fetch_assoc($result)) 
	{
		$subcategorys[$cr]['sub_id'] = $row['sub_id'];  // id pass kari ho e
		$subcategorys[$cr]['category_name'] = $row['category_name'];
		$subcategorys[$cr]['subcategory_name'] = $row['subcategory_name'];
		$cr++;
	}
	// print_r($students)

echo json_encode($subcategorys);
}
else{
	http_response_code(404);
}

?>