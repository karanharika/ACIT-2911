<?php
if (($_FILES['my_file']['name']!="")){
// Where the file is going to be stored
	$target_dir = "upload/";
	$file = $_FILES['my_file']['name'];
	$path = pathinfo($file);
	$filename = $path['filename'];
	$ext = $path['extension'];
	$temp_name = $_FILES['my_file']['tmp_name'];
	$path_filename_ext = $target_dir.$filename.".".$ext;
 
// Check if file already exists
if (file_exists($path_filename_ext)) {
	$message = "This file has already been uploaded!";
	echo "<script type='text/javascript'>alert('$message');
	window.location.href='demotab2.html'</script>";

 }else{
 move_uploaded_file($temp_name,$path_filename_ext);
  $message = "Congratulations! File Uploaded Successfully.";
	echo "<script type='text/javascript'>alert('$message');
	window.location.href='demotab2.html'</script>";
 
 }
}else{
	$message = "No file selected.";
	echo "<script type='text/javascript'>alert('$message');
	window.location.href='demotab2.html'</script>";
}
?>