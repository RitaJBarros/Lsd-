onkeydown = function(tecla) {

    //alert("carreguei");
    console.log(tecla.key);

    tecla_presionada = tecla.key;

    carro = this.document.getElementById('carro');
    altura_janela = window.innerHeight;
    largura_janela = window.innerHeight;

    switch (tecla_presionada) {
        case "ArrowUp":
            {

                console.log("vou andar para cima");

                //ir buscar a posicao de um elemento
                posicao_inicial = carro.offsetTop;
                console.log(posicao_inicial);
                nova_posicao = posicao_inicial - 10;

                carro.src = "imagens/carro_cima.png";
                if (nova_posicao <= -100) {
                    nova_posicao = altura_janela;

                }

                carro.style.top = nova_posicao + "px";



            }
            break;


        case "ArrowDown":
            {
                console.log("vou andar para baixo");




                posicao_inicial = carro.offsetTop;
                nova_posicao = posicao_inicial + 10;

                carro.src = "imagens/carro_baixo.png";
                if (nova_posicao >= altura_janela) {
                    nova_posicao = -100;

                }

                carro.style.top = nova_posicao + "px";



            }
            break;


        case "ArrowLeft":
            {
                console.log("vou andar para esq");


                posicao_inicial = carro.offsetLeft;
                nova_posicao = posicao_inicial - 10;

                if (nova_posicao < -100) {
                    nova_posicao = largura_janela;
                }

                carro.src = "imagens/carro_esquerda.png";
                carro.style.left = nova_posicao + "px";

            }
            break;

        case "ArrowRight":
            {
                console.log("vou andar para Dir");

                posicao_inicial = carro.offsetLeft;
                nova_posicao = posicao_inicial + 10;

                carro.src = "imagens/carro_direita.png";
                if (nova_posicao >= largura_janela) {
                    nova_posicao = 0;

                }
                carro.style.left = nova_posicao + "px";
            }
            break;




    }
}