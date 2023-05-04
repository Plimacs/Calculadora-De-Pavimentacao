const receber = require('prompt-sync')({sigint: false});
var area = 0, espesura = 0, densidade = 0, resultado = 0, continuar, editar;

console.log("Calculadora de Massa Asfáltica")

area = receber("Digite a área que será pavimentada (em quilômetros quadrados): ")
densidade = receber("Digite a densidade da sua massa asfáltica (se não responder, será atribuido o valor padrão): ")
espesura = receber("Digite a espesura que será aplicada (em quilômetros, ex: 3 centimetros = \"0.03\"): ")

if (densidade == 0){
    densidade = densidade + 2.4
}

console.log("Você digitou", area + "km² quilômetros quadrados,", densidade, "densidade da massa asfáltica e", espesura + "km de espesura.")
continuar = receber("Digite \"y\" para continuar, ou \"n\" para editar: ")

if (continuar == 'n'){

    editar = receber("O aque deseja editar? digite area, densidade ou espesura: ");
}

if (editar == 'area'){

    area = receber("Digite a área que será pavimentada (em quilômetros quadrados): ")
}
if (editar == 'densidade'){

    densidade = receber("Digite a densidade da sua massa asfáltica (se não souber será atribuido o valor padrão): ")
}
if (editar == 'espesura'){

    espesura = receber("Digite a espesura que será aplicada (em quilômetros, ex: 3 centimetros = \"0.03\"): ")
}

if (densidade == 0){
    densidade = densidade + 2.4
}

resultado = densidade * espesura * area;

console.log("Você deve utilizar:", resultado + "t Toneladas de massa asfáltica.")