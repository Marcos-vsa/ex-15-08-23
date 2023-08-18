//0 °C × 9/5) + 32 = 32 °F

const prompt = require("prompt-sync")();

const temperatura = Number(prompt("Digite uma temperatura: "));

function conversaoTemperatura(temp){
    let conversor = temp * 9/5 + 32
    console.log(conversor);
}

conversaoTemperatura(temperatura);
