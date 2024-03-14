// let VerificarNumero = prompt("Digite o número que você deseja verificar se existe ou não na frequência: "); 

// function fibonacci(VerFibonacci) {

//     let F = 0;
//     let F2 = 1;
//     let F3 = F2 + F; 
    
//     while


// }



// let VerificarNumero = prompt("Digite o número que você deseja verificar se existe ou não na frequência: ")

function fibonacci(VerFibonacci) {
    // F = Para ajudar nos valores atuais do Fibonacci
    // F1 para indicar o primeiro da sequência
    // F2 Para indicar o 2º da sequência 
    let F
    let F1 = 0
    let F2 = 1;
    
    if(VerFibonacci === 0){
      return `O número ${VerFibonacci} existe em Fibonacci`;
    } 
    
    if (VerFibonacci >= 0) {
      do {
        F = F1 + F2;
        F1 = F2;
        F2 = F;
      } while(VerFibonacci > F);
      
      if(F === VerFibonacci){
        return `O número ${VerFibonacci} existe na sequência fibonacci`;
      } else {
        return `O número inserido não existe na sequência fibonacci`;
      }
    }
}

let VerFibonacci = parseInt(prompt("Informe um valor para verificar se ele pertence à sequência de Fibonacci: "));
let resultado = fibonacci(VerFibonacci);
console.log(resultado);
