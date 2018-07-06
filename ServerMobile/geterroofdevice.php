<?php 
	require "connect.php";
	$sql ="SELECT Guasto FROM oggetti";
	$data = mysqli_query($connect,$sql);
	$mangerroofdevice = array();
	while ($row = mysqli_fetch_assoc($data)){
		array_push(($mangerroofdevice), new Guasto(
			
			$row['Guasto']
			
			
		));
	}
	echo json_encode($mangerroofdevice);
	class Guasto{
		function Guasto($guasto){
			$this->Guasto =$guasto; 
		}
	}
?>
