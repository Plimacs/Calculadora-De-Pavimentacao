const receber = require('prompt-sync')({sigint: false});
var area = 0, espesura = 0, densidade = 0, resultado = 0;

console.log('Massa asfáltica')

area = receber("Digite a área que será pavimentada: ")
densidade = receber("Digite a densidade da sua massa asfáltica: ")
espesura = receber("Digite a espesura que será aplicada: ")

resultado = densidade * espesura * area;

console.log("A quantidade de massa em toneladas que você deve utilizar: " + resultado)