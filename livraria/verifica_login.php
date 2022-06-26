<?php

print_r($_POST);


$email = $_POST['email'];

$pass = $_POST['password'];



include('config.php');


$sql="select * from clientes where email_cliente='$email' and password_cliente='$pass'";

// echo $sql;
// die();

$resultado = $ligacao->query($sql);

$num_resultados = mysqli_num_rows($resultado);

// echo $num_resultados;


if($num_resultados != 1){
    header('location:index.php?status_login=erro');

}else{
    echo"login correcto";
    session_start();

    $info_utilizador = mysqli_fetch_assoc($resultado);
    /*echo "<pre>";
    print_r($info_utilizador);
    echo "</pre>";*/

    $_SESSION['id_cliente'] = $info_utilizador['id_cliente'];

    $_SESSION['nome_cliente'] = $info_utilizador['nome_cliente'];

    header('location:index.php');

}


?>