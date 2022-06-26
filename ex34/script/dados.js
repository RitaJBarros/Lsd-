carro1 = {
    marca: "fiat",
    modelo: "punto",
    cilidrada: "1000",
    caracteristicas: ['vidro eletricos', 'AC']
};

carro2 = {
    marca: "toyota",
    modelo: "yaris",
    cilidrada: "1200cc",
    caracteristicas: ['alarme', 'direcao assistida']
};

carro3 = {
    marca: "bmw",
    modelo: "320",
    cilidrada: "2000cc",
    caracteristicas: ['alarme', 'direcao assistida', 'bancos aquecidos']
};
carro4 = {
    marca: "Audi",
    modelo: "r8",
    cilidrada: "3000",
    caracteristicas: ['alarme', 'bancos aquecidos']
};

carro5 = {
    marca: "ferrari",
    modelo: "F40",
    cilidrada: "5000",
    caracteristicas: ['alarme', 'estofos de pele']
};

lista_de_carros = [carro1, carro2, carro3, carro4, carro5]

function encontrarCaracteristica(lista_de_caracteristicas, caracteristica) {
    console.log('entrei na funcao');

    for (j = 0; j < lista_de_caracteristicas.length; j++) {
        if (lista_de_caracteristicas[j] == caracteristica) {
            return true;
        }
    }
    return false;
}