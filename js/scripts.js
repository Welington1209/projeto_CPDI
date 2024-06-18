// const toTopBtn = document.querySelector("#to-top-btn");

// const menu = document.querySelector("#hamburguer");
// const navBar = document.querySelector("#nav-bar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     toTopBtn.classList.add("active");
//   } else {
//     toTopBtn.classList.remove("active");
//   }
// });

// menu.addEventListener("click", () => {
//   navBar.classList.toggle("mostrar");
//   navBar.classList.toggle("esconder");

//   if (navBar.classList.contains("mostrar")) {
//     menu.classList.add("menu-cinza");
//     menu.classList.remove("menu-azul");
//   } else {
//     menu.classList.remove("menu-cinza");
//     menu.classList.add("menu-azul");
//   }
// });


/* == Criando Variaveis == 

 ● Até então estávamos colocando os valores nas 
expressões de console;
 ● Porém isso não é tão comum no dia a dia, nós 
precisamos utilizar variáveis;
 ● Que são como containers, que salvam informações 
para quando precisamos utilizar;
 ● Temos como declarar variáveis com let e const;

 ● Vamos ver na prática!*/

 // Variaveis

 // Variaveis LET: Recebe um valor que pode ser mudado posteriormente no codigo

 let nome = "Gustavo"

 nome = "Gustavo Rocha"

 console.log(nome)

 // Variaveis CONST: Recebe um valor que não pode ser mudado posteriormente no codigo

//  const idade = 33

//  idade = 55

//  console.log(idade)

 // Não é permitido iniciar o nome de uma variavel com numeros ou caractere especial

//  let 33idade = 50

//  let !indio = "tupi"

let numero1 = 56

// Para nomes de variaveis, é aconselhado utilizar o modelo "camel case" Ex:

let nomeFulano = "Sergio"

let idadeCachorro = 18

/*Os unicos caracteres que podemos utilizar no inicio de nomes de variaveis são: 
o underline "_" e cifrão "$"" */

let _nome = "Xica da Silva"

const $ano = 1991

/* == Empty Values
● Temos duas palavras reservadas que pertencem a 
    este grupo de dados: undefined e null;
● Undefined geralmente é visto quando utilizamos um 
  código que ainda não foi definido;

● Já null, costuma ser imposto pelos programadores, 
  para determinar que não há ainda um valor;*/


let variavelNull = null 
let variavelUndefined

console.log(variavelNull)
console.log(variavelUndefined)

// Exemplos de uso de variáveis

//Concatenação

let nomecito = "Jaguara"

const idadeFulanete = 59

let gostaDeProgramacao = true

let filmeFavorito = "Emanuelle"

let gameFavorito = "Dominó cos parça"

console.log("O sr(a): " + nomecito + " com a idade de: " + idadeFulanete + " , gosta de programação?: " + gostaDeProgramacao + " , diz que seu filme favorito é: " + filmeFavorito + " e seu jogo preferido é: " + gameFavorito)

//Operações Com Variaveis

let n1 = 3
let n2 = 59

let soma = n1 + n2

console.log(soma)

//Comparando variaveis

let x = 5
let y = 10
console.log(x < y)
console.log(x === y)
console.log(x !== y)

/*Interpolação (Template Strings)
 ● A interpolação é um recurso semelhante a 
concatenação;
 ● Mas nos possibilita a escrever tudo na mesma 
string;
 ● E para funfar, deve ser escrita entre crases;
 ● Podemos executar código JavaScript com ${ algum 
código }; */

//USANDO INTERPOLAÇÃO

//Exemplo 01

let produto = "Maça"

let quantidade = 10

let precoUnitario = 2.5

let total = quantidade * precoUnitario

console.log("Você comprou " + quantidade + " de " + produto + " por " + total + " de reais.")

console.log(`Você comprou ${quantidade} de ${produto} por ${total} de reais.`)

//Exemplo 02

const animal1 = "Gatos"
const animal2 = "Cachorros"
let qtdGato = 5
let qtdCachorro = 7
let totalAnimais = qtdGato + qtdCachorro

let frase = `Minha vó carquetica gosta de ${animal1} e ${animal2}. Possui ${qtdGato} e também ${qtdCachorro}, totalizando ${totalAnimais}. É ou não uma acumuladora?`

console.log(frase)

//Exemplo 03

// let nomeUsuario = window.prompt("Oh meo! Quem ousa entrar na Matrix?")

// window.alert(Opa, é vc sr(a) ${nomeUsuario}. Perdoa a minha insignificancia!)

// CONVERTENDO VALORES DE UMA VARIAVEL

//DE STRING PARA NUMEROS

// Usando parseInt() para números inteiros

let stringNumero = "42"
let numero = parseInt(stringNumero)
console.log(numero)

//Usando parseFloat() para números de ponto flutuante

let stringNumeroQuebrado = "3.14"
let numeroQuebrado = parseFloat(stringNumeroQuebrado)
console.log(numeroQuebrado)

//Usando Number() Mais recomendado
let stringNumero22 = "37"
let numero22 = Number(stringNumero22)
console.log(numero22)

//Usando o operador + antes do nome da variavel

let stringNumero1 = "1991"
let numeroConvertido1 = +stringNumero1

let stringNumero2 = "1.992"
let numeroConvertido2 = +stringNumero2

console.log(numeroConvertido1, numeroConvertido2)

//Convertendo De número para string:

//Usando toString()

let numero666 = 666
let stringNumero666 = numero666.toString()
console.log(stringNumero666)

  //Usando String()

  let numero33 = 33
  let stringNumero33 = String(numero33)
  console.log(stringNumero33)

  /* CONHECENDO ESTRUTURAS CONDICIONAIS

 ● Os programas são executados de cima para baixo;
 ● Com estas estruturas podemos alterar o fluxo de 
execução;
 ● O caminho dependerá das condições e 
comparações;*/


 //USANDO IF

 /*if: Executa um bloco de código se uma condição for verdadeira.

   SINTAXE: if (condição) {} */

//EXEMPLO 01

let idadeMaria = 75
let idadeJoao = 63

if (idadeMaria > idadeJoao) {
  console.log("Eita pesti, a dona Maria é mais véia que o Seu João")
}

//EXEMPLO 02

let nameUsuario = "Gabriel"

if (nameUsuario === "Gabriel") {
  console.log(`Fala meu camarada ${nameUsuario}, seu chifrudo tá me devendo!`)
}

//USANDO ELSE IF 
/* ELSE IF: Adiciona uma nova condição se a anterior for falsa.

SINTAXE: 
if (condicao) {
    
} else if (outraCondicao) {} */

//EXEMPLO 01

let logadoTiktik = true

if (logadoTiktik === true) {
  console.log("Bem vindo meu caro desocupado!")
} else if (logadoTiktik === false) {
  console.log("Até que enfim foi lavar o banheiro.")
}

//EXEMPLO 02

let nomeUser = "asadasd"

if (nomeUser === "Rita") {
  console.log("Seja Bem vinda Rita, a coroa inteiraça.")
} else if (nomeUser === "Conceição") {
  console.log("Ih rapaiz, não é a Rita! Fuja loco!")
} 

//USANDO O ELSE
/*else: Executa um bloco de código se todas as condições anteriores forem falsas.
  
  SINTAXE: if (condição) {
  }

  else if (outra condição) {
  }
  
  else {}*/

  //EXEMPLO 01

  let corEscolhida = "green"

  if (corEscolhida === "white") {
    console.log("Otima escolha! Seu possante será branco.")
  } else if (corEscolhida === "red") {
    console.log("Opa, seu possante será vermelho! Daora meu broder!")
  } else {
    console.log("Só temos 02 cores disponiveis... Escolha entre branco ou vermelho.")
  }

  //EXEMPLO 02

  let idadeUser = 33

  if (idadeUser <= 17) {
    console.log("Cai fora rapá, tu é di meno!")
  } else if (idadeUser === 18) {
    console.log("Juízo aí meu broder...")
  } else if (idadeUser >= 90) {
    console.log("Caraca vei, tens folego ainda... Então tá.")
  } else {
    console.log("Boa diversão meu nobre hehe")
  }

  /*Operadores lógicos
 ● Os operadores lógicos servem para unir duas ou 
mais comparações;
 ● O resultado final também é um boolean;
 ● && - AND - true apenas se os dois lados forem 
verdadeiros;
 ● || - OR - para ser true, um lado como true é 
suficiente;
 ● !  - NOT - este operador inverte a comparação; */


 // EXEMPLO 01 - && "AND"

 let nomeUsuario1 = "Astolfo"
 let senhaUsuario1 = 123459

if (nomeUsuario1 === "Astolfo" && senhaUsuario1 === 123456 ) {
  console.log("Login realizado com sucesso!")
} else {
  console.log("Insira os seus dados corretamente, boca aberta!")
}

//EXEMPLO 01 - || "OR"

let temDinheiro = false
let temCartao = false

if(temDinheiro === true || temCartao === true) {
  console.log("Opa, tu tem cash patrão, tá liberado a compra!")
} else {
  console.log("Ih rapaiz, tá sem money... Não vai rolar a compra.")
}

//EXEMPLO 01 - ! NOT

let estaChovendo

if (!estaChovendo) {
  console.log("Ih parece que não tá choveno, que tal uma vortinha de bike?")
} else {
  console.log("Ih, ta chovendo, melhor ficar em casa vendo novela ca vó.")
}

//PRATICA

let idadeParticipante = 18
let temDocumento = true

if (idadeParticipante <= 17 && temDocumento) {
  console.log("Menor, mas pode participar do evento.")
} else if (idadeParticipante <= 17 || !temDocumento) {
  console.log("Não pode participar")
} else {
  console.log("Pode participar.")
}

 /* Estrutura condicional: switch
 ● O switch pode ser utilizado para organização de um 
excesso de if/else;
 ● Cada if seria um case;
 ● Para cada case, temos que adicionar um break;
 ● E temos o default, que é como o else; */

 /* SINTAXE: switch (expressao) {
  case valor1:
    
    break
  case valor2:
    
    break
  
  default:
    // código a ser executado se nenhum dos casos anteriores for correspondido
} 
    
*/

//EXEMPLO 01

const job = "Programador"

switch (job) {
  case "Programador":
    console.log("Caraca vc é um programador, vc faz programa hehe")
    break

  case "Agricultor":
    console.log("Olha, ele cuida dos pepinos...")
    break

  case "Advogado":
    console.log("Alá ele é um advogado...")
    break
  default:
    console.log("Tu não tem job meu broder que isso...")
}

//INCREMENTO E DECREMENTO: são usados para aumentar ou diminuir o valor de uma variável numérica em +1 OU -1

 // ANTES DA VARIAVEL: Quando você usa o operador de incremento ou decremento antes da variável (++variavel ou --variavel), a mudança é feita imediatamente.

 let contagemMais = 5
 let resultaMais = ++contagemMais * 2

 console.log(`O resultaMais ficou ${resultaMais}`)
 console.log(`A contagemMais ficou ${contagemMais} `)

 let contagemMenos = 5
 let resultaMenos = --contagemMenos * 2

 console.log(`O resultaMenos ficou ${resultaMenos}`)
 console.log(`A contagemMenos ficou ${contagemMenos} `)

 //DEPOIS DA VARIAVEL: Quando você usa o operador de incremento ou decremento depois da variável (variavel++), o valor inicial da variável é usado em qualquer expressão aí só depois é efetuado a mudança

 let contagemMais2 = 6
 let resultadoMais2 = contagemMais2++ * 2
console.log(`O resultadoMais2 ficou: ${resultadoMais2}`)
console.log(`A contagemMais2 virou: ${contagemMais2}`)

let contagemMenos2 = 5
let resultadoMenos2 = contagemMenos2-- * 2
console.log(`O resultadoMenos2 ficou: ${resultadoMenos2}`)
console.log(`A contagemMenos2 virou: ${contagemMenos2}`)

//ESTRUTURAS DE REPETIÇÃO
  /* O que são estruturas de repetição?
 ● Um bloco de código que se repete até uma 
condição ser satisfeita;
 ● Isso evita a repetição desnecessária do nosso 
código;
 ● A suas sintaxes são diferentes, mas as duas chegam 
no mesmo resultado;
 ● Temos que nos atentar ao loop infinito */

 //WHILE:  é usada para repetir um bloco de código enquanto uma condição especificada for verdadeira.

 /*SINTAXE: while (condição) {} */

 //EXEMPLO 01 - Feliz Ano novo

 let contagemRegressiva = 10

 while (contagemRegressiva > 0) {
  console.log(contagemRegressiva)
  contagemRegressiva--
 }

 console.log("Feliz ano novo, cambada!")

 //EXEMPLO 02

 let estoque = 5

 while (estoque > 0) {
  console.log(`Produto em estoque. Quantidade restante ${estoque}`)
  estoque--
 }

 console.log("Produto esgotado")

 //FOR: é usada quando você sabe exatamente quantas vezes deseja repetir uma ação. Ele consiste em três partes: inicialização, condição e expressão final.

/* SINTAXE: for (inicialização; condição; expressão final) {} */

//EXEMPLO 01

for (let i = 0; i < 10; i++) {
  console.log("Repetindo algo")
}

//Exemplo 02

let estoque1 = 10

for (estoque1; estoque1 > 0; estoque1 = estoque1 - 1) {
  console.log(`O estoque está diminuindo ${estoque1}`)
}

console.log(`O estoque é igual a ${estoque1}`)

/* Forçando a saída de um loop
 ● Com a instrução de break podemos parar um loop, 
fazendo que repetições cessem;
 ● Isso pode poupar memória, pois o código será 
executado menos vezes;
 ● Não é tão comum, mas é um recurso válido do javascripitis; */

//EXEMPLO 01

let estoque2 = 20

for(estoque2; estoque2 > 10; estoque2--) {
  console.log(`O estoque é ${estoque2}`)

  if(estoque2 === 12) {
    console.log("Atenção, nosso estoque chegou em 12!")
    break
  }
}

/*Pulando uma execução do loop
 ● A palavra reservada continue, pode pular uma ou 
mais execuções do loop;
 ● É um recurso utilizado de forma semelhante ao 
break;*/

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log("Contagem: " + i)
}

/* O que são funções?
 ● Estruturas de código menores, podemos dividir 
nosso código em várias funções;
 ● O ideal é que cada uma tenha apenas um único 
objetivo;
 ● Isso nos faz poupar código, pois podemos 
reaproveitá-las;
 ● A linguagem tem várias funções já criadas, e nós 
podemos criar as nossas;

    Definindo uma função
  ● A estrutura da função é um pouco mais complexa;
  ● Primeiramente utilizamos a palavra function, isso 
  inicia uma função;
  ● Precisamos depois nomeá-la;
  ● Os parâmetros, que são uma espécie de 
  configuração, ficam entre ( ) depois do nome;
  ● O corpo da função fica entre  { };
  ● Geralmente uma função retorna um valor; */

 //SINTAXE: function nomeDaFuncao () {}


//EXEMPLO 01

function minhaFuncaoFofa () {
  console.log("Testando, 3, 2, 1...")
}

minhaFuncaoFofa()

//EXEMPLO 02

const minhaFuncaoFofa2 = function() {
  console.log("Função fofa ativada com sucesso pela variavel")
}

minhaFuncaoFofa2()

//EXEMPLO 03 COM PARAMETROS

function minhaFuncaoFofaFaladeira (txt) {
  console.log(`Imprimindo o que o usuario quer dizer ou pensar: ${txt}`)
}

minhaFuncaoFofaFaladeira("sono preguiça etc")

/* Usar return é fundamental em funções porque permite que elas produzam algum resultado que pode ser usado em outras partes do código. Sem o return, não conseguimos usar o resultado dela em outra parte do código. */

const a = 10
const b = 20
const c = 30
const d = 40

function somandoValores(n1, n2){
  return n1 + n2
}

const resultado = somandoValores(d, b)

console.log(resultado)