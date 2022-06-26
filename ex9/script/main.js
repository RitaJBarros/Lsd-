function mostramenu() {
    alert('ola');
    itens_do_menu = document.getElementById('itens-menu-mobile');

    if (itens_do_menu.style.display == 'block') {
        itens_do_menu.style = "display:nome";
    } else {
        itens_do_menu.style = "display:block";
    }



}

function escondeABrutaOMeun() {

    largura_janela = Window.innerwidth;
    console.log(largura_janela);


    if (largura_janela > 600) {

        itens_do_menu = document.getElementById("itens-menu-mobile");
        itens_do_menu.style = "display:nome";
    }

}