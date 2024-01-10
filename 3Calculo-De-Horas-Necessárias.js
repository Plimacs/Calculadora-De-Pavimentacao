const receber = require('prompt-sync')({sigint: false});

let carga = receber(`Digite em toneladas a carga total a ser pavimentada: `)
console.log(`Você digitou ${carga} t toneladas.`)
let continuar = receber(`Digite "y" para continuar, ou "n" para editar: `)

if (continuar.toLowerCase() === 'n'){
    carga = receber(`Digite em toneladas a carga total a ser pavimentada: `)
}

let cargaCalc = carga
let dias = 0, horas = 0;

while(cargaCalc > 0){

    cargaCalc = cargaCalc - 1
    horas = horas + 0.15

    if (horas >= 24){

        dias = dias +1
        horas = horas -24
    }
}

console.log(`você vai precisar de ${dias.toFixed(0)} dias ou ${horas.toFixed(2)} horas para pavimentar ${carga}t toneladas`);