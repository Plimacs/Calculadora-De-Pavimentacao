const receber = require('prompt-sync')({sigint: false});
var carga = 0, densidade = 0, largura = 0, espesura = 0, resultado = 0;

console.log('Rendimento por caminhão')

carga = receber('Digite a carga do seu caminhão em toneladas: ')
densidade = receber('Digite a densidade da massa: ')
largura = receber('Digite a largura do asfalto: ')
espesura = receber('Digite a espessura do asfalto: ')

resultado = carga / densidade / largura / espesura;

console.log(`O rendimento por caminhão e de: ${resultado.toFixed(2)} metros`);