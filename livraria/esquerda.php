<?php

    if(isset($_SESSION['id_cliente'])){
        echo "ola, Sr(a) ". $_SESSION['nome_cliente'];
    } else {

            

?>




<form action="verifica_login.php" method="post">>

<ul>
      <li> login <input Type="text" name="email"></li>
      <li> password <input Type="password" name="password"></li>
      <li> <button>Entrar</button></li>
</ul>



</form>

<?php

    }

?>



<?php

    if(isset($_GET['status_login']) && $_GET['status_login']=='erro'){
        echo "login errrado !!";
    }


?>
