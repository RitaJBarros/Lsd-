<?php
  $informacao_recebida =$_POST;
  echo "<pre>";
  print_r($informacao_recebida);
  echo "<pre>";

 $nome_recebido=$POST['nome_inserido'];
 echo " o nome recebido é: $nome_recebido";
 $interesses_recebidos=$_POST['interesses'];


 for($i=0; $i<cpunt($interesses_recebidos);$i++){
     echo $interesses_recebido[$i]."<br>";
 }

?>