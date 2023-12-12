const receber = require('prompt-sync')({sigint: false});

console.log(`Calculadora de Massa Asfáltica`)

// validação das respostas com função para obter os valores
let area = receber(`Digite a área que será pavimentada (em quilômetros quadrados): `)
let densidade = receber(`Digite a densidade da sua massa asfáltica (se não responder, será atribuido o valor padrão): `)
let espessura = receber(`Digite a espessura que será aplicada (em quilômetros, ex: 3 centimetros = "0.03"): `)

// pesquisar uma maneira mais "limpa" para isto
if (densidade == 0){
    densidade = densidade + 2.4
}

console.log(`Você digitou ${area}km² quilômetros quadrados, ${densidade} de densidade da massa asfáltica e ${espessura}km de espessura.`)

let continuar = receber(`Digite "y" para continuar, ou "n" para editar: `)

if (continuar.toLowerCase() === 'n'){

    let editar = receber("O aque deseja editar? digite area, densidade ou espessura: ");

    switch (editar) {
        case 'area':
            area = receber(`Digite a área que será pavimentada (em quilômetros quadrados): `)
            break;
        case 'densidade':
            densidade = receber(`Digite a densidade da sua massa asfáltica (se não responder, será atribuido o valor padrão): `)
            break;
        case 'espessura':
            espessura = receber(`Digite a espessura que será aplicada (em quilômetros, ex: 3 centimetros = "0.03"): `)
            break;
        default:
            console.log(`Opção inválida!`);
            return;
    }
}

if (densidade == 0){
    densidade = densidade + 2.4
}

console.log(`${area}km² quilômetros quadrados, ${densidade} de densidade da massa asfáltica e ${espessura}km de espessura.`)

let resultado = densidade * espessura * area;

console.log(`Você deve utilizar: ${resultado}t Toneladas de massa asfáltica.`)