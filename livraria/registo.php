<form method="post" action="regista_cliente.php">
    <ul>

    <li>Nome <input type="text" name="nome"></li>
    <li>Email <input type="email" name="email"></li>
    <li>Nif <input type="text" name="nif"></li>
    <li>Password <input type="password" name="password"></li>
    <li><button>Registar</button></li>
    </ul>

</form>

<?php

    if(isset($_GET['status']) && $_GET['status']=='sucesso'){
        echo "registo efectuado com sucesso !!";
    }


?>