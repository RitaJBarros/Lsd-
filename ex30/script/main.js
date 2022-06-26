function validaFormulario() {
    document.getElementById('zona-de-erros').innerText = "preencha os campos obrigatorios";
    alert('entrei na funcao');

    //ir buscar o que o value do id= nome
    nome = document.getElementById('nome').value;

    //ir buscar o que o value do id= email
    email = document.getElementById('email').value;

    //ir buscar o que o value do id= telefone
    telefone = document.getElementById('telefone').value;

    morada = document.getElementById('morada').value;
    cp1 = document.getElementById('cp1').value;
    cp2 = document.getElementById('cp2').value;

    if (nome == '' || email == '' || telefone == '') {
        document.getElementById('zona-de-erros').innerText = "preencha os campos obrigatorios";
        return false;

    }

    if (morada != '') {

        if (cp1 == '' || (cp1 != '' && cp2 == '')) {
            document.getElementById('zona-de-erros').innerText = "preencha os campos obrigatorios";
        }
        return false;
    }

}

function validaFormulario2() {

    todos_os_inputs = document.getElementsByTagName('input');

    for (i = 0; i < todos_os_inputs.length; i++) {
        todos_os_inputs[i].style = "border:1px solid #000";
    }

    input_nome = document.getElementById("nome");
    nome = input_nome.value;

    input_email = document.getElementById("email");
    email = input_email.value;

    input_telefone = document.getElementById("telefone");
    telefone = input_telefone.value;


    input_morada = document.getElementById("morada");
    morada = input_morada.value;

    erros = 0;



    if (nome == "") {
        input_nome.style = "border : 3px solid red";
        document.getElementById('zona-de-erros').innerText = "preencha os campos assinalados";
        erros = erros + 1;


    }

    if (email == "") {
        input_email.style = "border : 3px solid red";
        document.getElementById('zona-de-erros').innerText = "preencha os campos assinalados";
        erros = erros + 1;

    }
    if (telefone == "") {
        input_telefone.style = "border : 3px solid red";
        document.getElementById('zona-de-erros').innerText = "preencha os campos assinalados";
        erros = erros + 1;

    }
    if (morada != '') {
        input_cp1 = document.getElementById("cp1");
        cp1 = input_cp1.value;
        input_cp2 = document.getElementById("cp2");
        cp2 = input_cp2.value;

        if ((cp1 == '') || (cp1 != '' && cp2 == '')) {
            input_cp1.style = "border : 3px solid red";
            input_cp2.style = "border : 3px solid red";
            document.getElementById('zona-de-erros').innerText = "preencha os campos assinalados";
            erros = erros + 1;

        }
    }


    if (erros == 0) {
        return true;
    } else {
        return false;
    }

}