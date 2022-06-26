$(document).ready(function() {
    console.log('entrei no jquery');
    //$('.caixa-1').css('display', 'block');
    $('.caixa-1').fadeIn(5000);

    $('.botao_accao').click(function() {
        //alert('carreguei no botao');
        $('.caixa-2').fadeIn(5000);
    });

    $('.caixa-3').mouseenter(function() {
        console.log('entrei com o rato');
        $('.caixa-3').addClass('caixa-3-activa');
    });

    $('.caixa-3').mouseleave(function() {
        console.log('entrei com o rato');
        $('.caixa-3').removeClass('caixa-3-activa');
    });







});