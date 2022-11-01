const nome = prompt("qual seu nome ?");
const idade = prompt("qual sua idade ?");
const ling = prompt("Qual linguagem de programação você está estudando");

const mensagem = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${ling}!`
alert(mensagem);

const desaf = prompt("Você gosta de estudar "+ling + "?Responda com o número 1 para SIM ou 2 para NÃO")

if(desaf == 1){
  alert("Muito bom! Continue estudando e você terá muito sucesso")
}
else{
  alert("Ahh que pena... Já tentou aprender outras linguagens?")
  
}
