//LEIAME 

// Para rodar o programa bastar ter no node, do na maquina:
// 1 - https://nodejs.org/en

// em seguida, na pasta aonde esta o seu index.js, instale o promt-sync
// 2 - npm install --save prompt-sync-history

// 3 - abra o terminal, CTRL + crase, ou clique com o botal direito na pasta que esta com o index.js com obotao diretio e selecione abrir com o teminal.

// 4 - va descomentando exercicio por exercico para executa, repentido o a instruçao 5 no teminal apos comentar o exerc anterio e descomentear o que será executado. 

// 5 - rode o comando 'node index.js'

// só sucesso depois.


// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();

const evenOrOdd = prompt("Informe o valor a ser verificar se é par ou impar.")

evenOrOdd % 2 === 0 ? console.log('número par') : console.log('Número impar');


// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// const age = prompt("Informe para categorizaçao entre criança,adolescente, adulto, idoso.")

// if(age <= 12){
//     console.log('criança')
// }else if(age > 12 && age <= 18){
//     console.log('adolecente')
    
// }else if(age > 18 && age < 60){
//     console.log('adulto')
    
// }else if(age > 60 ){
//     console.log('idoso')
// }


// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// const studentGrade = prompt("Informe a nota do aluno.")

// if(studentGrade > 7){
//     console.log('Aprovado')
// }else{
//     console.log('Reprovado')
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

// const optionSelected = prompt(`Escolha uma opção:
// 1. Dizer Olá
// 2. Mostrar a Data Atual
// 3. Sair`);

// switch (optionSelected) {
//     case '1':
//         console.log("Olá! Como você está?");
//         case '2':
//             console.log("Data Atual: " + new Date().toLocaleString()); 
//             break;
//             case '3':
//                 console.log("Saindo... Até mais!");
//                 break;
//                 default:
//                     console.log("Opção inválida. Tente novamente.");
//                 }
                
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// const weight = prompt("Informe seu pesos em kg:");
// const height = prompt("Digite sua altura em metros:"); 

// const imc = weight / (height * height);

// if (imc < 18.5) {
//     console.log ("Baixo peso"); 
// } else if (imc >= 18.5 && imc < 24.9) {
//     console.log ("Peso normal"); 
// } else if (imc >= 25 && imc < 29.9) {
//     console.log ("Sobrepeso");
// } else {
//     console.log ("Obesidade");
// }

/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

// const sideA = parseFloat(prompt("Digite o valor do lado A:"));
// const sideB = parseFloat(prompt("Digite o valor do lado B:"));
// const sideC = parseFloat(prompt("Digite o valor do lado C:"));

// if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
//     console.log("Os lsideAdos formsideAm um triângulo.");

//     if (sideA === sideB && sideB === sideC) {
//         console.log("O triângulo é equilátero.");
//     } else if (sideA === sideB || sideA === sideC || sideB === C) {
//         console.log("O triângulo é isósceles."); 
//     } else {
//         console.log("O triângulo é escaleno."); 
//     }
// } else {
//     console.log("Os lados não formam um triângulo.");
// }

// /*
// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
// */

// const numberOfMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

// let precoPorMaca;
// if (numberOfMacas < 12) {
//     precoPorMaca = 0.30; // Menos que uma dúzia
// } else {
//     precoPorMaca = 0.25; // Pelo menos uma dúzia
// }

// const totalValue = numberOfMacas * priceOfMaca;

// console.log(`O valor total da compra é: R$ ${totalValue.toFixed(2)}`);


// /*
// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
// */

// const value1 = parseFloat(prompt("Digite o primeiro valor:"));
// const value2 = parseFloat(prompt("Digite o segundo valor:"));

// if (value1 === value2) {
//     console.log("Os valores devem ser diferentes.");
// } else {
//     if (value1 < value2) {
//         console.log(`Os valores em ordem crescente são: ${valor1} e ${valor2}`);
//     } else {
//         console.log(`Os valores em ordem crescente são: ${valor2} e ${valor1}`);
//     }
// };

// /*
// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
// */

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// };

// console.log('Contegem finalizada');


// /*
// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// */

// const number = parseInt(prompt("Informe um número inteiro:"));

// for (let i = 0; i < 10; i++) {
//     console.log(number);
// }


// /*
// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
// */

// let totalSum = 0;

// for (let i = 0; i < 5; i++) {
//     const number = parseFloat(prompt(`Informe 5 numeros para somar.  ${i + 1} Vez informada:`)); 
//     totalSum += number;
// }

// /*
// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.
// */

// const numberInformed = parseInt(prompt("Enter a number to see its multiplication table:"));

// console.log(`Multiplication table of ${numberInformed}:`);
// for (let i = 1; i <= 10; i++) {
//     const result = numberInformed * i; 
//     console.log(`${numberInformed} x ${i} = ${result}`); 
// }

// /*
// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
// */

// let sum = 0; 
// let count = 0;
// let numberInformedUser;

// do {
//     numberInformedUser = parseFloat(prompt("Informe um número decimal. (0 para finalizar a qualquer momento):")); 

//     if (number !== 0) {
//         sum += numberInformedUser;
//         count++; 
//     }

// } while (numberInformedUser !== 0);


// if (count > 0) {
//     const average = sum / count;
//     console.log(`A média dos valores informados é: ${average}`);
// } else {
//     console.log("Nenhum número foi inserido.");
// }

// /*
// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
// */

// const valueOfFartorial = parseInt(prompt("Digite um número inteiro não negativo para calcular o fatorial:"));

// let factorial = 1;

// if (valueOfFartorial < 0) {
//     console.log("Número negativo, tente outro valor positivo.");
// } else {
//     for (let i = 1; i <= valueOfFartorial; i++) {
//         factorial *= i; 
//     }

//     console.log(`O fatorial de ${valueOfFartorial} é: ${factorial}`);
// }


// /*
// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
// */

// let fib1 = 0;
// let fib2 = 1;

// console.log("Os primeiros 10 números da sequência de Fibonacci são:");
// console.log(fib1);

// for (let i = 1; i < 10; i++) {
//     console.log(fib2);
//     const nextFib = fib1 + fib2; 
//     fib1 = fib2; 
//     fib2 = nextFib;
// }
