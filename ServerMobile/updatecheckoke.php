<?php
	require "connect.php";
	$json = file_get_contents("php://input");
	$obj = json_decode($json, TRUE);
	
	$ID  = $obj['ID'];
	$Commenti= $obj['COMMENTI'];
	
	// $Commenti="complete";
	// $ID = "22";
	$sqlupdate = "UPDATE oggetti SET Commenti = '$Commenti' where ID = '$ID'";
	if(mysqli_query($connect,$sqlupdate)){
		$Success="Success";
		$array = array('tb'=>$Success);
		echo json_encode($array);
	}
	else{
		$Er="Error";
		$arrayer = array('tb'=>$Er);
		echo json_encode($arrayer);
	}

?>