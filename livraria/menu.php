


<ul>  
        	<li><a href="index.php">Livraria Online</a></li>          
            <li><a href="index.php">Home<span>Ir para a homepage</span></a></li> 
            <li><a href="index.php?area=lista-livros">Livraria<span>procure um livro</span></a></li> 


<?php

    if(isset($_SESSION['id_cliente'])){ ?>
    
        <li><a href="logout.php?area=registo">logout<span>sair</span></a></li> 
<?php 
} else {
    ?>

    <li>
    <a href="index.php?area=registo">registo<span>registe-se para comprar</span></a></li>

<?php
}
?>

    
 



    
            
    

            
            <li><a href="index.php?area=sobre">Sobre nós<span>saiba mais sobre  nós</span></a></li> 
            <li><a href="index.php?area=Contactos">Contactos<span>contacte a livraria</span></a></li>                              
        </ul>