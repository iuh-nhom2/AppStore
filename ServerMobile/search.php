<?php
	require "connect.php";
	$json = file_get_contents("php://input");
	$obj = json_decode($json,TRUE);

	$search = $obj["SEARCH"];
	// $search = "Binh Thien Van";
	$sql = "SELECT *from oggetti where  Nominativo='$search' or codice='$search'";

	$data = mysqli_query($connect,$sql);
	$count = mysqli_num_rows($data);
	$mangorderReparation = array();
	while ($row = mysqli_fetch_assoc($data)){
		array_push(($mangorderReparation), new OrderPara(
			$row['ID'],
			$row['Nominativo'],
			$row['Telefono'],
			$row['Guasto'],
			$row['Categoria'],
			$row['Modello'],
			$row['dataApertura'],
			$row['email'],
			$row['images'],
			$row['password'],
			$row['serial'],
			$row['Commenti']
			
		));
	}
	
	if($count >=1){
		echo json_encode($mangorderReparation);
	}else{
		$a = "Undefined order";
		$array= array('tb'=>$a);
		echo json_encode($array);
	}
	class OrderPara{
		function OrderPara($id,$namecustomer,$phone,$guasto,$categoria,$Modello,$datacapertura,$email,$images,$password,$serial,$commenti){
			$this->ID = $id;
			$this->Nominativo = $namecustomer;
			$this->Telefono = $phone;
			$this->Guasto =$guasto;
			$this->Categoria = $categoria;
			$this->Modello =$Modello;
			$this->dataApertura =$datacapertura;
			$this->email =$email;
			$this->images=$images;
			$this->password=$password;
			$this->serial=$serial;
			$this->Commenti=$commenti;
		}
	}
?>