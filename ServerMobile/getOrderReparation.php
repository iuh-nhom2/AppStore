<?php
	include "connect.php";
	$page = $_GET['page'];
	$item = 2;
	$limit = ($page -1 ) *$item;
	$query = "SELECT *FROM oggetti LIMIT $limit,$item ";
	$data =mysqli_query($connect,$query);
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
	echo json_encode($mangorderReparation);

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