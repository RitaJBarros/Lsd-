$(document).ready(function() {
    $('.item_menu button').on('click', function() {
        $('.caixa_drop').slideToggle(1000);
    });

    //$('button').on('mousenter);


    $(".direita").click(function() {
        $('.caixa-4').animate({
            left: "50",
            right: "0",


        });
    });


    $(".esq").click(function() {
        $('.caixa-4').animate({
            right: "50",
            left: "0",


        });
    });

});