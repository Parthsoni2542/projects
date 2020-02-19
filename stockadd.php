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
// console.log($request);
 //    $v_id = $request->v_id;
 //    $p_id = $request->p_id;
	// $date = $request->date;
 //    $bill_no = $request->bill_no;
 //    $quantity = $request->quantity;
 //    $image = $request->image;
 //    $created_time =  date('Y/m/d');

    $v_id = $_POST['v_id'];
    $p_id = $_POST['p_id'];
    $date = $_POST['date'];
    $bill_no = $_POST['bill_no'];
    $quantity = $_POST['quantity'];
    $created_time =  date('Y/m/d');




      move_uploaded_file($_FILES["selectedFile"]["tmp_name"], "E:/study/reactcrude/public/img/" . $_FILES["selectedFile"]["name"]);
    // echo $created_date;
   
    $sql = "INSERT INTO `stocks` (`stock_id`, `v_id`, `p_id`, `date`, `bill_no`, `quantity`, `bill_image`,`status`,`created_time`, `created_by`, `created_ip`, `edited_time`, `edited_by`, `edited_ip`) VALUES (NULL, '{$v_id}', '{$p_id}', '{$date}','{$bill_no}','{$quantity}','img/".$_FILES["selectedFile"]["name"]."','1', '{$created_time}', '', '', '', '', '');";

	//
	// $sql = "INSERT INTO `stocks`(`v_id`,`p_id`,`date`,`bill_no`,`quantity`,`image`,`created_time`) VALUES ('{$v_id}','{$p_id}','{$date}','{$bill_no}','{$quantity}','{$image}','{$created_time}')";

         if (mysqli_query($con,$sql))
        {
         	http_response_code(201);
        }
         else{
         	http_response_code(422);
        }


?>