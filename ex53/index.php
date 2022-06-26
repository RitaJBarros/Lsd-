<!DOCTYPE html>
<html lang="en">
<head>
   <?php

         include('ver.php');
     ?>
</head>
<body>

    <?php
     
      $numero = $_GET['numero'];
      echo $numero;

      $palavra = $_GET['palavra'];
      echo $palavra;

    ?>
    <ul> 
   
        <li> 
            <?php echo $_GET['item1'] ?>
        </li>
        <li> 
            <?php echo $_GET['item2'] ?>
        </li>
        <li> 
            <?php echo $_GET['item3'] ?>
        </li>
        <li> 
            <?php echo $_GET['item4'] ?>
        </li>



    </ul>



</body>
</html>