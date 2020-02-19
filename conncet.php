<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME','stock');  //database name

//conncect with database


function connect(){
	$connect =  mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

	if (mysqli_connect_errno($connect)) {

		die("Failed to connect: " .mysqli_connect_error());
	}
	mysqli_set_charset($connect, "utf8");
	// echo "connection success";

	return $connect;
}

$con = connect();

?>