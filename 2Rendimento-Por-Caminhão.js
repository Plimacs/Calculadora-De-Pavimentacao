const receber = require('prompt-sync')({sigint: false});
var carga = 0, densidade = 0, largura = 0, espesura = 0, resultado = 0, continuar, editar;

console.log("Rendimento por caminhão")

carga = receber("Digite a carga do seu caminhão (em toneladas): ")
densidade = receber("Digite a densidade da sua massa asfáltica (se não responder, será atribuido o valor padrão): ")
largura = receber("Digite a largura do asfalto (em quilômetros, ex: 1 metro e 4 centimetros = \"0.14\"): ")
espesura = receber("Digite a espessura do asfalto (em quilômetros, ex: 3 centimetros = \"0.03\"): ")

if (densidade == 0){
    densidade = densidade + 2.4
}

console.log("você digitou", carga + "t toneladas,", densidade, "densidade da massa asfáltica e", largura + "km de largura,", espesura + "Km de espesura.")
continuar = receber("Digite \"y\" para continuar, ou \"n\" para editar: ")

if (continuar == 'n'){

    editar = receber("O aque deseja editar? digite carga, densidade, largura ou espesura: ");
}

if (editar == 'carga'){

    carga = receber("Digite a carga do seu caminhão (em toneladas): ")
}
if (editar == 'densidade'){

    densidade = receber("Digite a densidade da sua massa asfáltica (se não responder, será atribuido o valor padrão): ")
}
if (editar == 'largura'){

    largura = receber("Digite a carga do seu caminhão (em toneladas): ")
}
if (editar == 'espesura'){

    espesura = receber("Digite a espesura que será aplicada (em centimetros, ex: 3 centimetros = \"0.03\"): ")
}

if (densidade == 0){
    densidade = densidade + 2.4
}

resultado = carga / densidade / largura / espesura;

console.log("O rendimento por caminhão e de:", resultado.toFixed(2) + "m³ metros quadrados");