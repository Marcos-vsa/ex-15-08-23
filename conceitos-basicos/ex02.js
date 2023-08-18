
const numeros = [10, 23, 34];

function maioralor() {
    /*lista[0]>lista[1];
    let maiorNumero = lista[1];
    maiorNumero>lista[2];
    maiorNumero=lista[2];
    */

    numeroMaior = 0

    numeros.forEach(element => {
        if (element >= numeroMaior) {
            numeroMaior = element
        }
    });

    console.log("Maior número: ", numeroMaior)

}

maioralor();
