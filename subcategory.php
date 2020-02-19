<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'conncet.php';
error_reporting(E_ERROR);
$cat_names = [];

  $sql = "SELECT * FROM subcategory INNER JOIN category ON subcategory.sub_id = subcategory.cat_id";
  "SELECT * FROM category";

  $res = mysqli_query($con,$query);
  

if ($result=mysqli_query($con,$sql))
 {
  $cr=0;
  while ($row = mysqli_fetch_assoc($result)) 
  {
    $cat_names[$cr]['cat_id'] = $row['cat_id']; 
    $cat_names[$cr]['category_name'] = $row['category_name'];
    $cr++;
  }
  //print_r($students)

echo json_encode($cat_names);
}
else{
  http_response_code(404);
}

?>