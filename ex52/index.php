<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="submeteFrom.php" method="post">
         <ul>
             <li>
                 Nome : <input type="text" name="nome_inserido">

            </li>

            <li>
                 Email : <input type="text" name="email_inserido">

            </li>

            <li>
                 Genero: F<input type="radio" name="genero" value="feminino"> /
                 M<input type="radio" name="genero" value="masculino">

            </li>

            <li>
                 interesses: 
                 Musica <input type="checkbox" name="interesses[]" value="Musica"> /
                 Cinema <input type="checkbox" name="interesses[]" value="Cinema"> /
                 Arte <input type="checkbox" name="interesses[]" value="Arte" > 
                 

            </li>


            <li>
                <button>Enviar</button>

            </li>









         <ul>
   </form>

</body>
</html>