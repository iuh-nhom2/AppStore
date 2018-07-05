<?php
	require "connect.php";

	$json = file_get_contents("php://input");
	$obj = json_decode($json,TRUE);

	$id = $obj["ID"];
	// $id=25;
	$sql = "DELETE From oggetti where ID='$id'";
	if(mysqli_query($connect,$sql)){
		$a = "Success";
		$array = array('tb'=>$a);
		echo json_encode($array);
	}
	else{
		$b ="Failed";
		$arrayer =array('tb'=>$a);
		echo json_encode($arrayer);
	}
?>