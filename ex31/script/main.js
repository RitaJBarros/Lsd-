function ValidaNumero() {

    input_telefone = document.getElementById("numeroDetelefone");
    telefone = input_telefone.value;

    if (telefone[0] != "9" && telefone[0] != "2") {
        document.getElementById('zona-de-erros').innerHTML = "numero de telefone errado";
        return false;

    } else if (telefone[0] == "9") {
        if (telefone[1] != "1" || telefone[1] != "2" || telefone[1] != "3" || telefone[1] != "6") {

            document.getElementById('zona-de-erros').innerHTML = "numero de telefone errado";
            return false;
        }

    }

}