<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';
error_reporting(E_ERROR);
$products = [];
// "SELECT`cat_name` FROM `category` INNER JOIN subcategory ON category.cat_name=subcategory.sid" 
// $sql= "SELECT `cat_id` ,`category_name` FROM `category`";

  $sql = "SELECT * FROM product";
  $res = mysqli_query($con,$query);
    // $created_date =  date('Y/m/d');
  

if ($result=mysqli_query($con,$sql))
 {
  $cr=0;
  while ($row = mysqli_fetch_assoc($result)) 
  {
    $products[$cr]['p_id'] = $row['p_id']; 
    $products[$cr]['product_name'] = $row['product_name'];

    $cr++;
  }
  //print_r($students)

echo json_encode($products);
// echo json_encode($sub_ids);
}
else{
  http_response_code(404);
}

?>