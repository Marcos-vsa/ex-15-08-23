var numero = 20

for(i=numeros; i>=1;i--){
    if(i % 2 == 0){
        var divisao = 1 / 2;
        console.log(`${i} é divisível por 2: ${divisao} `);
    }else{
        var multiplicacao = (i * 3) + 1 ;
        console.log(`${i}multiplicado por 3 e somado com 1: ${multiplicacao}`)
    }
}