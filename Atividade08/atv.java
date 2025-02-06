import java.util.Scanner;

public class Exercicios {

    // Exercício 1: Calculadora básica
    public static void calcular() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite o primeiro número: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Digite o segundo número: ");
        double num2 = scanner.nextDouble();
        
        System.out.print("Digite o operador (+, -, *, /): ");
        char operador = scanner.next().charAt(0);
        
        double resultado = 0;
        boolean valido = true;
        
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    resultado = num1 / num2;
                } else {
                    System.out.println("Erro: Divisão por zero.");
                    valido = false;
                }
                break;
            default:
                System.out.println("Operador inválido.");
                valido = false;
                break;
        }
        
        if (valido) {
            System.out.println("Resultado: " + resultado);
        }
    }

    // Exercício 2: Verificar se a palavra é um palíndromo
    public static void verificarPalindromo() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine();
        
        // Ignorar maiúsculas e minúsculas
        palavra = palavra.toLowerCase();
        
        String invertida = new StringBuilder(palavra).reverse().toString();
        
        if (palavra.equals(invertida)) {
            System.out.println("A palavra é um palíndromo.");
        } else {
            System.out.println("A palavra não é um palíndromo.");
        }
    }

    // Exercício 3: Calcular sequência de Fibonacci
    public static void fibonacci() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite o número de termos da sequência de Fibonacci: ");
        int n = scanner.nextInt();
        
        int a = 0, b = 1;
        
        System.out.print("Sequência de Fibonacci: ");
        
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int temp = a;
            a = b;
            b = temp + b;
        }
        
        System.out.println();
    }

    // Exercício 4: Verificar se as palavras são anagramas
    public static void verificarAnagramas() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine();
        
        System.out.print("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine();
        
        // Remover espaços e converter para minúsculas
        palavra1 = palavra1.replaceAll("\\s", "").toLowerCase();
        palavra2 = palavra2.replaceAll("\\s", "").toLowerCase();
        
        // Verificar se as palavras são anagramas
        char[] arr1 = palavra1.toCharArray();
        char[] arr2 = palavra2.toCharArray();
        
        java.util.Arrays.sort(arr1);
        java.util.Arrays.sort(arr2);
        
        if (java.util.Arrays.equals(arr1, arr2)) {
            System.out.println("As palavras são anagramas.");
        } else {
            System.out.println("As palavras não são anagramas.");
        }
    }

    // Exercício 5: Jogo de adivinhação
    public static void jogoDeAdivinhacao() {
        Scanner scanner = new Scanner(System.in);
        
        int numero = (int) (Math.random() * 50) + 1;
        int palpite = 0;
        
        System.out.println("Tente adivinhar o número entre 1 e 50.");
        
        while (palpite != numero) {
            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();
            
            if (palpite < numero) {
                System.out.println("O número é maior. Tente novamente.");
            } else if (palpite > numero) {
                System.out.println("O número é menor. Tente novamente.");
            } else {
                System.out.println("Parabéns! Você acertou.");
            }
        }
    }

    // Exercício 6: Contar número de palavras em uma frase
    public static void contarPalavras() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite uma frase: ");
        String frase = scanner.nextLine();
        
        String[] palavras = frase.trim().split("\\s+");
        
        System.out.println("Número de palavras: " + palavras.length);
    }

    // Método principal para chamar os outros métodos
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Escolha uma opção:");
        System.out.println("1 - Calculadora");
        System.out.println("2 - Palíndromo");
        System.out.println("3 - Fibonacci");
        System.out.println("4 - Anagramas");
        System.out.println("5 - Jogo de Adivinhação");
        System.out.println("6 - Contagem de Palavras");
        
        int opcao = scanner.nextInt();
        
        switch (opcao) {
            case 1:
                calcular();
                break;
            case 2:
                verificarPalindromo();
                break;
            case 3:
                fibonacci();
                break;
            case 4:
                verificarAnagramas();
                break;
            case 5:
                jogoDeAdivinhacao();
                break;
            case 6:
                contarPalavras();
                break;
            default:
                System.out.println("Opção inválida.");
        }
    }
}
