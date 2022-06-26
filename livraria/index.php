<?php

  session_start();
  include('config.php');

?>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
<title>Livraria Curso PHP</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="">
<meta name="keywords" content="">
<link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
<div id="container">
	<div id="header">
<div id="navigation"> 

<div id="menu-container"> 
  
       <?php include('menu.php');?>
        
    </div><div class="clear"></div>                   
</div> 
	
</div>

	
    <div id="wrap"><!-- Geral -->
    	<div id="navcontainer">

      <?php include('esquerda.php');?>
		
		</div>
	
   <div id="content">
  <?php 

    if(isset($_GET['area'])){
      $area_a_carregar = $_GET['area'];

      switch($area_a_carregar){
        case 'lista-livros': { include('lista.php');} break;
        case 'registo' : { include('registo.php');} break;
        case 'sobre' :{ include('sobre.php');} break;
        case 'Contactos' : {include('contacto.php');} break;
        case 'detalhe' : {include('detalhe.php');} break;
        default : { include('erro.php'); } 
      }

    } else{
      include('home.php');
    }

  

   
  

  ?> 

	</div>
	<div id="subcontent">
	
  <?php include('topvendas.php');?>
  
</div>

    
	<div id="footer">
	<?php include('footer.php');?>
	</div>
</div>
</div>
</body>
</html>