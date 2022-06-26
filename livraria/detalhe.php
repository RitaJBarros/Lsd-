<div class="lista-livros">


    <?php

    $id_a_procurar= $_GET['id_do_livro'];

        $sql = "select * from livros 
        INNER JOIN editoras ON id_editora = fk_id_editora
        where id_livro= $id_a_procurar";
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
    <div class="lista-autores">
        <ul>
          <?php       
                $sqlAutores="select * from autores inner join livros_has_autores on id_autor = autores_id_autor 
                where livros_id_livro=$id_a_procurar";

                $resultadoAutores = $ligacao->query($sqlAutores);

                while($linhaAutores= mysqli_fetch_assoc($resultadoAutores)){
            ?>
                     <li>
                            <?php 
                                echo $linhaAutores['nome_autor'];
                            ?>
                    </li>
                <?php   
                }
                ?>

        

           
        </ul>

    </div>



</div>