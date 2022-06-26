<?php 

print_r($_POST);

$nome = $_POST['nome'];
$email = $_POST['email'];
$nif = $_POST['nif'];
$pass = $_POST['password'];


include('config.php');


$sql="insert into clientes(nome_cliente, nif_cliente, email_cliente, password_cliente)
values ('$nome' , '$nif' , '$email' ,'$pass' )";


$resultado = $ligacao->query($sql);

//echo $sql;

header('location:index.php?area=registo&status=sucesso');


?>