function multi (a, b){
  return a*b ;
  
}

function sum (a,b){
  return a+b ;
}

function sub(a,b){
  return a-b ;
}

function divi(a,b){
  return a/b;
}


var func = 0;

while(func == 0){
    var calc = prompt("Escolha a operação a ser realizada: 1-Multiplicação ; 2-Soma; 3-Subtração; 4-Divisão; 5-Sair");
    if(calc !=5){
        var a = prompt("Insira o primeiro número para realizar a operação");
        var b = prompt("Insira o segundo número para realizar a operação");
    }
    
    switch(calc){
      case "1": 
        alert("O resultdado da operação de multiplicação é: "+multi(parseInt(a),parseInt(b)));
        break;
      
      case "2" :
        alert("O resultdado da operação de soma é: "+sum(parseInt(a),parseInt(b)));
        break;
      case "3" :
        alert("O resultdado da operação de subtração  é: "+sub(parseInt(a),parseInt(b)));
        break;
      case "4":
        alert("O resultdado da operação de divisão é: "+divi(parseInt(a),parseInt(b)));
        break;
      case "5":
        func = "1";
        break;
      default:
        alert("Nenhuma operação válida foi inserida, tente novamente");
        break;
        
        
    }
    
  
  
  
  
  
  
}

alert("Até a próxima");
