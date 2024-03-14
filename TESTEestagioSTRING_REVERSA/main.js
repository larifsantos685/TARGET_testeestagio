function palavrareversa(palavras) {
    let palavrainversa = ''; 
    for (let i = palavras.length - 1; i >= 0; i--) {
        palavrainversa += palavras[i];
    }
    return palavrainversa 

}

let entrada = prompt("Digite uma palavra: ")
let palavrainversa = palavrareversa(entrada)
console.log("A palavra invertida é: ", palavrainversa)

