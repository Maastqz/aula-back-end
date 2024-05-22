//console.log("hello World");

let nome = "João";
let idade = 18;
let anoAtual = 2024;

coletarAnoNascimento(nome, idade, anoAtual);
coletarAnoNascimento("Mauricio", 15, 2024);
coletarAnoNascimento("Claudio", 23, 2024);

function coletarAnoNascimento(nomeRecebido, idadeRecebida, anoAtualRecebido) {
  let anoNascimento = anoAtualRecebido - idadeRecebida;
  console.log(`O ${nomeRecebido} nasceu em ${anoNascimento} !!`);
}

function somarValores (a, b){
  return a + b 
}



console.log('----------------------------------------')
//função anonima

let soma = function (a, b){
  return a + b
}

console.log ("Exemplo com função anonima", soma (15,20))
console.log ("Exemplo com função convensional", somarValores (5, 10))



console.log('----------------------------------------')
//função seta (arrow function) =>

let ParOuImpar = (numero) => {
  if (numero % 2 == 0) {
    console.log(`O numero ${numero} é par`)
  }else {
    console.log(`O numero ${numero} é impar`)
  }
}

ParOuImpar(10)
ParOuImpar(15)
ParOuImpar(4)

let multiplicar = numero => numero * numero

let multiplicar2 = (numero) =>{
  return numero * numero
}
console.log(`Arrow function: ${multiplicar(5)}`)
console.log(`Arrow function convencionais: ${multiplicar2(5)}`)



console.log('----------------------------------------')
//funções com  argumentos opcionais
function NomeComIdade(nome, idade){
  if(idade === undefined){
    console.log(`Seu nome é ${nome}`)
  }else {
    console.log(`Seu nome é ${nome} e voce tem ${idade} anos`)
  }
}
NomeComIdade("João", 16)
NomeComIdade("Carlos")



console.log('----------------------------------------')
//funções com valores padrao(default)
