 function contarVogais(str) {
     // Definindo uma string com todas as vogais
     const vogais = "aeiouAEIOU";
     // Inicializando o contador de vogais
     let contador = 0;
    
     // Percorrendo cada caractere da string fornecida
     for (let i = 0; i < str.length; i++) {
         // Se o caractere atual estiver na string de vogais, incrementamos o contador
         if (vogais.indexOf(str[i]) !== -1) {
             contador++;
         }
     }
    
     // Retornando o número total de vogais encontradas
     return contador;
 }

 // Exemplo de uso:
 let palavra = prompt("Digite uma Palavra:");
 let numeroDeVogais = contarVogais(palavra);
 console.log("Número de vogais em '" + palavra + "': " + numeroDeVogais);  // Saída: Número de vogais

//-----------------------------------Solução do Professor---------------------------------------------------------------------//


// function contarVogais(str){

//     str = str.toLowerCase();

//     const vogais = "aeiou";

//     let contagem = 0;

//     for(let i = 0; i < str.length; i++){

//         if (vogais.includes(str[i])){

//             contagem++;

//         }

//         return contagem;

//     }   

// }

// const palavra = prompt("Digite uma palavra:");
// let numeroDeVogais = contarVogais(palavra);
// console.log(`O numero de vogais em ${palavra} é: ${numeroDeVogais}`)