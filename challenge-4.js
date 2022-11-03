// escolher o numero secreto  
var numero = Math.floor(Math.random() * (10 -0 + 1) + 0);
//declarar a variavel que recebera as infos do player 
var chute ;
//criar a quantidade de chutes
var quant = 3;
while(chute != numero || quant > 1){
  chute = prompt("chute um número entre 0 e 10");
  //chute é menor que o numumero 
  if(chute < numero){
    alert("chute um número mais alto");
  }
  else if (chute > numero){
    alert("chute um número mais baixo");
  }
  quant--;
  
}

if(chute == numero){
  alert("parabéns voce ganhou e estavam sobrando "+quant+" tentativas");
}
else if (chute != numero){
  alert("Que pena , suas tentativas acabaram, jogue novamente");
}
