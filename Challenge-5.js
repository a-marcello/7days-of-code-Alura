let frutas = [];
let laticinios =[] ;
let  congelados = [];
let  doces = [];
let produto ;
let classe;
let resp = prompt("gostaria de adicionar proddutos na lista de compras ? digite 1 para sim e 2 para não");

while (resp == "1"){
  
 produto = prompt("qual o nome do produto ?");
 classe = prompt("qual a classe do produto ? digite 1-Fruta 2-laticinios 3-congelado 4-Doces");
  
  if(classe == "1"){
    frutas.push(produto);
    
  }
  else if(classe == "2"){
    laticinios.push(produto);
    
  }
  else if(classe == "3"){
    congelados.push(produto);
    
  }
  else{
    doces.push(produto);
    
  }
  
  resp = prompt("gostaria de adicionar proddutos na lista de compras ? digite 1 para sim e 2 para não");
  
  
  
  
  
}

alert("Lista de compras:\nFrutas: " +frutas+"\nLatícineos: "+laticinios+"\nCongelados: "+congelados+"\nDoces: "+doces);
