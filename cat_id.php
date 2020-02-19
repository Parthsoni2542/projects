<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';
error_reporting(E_ERROR);
$cat_ids = [];
// "SELECT`cat_name` FROM `category` INNER JOIN subcategory ON category.cat_name=subcategory.sid" 
// $sql= "SELECT `cat_id` ,`category_name` FROM `category`";

  $sql = "SELECT * FROM category ";
  // $result = mysqli_query($conn,$sql);

// $query = "SELECT subcategory.sub_id ,category.category_name, category.cat_id , subcategory.subcategory_name FROM category , subcategory WHERE category.cat_id  = subcategory.cat_id";
  // $res = mysqli_query($con,$query);
  

if ($result=mysqli_query($con,$sql))
 {
  $cr=0;
  while ($row = mysqli_fetch_assoc($result)) 
  {
    // $cat_ids[$cr]['sub_id'] = $row['sub_id']; 
    $cat_ids[$cr]['cat_id'] = $row['cat_id'];
    $cat_ids[$cr]['category_name'] = $row['category_name'];
    // $students[$cr]['email'] = $row['email'];
    $cr++;
  }
  //print_r($students)

echo json_encode($cat_ids);
// echo json_encode($sub_ids);
}
else{
  http_response_code(404);
}

?>