let frutas = [];
let laticinios =[] ;
let  congelados = [];
let  doces = [];
let produto ;
let classe;
let resp = prompt("gostaria de adicionar ou remover produtos na lista de compras ? digite 1 para adicionar , 2 para remover e 3 para finalizarmos a lista");

while (resp == "1" || resp =="2"){
 if(resp == "1"){
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
 }
 else if(resp =="2"){
    let remov = prompt("Qual produto deseja remover ?\nFrutas: " +frutas+"\nLatícineos: "+laticinios+"\nCongelados: "+congelados+"\nDoces: "+doces);
    let aux= [];
    let indice ; 
    if(frutas.includes(elemento)){
      indice = frutas.indexOf(remov);
      frutas.splice(indice,1);
      
        

    }
    else if(laticinios.includes(elemento)){
        indice = laticinios.indexOf(remov);
        laticinios.splice(indice,1);

    }
    else if(congelados.includes(elemento){
         indice = congelados.indexOf(remov);
         congelados.splice(indice,1);

    }
    else if(doces.includes(elemento)){
        indice = doces.indexOf(remov);
        doces.splice(indice,1);

    }
    else{
      alert("Não foi possível encontrar o item dentro da lista!");
    }
    
   alert("Lista de compras:\nFrutas: " +frutas+"\nLatícineos: "+laticinios+"\nCongelados: "+congelados+"\nDoces: "+doces);
   
 }
  
  resp = prompt("gostaria de adicionar ou remover proddutos na lista de compras ? digite 1 para adicionar , 2 para remover e 3 para finalizarmos a lista");
  
  
  
  
  
}

alert("Lista de compras:\nFrutas: " +frutas+"\nLatícineos: "+laticinios+"\nCongelados: "+congelados+"\nDoces: "+doces);
