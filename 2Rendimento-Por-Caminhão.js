const receber = require('prompt-sync')({sigint: false});

console.log(`Rendimento por caminhão`)

let carga = receber(`Digite a carga do seu caminhão (em toneladas): `)
let densidade = receber(`Digite a densidade da sua massa asfáltica (se não responder, será atribuido o valor padrão): `) || 2.4;
let largura = receber(`Digite a largura do asfalto (em quilômetros, ex: 1 metro e 4 centimetros = "0.14"): `)
let espessura = receber(`Digite a espessura do asfalto (em quilômetros, ex: 3 centimetros = "0.03"): `)

console.log(`você digitou ${carga}t toneladas, ${densidade} de densidade da massa asfáltica, ${largura}km de largura e ${espessura}Km de espessura.`)

let continuar = receber(`Digite "y" para continuar, ou "n" para editar: `)

if (continuar.toLowerCase() === 'n'){

    let editar = receber("O aque deseja editar? digite carga, densidade, largura ou espessura: ");

    switch (editar) {
        case 'carga':
            carga = receber(`Digite a carga do seu caminhão (em toneladas): `)
            break;
        case 'densidade':
            densidade = receber(`Digite a densidade da sua massa asfáltica (se não responder, será atribuido o valor padrão): `)
            break;
        case 'largura':
            largura = receber(`Digite a largura do asfalto (em quilômetros, ex: 1 metro e 4 centimetros = "0.14"): `)
            break;
        case 'espessura':
            espessura = receber(`Digite a espessura do asfalto (em quilômetros, ex: 3 centimetros = "0.03"): `)
            break;
        default:
            console.log(`Opção inválida!`)
            return;
    }
}

let resultado = carga / densidade / largura / espessura;

console.log(`O rendimento por caminhão e de: ${resultado.toFixed(2)}m³ metros quadrados`);