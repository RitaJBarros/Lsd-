function Verificarpremio() {
    alert('entrei na funcao');


    //vou buscar a aposta
    apostainserida = document.getElementById("aposta").value;
    aposta = apostainserida.split(';');

    estrelasapostainserida = document.getElementById('estelas_aposta').value;
    estelasaposta = estrelasapostainserida.split(';');


    estrelaschaveinserida = document.getElementById('estelas_chave').value;
    estelaschave = estrelaschaveinserida.split(';');

    chaveinserida = document.getElementById("chave").value;
    chave = chaveinserida.split(';');

    encontardos = 0

    for (i = 0; i < 5; i++) // i = i+1
    {
        numero_lido = aposta[i]
        if (
            numero_lido == chave[0] ||
            numero_lido == chave[1] ||
            numero_lido == chave[2] ||
            numero_lido == chave[3] ||
            numero_lido == chave[4]
        ) {
            encontardos++;
            //encontardos = encontardos + 1
        }

    }

    estelas_encontardas = 0;

    for (i = 0; i < 2; i++) {
        numero_lido = estelasaposta[i];
        if (
            numero_lido == estelaschave[0] ||
            numero_lido == estelaschave[1]) {
            estelas_encontardas++;
        }

    }


    alert(estelas_encontardas);

    if (encontardos == 5 && estelas_encontardas == 2) {
        mensagem = 'ganhou 1 premio';

    } else if (encontardos == 5 && estelas_encontardas == 1) {
        mensagem = 'ganhou 2 premio';

    } else if (encontardos == 5 && estelas_encontardas == 0) {
        mensagem = 'ganhou 3 premio';

    } else if (encontardos == 4 && estelas_encontardas == 2) {
        mensagem = 'ganhou 4 premio';

    } else if (encontardos == 4 && estelas_encontardas == 1) {
        mensagem = 'ganhou 5 premio';

    } else if (encontardos == 3 && estelas_encontardas == 2) {
        mensagem = 'ganhou 6 premio';

    } else if (encontardos == 4 && estelas_encontardas == 0) {
        mensagem = 'ganhou 7 premio';

    } else if (encontardos == 2 && estelas_encontardas == 2) {
        mensagem = 'ganhou 8 premio';

    } else if (encontardos == 3 && estelas_encontardas == 1) {
        mensagem = 'ganhou 9 premio';

    } else if (encontardos == 3 && estelas_encontardas == 0) {
        mensagem = 'ganhou 10 premio';

    } else if (encontardos == 1 && estelas_encontardas == 2) {
        mensagem = 'ganhou 11 premio';

    } else if (encontardos == 2 && estelas_encontardas == 1) {
        mensagem = 'ganhou 12 premio';

    } else if (encontardos == 2 && estelas_encontardas == 0) {
        mensagem = 'ganhou 13 premio';

    } else {
        mensagem = 'nada premio';
    }


    document.getElementById("resultado").innerText = mensagem;




    alert(encontardos)

}