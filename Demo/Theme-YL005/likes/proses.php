<?php
	// Koneksi ke database
	include 'koneksi.php';
	
	// Ambil nilai likes dari form
	$likes = $_POST['likes'];
	
	// Query untuk menambahkan likes ke database
	$query = "UPDATE likes_table SET likes = likes + $likes";
	
	// Jalankan query
	mysqli_query($koneksi, $query);
	
	// Kembali ke form.html
	header('Location: form.html');
?>