//0 °C × 9/5) + 32 = 32 °F

const prompt = require("prompt-sync")();

const temperatura = Number(prompt("Digite uma temperatura: "));

function conversaoTemperatura(temp){
    let conversor = (temp * 9/5 + 32).toFixed(2);
    console.log(`Temperatura em Fahrenheit: ${conversor}`);
}

conversaoTemperatura(temperatura);
