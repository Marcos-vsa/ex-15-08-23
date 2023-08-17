const prompt = require("prompt-sync")();

const ano = prompt("Digite um ano para saber se ele é bissexto: ")
if(ano % 4 === 0 && ano % 100 !== 0 ){
    console.log ("O ano é bissexto.")
}else if(ano%400==0){
    console.log("O ano é bissexto.")
}else{
    console.log("O ano não é bissexto.")
}