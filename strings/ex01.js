function contarVogais(str){
    const vogais = ["a","e","i","o","u"];
    let count = 0;

    for(var caracter = 0 ; caracter < str.length; caracter++){
        for(var vogal = 0 ; vogal<vogais.length;vogal++){
            if(str[caracter] ===vogais[vogal]){
                count++
            }
        }
    }
    return count
}

const resultado = contarVogais("arara")
console.log(resultado)