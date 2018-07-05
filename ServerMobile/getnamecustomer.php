<?php
	require "connect.php";
	$sql = "SELECT CONCAT_WS(' ',nome, cognome) as hoten from clienti";
	$data = mysqli_query($connect,$sql);
	$mangnamecustomer = array();
	while ($row = mysqli_fetch_assoc($data)){
		array_push(($mangnamecustomer), new Name(
			
			$row['hoten']
			
			
		));
	}
	echo json_encode($mangnamecustomer);

	class Name{
		function Name($namecustomer){
			
			$this->hoten = $namecustomer;
			
		}
	}

?>