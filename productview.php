<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';

error_reporting(E_ERROR);
$productsall = [];

 $sql= "SELECT * FROM product JOIN subcategory ON product.sub_id = subcategory.sub_id JOIN category ON category.cat_id = subcategory.cat_id ORDER BY p_id";
 


// ="SELECT * FROM `category` INNER JOIN `subcategory` INNER JOIN product ON category.cat_id=subcategory.sub_id=productsall	t.cat_id"

if ($result=mysqli_query($con,$sql))
 {
	$cr=0;
	while ($row = mysqli_fetch_assoc($result)) 
	{	
		// $productsall[$cr]['cat_id']=$row['cat_id'];
		$productsall[$cr]['p_id'] = $row['p_id'];  // id pass kari ho e
		$productsall[$cr]['category_name'] = $row['category_name'];
		$productsall[$cr]['subcategory_name'] = $row['subcategory_name'];
		$productsall[$cr]['product_name'] = $row['product_name'];
		$productsall[$cr]['image'] = $row['image'];
		$productsall[$cr]['descrption'] = $row['descrption'];
		$cr++;
	}
	// print_r($productsall)

echo json_encode($productsall);
}
else{
	http_response_code(404);
}

?>