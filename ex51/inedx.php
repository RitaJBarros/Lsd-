<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
$lista= [4,67,-1,6,89,-45,78,122];

$menor=$lista[0];
$maior=$lista[0];


    for($i=0; $i<count($lista);$i++){
        if($lista)[$i]< $menor){
            $menor = $lista [$i];
        }

        if($lista)[$i]< $maior){
            $maior = $lista [$i];
        }
    }

?>

<span> O MAIOR É: </span>

<span> O MENOR É: </span>

    
</body>
</html>