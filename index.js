/*
1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "preto"
};

console.log("Propriedades do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

/*
2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

// Criar um objeto livro
// const livro = {
//     titulo: "O Alquimista",
//     autor: "Paulo Coelho",
//     anoPublicacao: 1988,
//     genero: "Ficção"
// };


// for (let propriedade in livro) {
//     if (propriedade === "editora") {
//         break;
//     }else{
//         livro.editora = "HarperCollins"; // Adicionando a propriedade editora
//         console.log("A propriedade 'editora' foi adicionada ao livro.");
//     }
// }

// console.log("Propriedades do livro:");
// for (let propriedade in livro) {
//     console.log(`${propriedade}: ${livro[propriedade]}`);
// }


/*
3. Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

// const produto = {
//     nome: "Smartphone",
//     preco: 1200,
//     estoque: 50,
//     avaliacao: 4.5,
//     garantia: 12 // em meses
// };

// function filtrarPropriedades(objeto, valorReferencia) {
//     const newObjeto = {}; 

//     for (let propriedade in objeto) {
//         if (objeto[propriedade] > valorReferencia) {
//             newObjeto[propriedade] = objeto[propriedade];
//         }
//     }

//     return novoObjeto;
// }

// const valorReferencia = 1000; 
// const produtoFiltrado = filtrarPropriedades(produto, valorReferencia);

// console.log("Propriedades do produto filtradas:");
// console.log(produtoFiltrado);


/*
4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

// const pessoas = [
//     { nome: "Alice", idade: 30, cidade: "São Paulo" },
//     { nome: "Bruno", idade: 25, cidade: "Rio de Janeiro" },
//     { nome: "Carla", idade: 28, cidade: "Belo Horizonte" },
//     { nome: "David", idade: 22, cidade: "Curitiba" }
// ];

// console.log("Informações das pessoas:");
// for (const pessoa of pessoas) {
//     console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
// }


/*
5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

// const alunos = [
//     { nome: "Ana", nota1: 8.5, nota2: 7.0 },
//     { nome: "Carlos", nota1: 6.0, nota2: 9.5 },
//     { nome: "Beatriz", nota1: 9.0, nota2: 8.5 },
//     { nome: "Daniel", nota1: 7.5, nota2: 6.5 }
// ];

// console.log("Médias dos alunos:");
// for (const aluno of alunos) {
//     const media = (aluno.nota1 + aluno.nota2) / 2;
//     console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`);
// }

/*
6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

// const funcionarios = [
//     { nome: "João", cargo: "Desenvolvedor", salario: 5000 },
//     { nome: "Maria", cargo: "Gerente", salario: 8000 },
//     { nome: "Pedro", cargo: "Estagiário", salario: 2000 },
//     { nome: "Ana", cargo: "Analista", salario: 6000 },
// ];

// const salarioReferencia = 2000;

// console.log("Funcionários com salário maior que R$ " + salarioReferencia + ":");
// for (const funcionario of funcionarios) {
//     if (funcionario.salario > salarioReferencia) {
//         console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
//     }
// }

/*
7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/


// const produtos = [
//     { nome: "Camiseta", preco: 50, desconto: 0.10 },
//     { nome: "Calça", preco: 100, desconto: 0.10 },
//     { nome: "Tênis", preco: 200, desconto: 0.10 },
//     { nome: "Jaqueta", preco: 150, desconto: 0.10 }
// ];

// console.log("Produtos com desconto de 10%:");
// produtos.forEach(produto => {
//     const precoComDesconto = produto.preco - (produto.preco * produto.desconto); 
//     console.log(`Nome: ${produto.nome}, Preço original: R$ ${produto.preco}, Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
// });


/*
8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

// const filmes = [
//     { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", anoLancamento: 2001 },
//     { titulo: "A Matrix", diretor: "Lana e Lilly Wachowski", anoLancamento: 1999 },
//     { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
//     { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 }
// ];

// const titulos = [];

// filmes.forEach(filme => {
//     titulos.push(filme.titulo);
// });

// console.log("Títulos dos filmes:");
// console.log(titulos);

/*
9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

// const clientes = [
//     { nome: "Carlos", idade: 25, cidade: "São Paulo" },
//     { nome: "Ana", idade: 35, cidade: "Rio de Janeiro" },
//     { nome: "João", idade: 40, cidade: "Belo Horizonte" },
//     { nome: "Mariana", idade: 28, cidade: "Curitiba" },
//     { nome: "Pedro", idade: 32, cidade: "Salvador" }
// ];

// let contagemMaisDe30 = 0;

// clientes.forEach(cliente => {
//     if (cliente.idade > 30) {
//         contagemMaisDe30++;
//     }
// });

// console.log(`Número de clientes com mais de 30 anos: ${contagemMaisDe30}`);


/*
10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

// const vendas = [
//     { produto: "Camiseta", quantidade: 10, valor: 50.00 },
//     { produto: "Calça", quantidade: 5, valor: 100.00 },
//     { produto: "Tênis", quantidade: 3, valor: 200.00 },
//     { produto: "Jaqueta", quantidade: 2, valor: 150.00 }
// ];

// let valorTotal = 0;

// vendas.forEach(venda => {
//     const totalVenda = venda.quantidade * venda.valor; 
//     valorTotal += totalVenda; 
// });

// console.log(`Valor total de vendas: R$ ${valorTotal.toFixed(2)}`);


/*
11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

// const pedidos = [
//     { cliente: "Alice", produto: "Camiseta", quantidade: 2 },
//     { cliente: "Carlos", produto: "Calça", quantidade: 1 },
//     { cliente: "Alice", produto: "Tênis", quantidade: 1 },
//     { cliente: "Carlos", produto: "Camiseta", quantidade: 3 },
//     { cliente: "Beatriz", produto: "Jaqueta", quantidade: 1 }
// ];

// const totalPorCliente = {};

// pedidos.forEach(function(pedido) {
//     if (!totalPorCliente[pedido.cliente]) {
//         totalPorCliente[pedido.cliente] = 0;
//     }
//     totalPorCliente[pedido.cliente] += pedido.quantidade;
// });

// console.log("Quantidade total de produtos por cliente:");
// console.log(totalPorCliente);


/*
12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

// const estoque = [
//     { produto: "Camiseta", quantidade: 5, minimo: 10 },
//     { produto: "Calça", quantidade: 2, minimo: 5 },
//     { produto: "Tênis", quantidade: 8, minimo: 10 },
//     { produto: "Jaqueta", quantidade: 3, minimo: 4 }
// ];

// estoque.forEach(function(item) {
//     if (item.quantidade < item.minimo) {
//         item.quantidade *= 2;
//     }
// });

// console.log("Estoque atualizado:");
// console.log(estoque);


/*
13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

// const carrinho = {
//     itens: [
//         { nome: "Camiseta", quantidade: 2, precoUnitario: 50.00 },
//         { nome: "Calça", quantidade: 1, precoUnitario: 100.00 },
//         { nome: "Tênis", quantidade: 1, precoUnitario: 200.00 }
//     ]
// };

// let valorTotal = 0;

// carrinho.itens.forEach(function(item) {
//     const totalItem = item.quantidade * item.precoUnitario;
//     valorTotal += totalItem;
// });

// console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);


/*
14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/

// const empresa = {
//     departamentos: [
//         {
//             nome: "Recursos Humanos",
//             funcionarios: ["Alice", "Bruno", "Carlos"]
//         },
//         {
//             nome: "Vendas",
//             funcionarios: ["Daniela", "Eduardo"]
//         },
//         {
//             nome: "Desenvolvimento",
//             funcionarios: ["Fernanda", "Gabriel", "Helena"]
//         }
//     ]
// };

// for (let obj in empresa.departamentos) {
//     const departamento = empresa.departamentos[obj];
//     console.log(`Departamento: ${departamento.nome}`);
    
//     for (let funcionario of departamento.funcionarios) {
//         console.log(` - Funcionário: ${funcionario}`);
//     }
// }


/*
15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

// const transacoes = [
//     { tipo: "entrada", valor: 150 },
//     { tipo: "saida", valor: 50 },
//     { tipo: "entrada", valor: 200 },
//     { tipo: "saida", valor: 30 },
//     { tipo: "entrada", valor: 100 }
// ];

// let saldo = 0;

// transacoes.forEach(function(transacao) {
//     if (transacao.tipo === "entrada") {
//         saldo += transacao.valor; 
//     } else if (transacao.tipo === "saida") {
//         saldo -= transacao.valor; 
//     }
// });

// console.log(`Saldo final: R$ ${saldo.toFixed(2)}`);

