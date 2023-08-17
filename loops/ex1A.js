let anterior = 0; 
let atual = 1;
let proximo
let num = 100
for(i=0 ; i<num ; i++){
    console.log(anterior);
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
