<?php
 	$json = file_get_contents("php://input");
	$obj = json_decode($json,TRUE);
	$username = $obj["USERNAME"];
	$password = $obj["PASSWORD"];
	require("jwt.php");
	require("connect.php");
	

	$sql = "SELECT *FROM impostazioni where admin_user = '$username' and admin_password='$password'";

	$result = mysqli_query($connect,$sql);
	$count = mysqli_num_rows($result);
	if($count == 1){
		$user = mysqli_fetch_array($result);
		 $token = array();
		$token["id"] = $user["id"];
		$token["Lingua"] = $user["lingua"];
		$token["Showcredit"] = $user["showcredit"];
		$token["Disclaimer"] = $user["disclaimer"];
		$token["Admin_user"] = $user["admin_user"];
		$token["Valuta"] = $user["valuta"];
		
	$jsonwebtoken = JWT::encode($token,"TOKEN_LOGIN_FROMVN");
	 echo JsonHelper::getJson("token",$jsonwebtoken);
	}else{
		$a ="Error";
		$arrayer = array('token'=>$a);
		echo json_encode($arrayer);	

	}
?>