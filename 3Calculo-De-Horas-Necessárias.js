const receber = require('prompt-sync')({sigint: false});
var carga = 0, cargaCalc = 0, dias = 0, horas = 0, continuar;

cargaCalc = receber("Digite em toneladas a carga total a ser pavimentada: ")
console.log("Você digitou", cargaCalc + "t toneladas.")
continuar = receber("Digite \"y\" para continuar, ou \"n\" para editar: ")

if (continuar == 'n'){

    cargaCalc = receber("Digite em toneladas a carga total a ser pavimentada: ")
}

carga = cargaCalc

while(cargaCalc != 0){
    if (cargaCalc != 0){

        cargaCalc = cargaCalc - 1
        horas = horas + 0.15

    }else{
        break
    }
}

if(horas >= 24){

    dias = horas
    dias = dias / 24;
    
}
console.log("você vai precisar de ", dias.toFixed(0), " dias ou ", horas.toFixed(2), " horas para pavimentar ", carga + "t toneladas");
