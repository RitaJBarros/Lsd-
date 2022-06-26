function procuranumero() {
    console.log("entrei na funcao");

    lista_inserida = document.getElementById('lista').value;
    numero_inserida = document.getElementById('numero').value;

    lista = lista_inserida;
    numero = numero_inserida;
    lista_transformada = lista.split(';');
    console.log(" o primeiro numero é :" + lista_transformada[0]);

    resultado = verificaseexiste(lista_transformada, numero);

    if (!resultado) {

        mensagem = 'nao existe na lista';
        document.getElementById('zona_de_resultados').style = "background:red ; color:black ";

    } else {
        mensagem = '  extiste na lista';
        document.getElementById('zona_de_resultados').style = "background: green ; color:white";

    }

    document.getElementById('zona_de_resultados').innerText = mensagem;

}

function verificaseexiste(lista_a_pesquisar, numero_a_procurar) {
    lista_de_numeros = lista_a_pesquisar;
    tamanho = lista_a_pesquisar.length;

    encontrou = false

    i = 0;

    while (encontrou == false && i <= 8) {
        numero_lido = lista_de_numeros[i];
        if (numero_lido == numero_a_procurar) {
            encontrou = true;
        }
        i = i + 1;
        console.log(i);

    }


    if (encontrou == true) {
        return true;
    } else {
        return false;
    }
}