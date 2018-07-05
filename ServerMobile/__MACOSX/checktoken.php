<?php
	$token =$_GET["token"];

	require ("jwt.php");

	$json = JWT::decode($token,"TOKEN_LOGIN_FROMVN", true);
	echo json_encode($json);
?>