<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
print_r($_POST);

require 'conncet.php';
$postdata = file_get_contents("php://input");




$request = json_decode($postdata);

print_r($request);



// echo($request->sub_id);
// console.log($request);
    $cat_id = $_POST['cat_id'];
    $sub_id = $_POST['sub_id'];
	$product_name = $_POST['product_name'];
    $descrption = $_POST['description'];
    $created_time =  date('Y/m/d');
  
  
   
    move_uploaded_file($_FILES["selectedFile"]["tmp_name"], "E:/study/reactcrude/public/images/" . $_FILES["selectedFile"]["name"]);
	
	   $sql = "INSERT INTO `product` (`p_id`, `cat_id`, `sub_id`, `product_name`, `image`, `descrption`, `status`, `created_time`, `created_by`, `created_ip`, `edited_time`, `edited_by`, `edited_ip`) VALUES (NULL, '{$cat_id}', '{$sub_id}', '{$product_name}', 'images/".$_FILES["selectedFile"]["name"]."', '{$descrption}', '1', '{$created_time}', '', '', '', '', '');";

         if (mysqli_query($con,$sql))
        {
         	http_response_code(201);
        }
         else{
         	http_response_code(422);
        }       

?>