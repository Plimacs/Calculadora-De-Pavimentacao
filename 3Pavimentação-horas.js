const receber = require('prompt-sync')({sigint: false});
var carga = 0, tcarga = 0, dias = 0, horas = 0;

carga = receber('Digite em toneladas a carga total a ser pavimentada: ')

tcarga = carga

while(carga != 0){
    if (carga != 0){
        carga = carga - 1
        horas = horas + 0.15
    }else{
        break
}
}
if(horas >= 24){
    dias = horas
    dias = dias / 24;
}
console.log('você vai precisar de ' + dias.toFixed(0) + ' dias ou ' + horas.toFixed(2) + ' horas para pavimentar ' + tcarga + ' toneladas');
