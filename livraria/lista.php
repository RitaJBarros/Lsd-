<div class="lista-livros">


    <?php

        $sql = "select * from livros 
        INNER JOIN editoras ON id_editora = fk_id_editora;";
        $resultado=$ligacao->query($sql);


        while($linha = mysqli_fetch_assoc($resultado)){

        

    ?>

         <div class="detalhe-livro">
                         <div class="moldura"> 
                        <img src="img/<?php echo $linha['capa_livro']?>">
            </div>
            <div class="info-livro">
                <h2> 
                    
                    <a href="index.php?area=detalhe&id_do_livro=<?php echo $linha['id_livro']; ?>">
                   
                
                     
                     <?php       
                        echo $linha['titulo_livro'];
                     ?>


                     </a>
                  


                </h2>
                

            </div>
            <div class="area-preco"> 
                <span>
                     <?php
                        echo $linha['nome_editora'];
                     ?> 
                </span>
            <span>
                  <?php       
                        echo $linha['preco_livro'];
                    ?>
              </span>
            <a href ="#"> comprar</a>

            </div>
        
    </div>

    <?php       
}
    ?>



</div>