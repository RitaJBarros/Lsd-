function accao_do_botao() {
    console.log('entrei na funcao');
    // ir buscar o numero que o user introduziu
    numero_introduzido = document.getElementById('numero_do_utilizador').value;
    console.log(numero_introduzido);
    document.getElementById('zona_de_resultados').style = "border:none";


    if (numero_introduzido != '' && isNaN(numero_introduzido) == false) {
        if (numero_introduzido % 2 == 0) {
            mensagem = "o numero é par";
        } else {
            mensagem = "o numero é impar";
        }
    } else {
        mensagem = "introduzido_numero";
        document.getElementById('zona_de_resultados').style = "border:1px solid red";
    }


    //alert(mensagem);
    document.getElementById('zona_de_resultados').innerText = mensagem;

}