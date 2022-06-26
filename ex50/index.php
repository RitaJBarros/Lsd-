<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <ul>
   
        <?php 

    include('dados.php');



    for($i=0;$i<count($lista_de_compras);$i++){ 
        if($i % 2 == 0){
            $classse_a_ser_mostrada="cor-1";
        }else{
            $classse_a_ser_mostrada="cor-2";
        }
        ?>


        <li class="cor-1">
            <?php echo $lista_de_compras[$i]; ?>

        </li>
        <?php
    }  
    ?>
 

    </ul>
  



    
</body>
</html>