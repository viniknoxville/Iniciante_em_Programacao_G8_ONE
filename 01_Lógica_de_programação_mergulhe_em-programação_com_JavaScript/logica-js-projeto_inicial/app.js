
// 1. Mostre um alerta com a mensagem "Bem-vindo ao nosso site!".
alert("Bem Vindo ao nosso site!");

// 2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

// 3. Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

// 4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

// 5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

// 6. Exiba um alerta com o texto "Erro! Preencha todos os campos."
alert("Erro! Preencha todos os campos!");

// 7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// 8. Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nome = prompt("Digite seu nome?");

// 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade = prompt("Digite sua idade!");

// 10. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade. Agora, a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
let idade = prompt("Digite sua idade!");
if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}

// 11. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual é o dia da semana?")
if (diaSemana == 'Sábado') {
    alert('Bom fim de semana!');
}
else if (diaSemana == 'Domingo') {
    alert('Bom fim de semana!');
}
else {
    alert('Boa Semana!');

}

// 12. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Digite um número Positivo');
if (numero > 0) {
    alert('Numero postivo!');
} else {
    alert('Número negativo');
}

// 13. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuação = 105
if (pontuação >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar');
}

// 14. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 250;
alert(`Seu Saldo é de R$${saldoConta}`);

// 15. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nome = prompt('Digite seu nome');
alert(`Bem vindo ${nome}`);

// 16. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contator = 1;
while (contator <= 10) {
    console.log(contator);
    contator++;
}

// 17. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contator = 10;
while (contador >= 0) {
    console.log(contator);
    contator--;
}
// 18. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt('Digite um número para contagem regressiva:');

while (numero >= 0) {
    console.log(numero);
    numero--;
}

// 19. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numero = prompt('Digite um número: ');
let contator = 0;

while (contator >= numero) {
    console.log(contator);
    contator++;

}

// 20. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas-vindas');

// 21. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Marcos';
console.log(`Olá, ${nome}!`);

// 22. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = 'Marcos';
alert(`Olá, ${nome}!`);

// 23. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);

// 24. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 4;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// 25. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 25;
let valor2 = 55;
let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

// 26. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Digite a sua idade: ');
if (idade > 17) {
    console.log('Você é maior de idade');
} else {
    console.log(' você é menor de idade');
}

// 27. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.Use if-else para imprimir a respectiva mensagem.
let numero = parseFloat(prompt('Digite um número:'));
if (numero > 0) {
    console.log('O número é positivo!');
} else if (numero < 0) {
    console.log('O número é negativo!');
} else {
    console.log('O número é zero');
}

// 28. Use um loop while para imprimir os números de 1 a 10 no console.
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

// 29. Crie uma variável "nota" e atribua um valor numérico a ela.Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// 30. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numero = Math.rondom();
console.log(numero);

// 32. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numero = parseInt(Math.round() * 10) + 1;
console.log(numero);

// 32. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numero = parseInt(Math.round() * 1000) + 1;
console.log(numero);

//------------ Funções ----------------

// 33. Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
    console.log('Olá Mundo');
}
olaMundo();

// 34. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log(`Olá, ${nome}`);
}
exibirNome("Marcos");

// 35. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}
let numeroDobro = calcularDobro(5);
console.log(numeroDobro);

// 36. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}
let resultadoMedia = calcularMedia(5, 10, 20);
console.log(resultadoMedia);

// 37. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(a, b) {
    return a > b ? a : b;
}
let maiorNumero = numeroMaior(10, 100);
console.log(maiorNumero);

// 38. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao(a) {
    return a * a;
}
let resultadoMultiplicacao = multiplicacao(5);
console.log(resultadoMultiplicacao);

// 39. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(altura, peso) {
    let imc = peso / (altura * altura);
}
40. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// 41. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversaoDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2);
}

let valorEmDolar = 45;
let valorEmReal = conversaoDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dolares em reais é R$ ${valorEmReal}`);


// 42. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSala(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura)

    console.log(`Área da sala é ${area} m²`);
    console.log(`O perimetro da sala é ${perimetro} m`);
}

let altura = 10;
let largura = 20;
calcularAreaPerimetroSala(altura, largura);


//  43. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    console.log(`A área da sala circular é ${area.toFixed(2)} m²`);
    console.log(`O perimetro da sala circular é ${perimetro.toFixed(2)} m`);
}

let raio = 15;
calcularAreaPerimetroSalaCircular(raio);

// 44. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}

let numero = 10;
tabuada(numero);

// ----------Listas------------

// 45. Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

// 46. Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


// 47. Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java','Ruby','GoLang' );

console.log(linguagensDeProgramacao);

// saída esperada
["JavaScript", "C", "C++", "Kotlin", "Python", "Java", "Ruby", "GoLang"]


// 48. Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ['Marcos','Pedro', 'João'];
console.log(listaNomes[0]);

// saída esperada
Marcos

// 49. Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaNomes = ['Marcos','Pedro', 'João'];
console.log(listaNomes[1]);

// saída esperada
Pedro

// 50. Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaNomes = ['Marcos','Pedro', 'João'];
console.log(listaNomes[2]);

// saída esperada
João

// ou

let listaNomes = ['Marcos', 'Pedro', 'João'];
console.log(listaNomes[listaNomes.length - 1]); // Pega o último elemento dinamicamente
