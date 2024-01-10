const receber = require('prompt-sync')({sigint: false});

let carga = receber(`Digite em toneladas a carga total a ser pavimentada (ex: "1.4" = 1t e 400kg): `)
let cargaCaminhao = receber('Digite a capacidade do seu caminhão em toneladas (ex: "1.4" = 1t e 400kg): ')
let horasBrutas = parseFloat(receber('Digite quantas horas leva para descarregar um caminhão (ex: "2" = 2 horas): '));
let minutosBrutos = parseFloat(receber('Digite os minutos necessários para descarregar um caminhão (ex: "30" = 30 minutos): '));

if (minutosBrutos > 60 || isNaN(minutosBrutos)) {
    minutosBrutos = parseFloat(receber('Valor inválido! Por favor, digite um número entre 0 e 60:'));
}

console.log(`Você digitou ${carga}t toneladas, ${horasBrutas}h horas e ${minutosBrutos}m minutos?`)

let continuar = receber(`Digite "y" para continuar, ou "n" para editar: `)

if (continuar.toLowerCase() === 'n'){

    let editar = receber("O aque deseja editar? digite toneladas, horas ou minutos: ");

    switch (editar) {
        case 'toneladas':
            carga = receber(`Digite em toneladas a carga total a ser pavimentada: `)
            break;
        case 'horas':
            horasBrutas = parseFloat(receber('Digite quantas horas leva para descarregar um caminhão (ex: "2" = 2 horas): '));
            break;
        case 'minutos':
            minutosBrutos = parseFloat(receber('Digite os minutos necessários para descarregar um caminhão (ex: "30" = 30 minutos): '));

            if (minutosBrutos > 60 || isNaN(minutosBrutos)) {
                minutosBrutos = parseFloat(receber('Valor inválido! Por favor, digite um número entre 0 e 60:'));
            }
            break;
    };
}

let mediaTempo = horasBrutas * 60 + minutosBrutos;
mediaTempo = mediaTempo / 60
let cargaCalc = carga
let dias = 0, horas = 0;

console.log(mediaTempo)

while(cargaCalc > 0){

    cargaCalc = cargaCalc - cargaCaminhao
    horas = horas + mediaTempo

    if (horas >= 24){

        dias = dias +1
        horas = horas -24
    }
}

let minutos = Math.round((horas % 1) * 60);

horas = Math.floor(horas);

console.log(`você vai precisar de ${dias.toFixed(0)} dias, ${horas.toFixed(0)} horas e ${minutos} minutos para pavimentar ${carga}t toneladas`);