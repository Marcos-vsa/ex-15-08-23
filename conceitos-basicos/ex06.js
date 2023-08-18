function inverterString(string){
    let palavra = string.split('');

    let inverter = palavra.reverse()

    let palavraInvertida = inverter.join('')

    console.log(palavraInvertida);
}

inverterString('JavaScript')