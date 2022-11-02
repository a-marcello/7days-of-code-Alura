//primeiro o usuario deve inserir o proprio nome
const nome = prompt("qual o seu nome ?");
alert("Olá "+nome+" vamos jogar um jogo");
// inicio do jogo
const area = prompt("qual area gostaria de seguir ? digite 1 para Front-End ou 2 para Back-End");
let final ;
if(area === "1"){
  //bloco do front end
  const exp = prompt("Você escolheu Front-End, gostaria de aprender React ou Vue , digite 1 para React ou 2 para Vue");
  if(exp == "1"){
    const exp2 = prompt("Você escolheu React, gostaria de aprender Vue ? , digite 1 para sim e 2 para não");
    if(exp2 =="1"){
       final = prompt("Agora você domina React e Vue, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");
      
    }
    else if(exp2 =="2"){
      final = prompt("Agora você domina React, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");
      
    }
    
    
    
  }
  else if(exp == "2"){
     const exp3 = prompt("Você escolheu Vue, gostaria de aprender React ? , digite 1 para sim e 2 para não");
    if(exp3 =="1"){
      final = prompt("Agora você domina React e Vue, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");
     
    }
    else if(exp3 =="2"){
      final = prompt("Agora você domina Vue, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");    
    }
    
  }
  
  
}
else if(area === "2" ){
  //bloco Back-End
  const exp = prompt("Você escolheu Back-End, gostaria de aprender C# ou Java ? digite 1 para C# ou 2 para Java");
  if(exp == "1"){
    const exp2 = prompt("Você escolheu C#, gostaria de aprender Java ?  digite 1 para sim e 2 para não");
    if(exp2 =="1"){
       final = prompt("Agora você domina C# e Java, gostaria de estudar um pouco de Front-End ? digite 1 para continar no  Back-End e 2 para ir para no Front-End");
      
    }
    else if(exp2 =="2"){
      final = prompt("Agora você domina C#, gostaria de estudar um pouco de Front-End ? digite 1 para continar no Back-End e 2 para continuar para o Front-End");
      
    }
    
    
    
  }
  else if(exp == "2"){
     const exp3 = prompt("Você escolheu Java, gostaria de aprender C# ?  digite 1 para sim e 2 para não");
    if(exp3 =="1"){
      final = prompt("Agora você domina Java e C#, gostaria de estudar um pouco de Front-End ? digite 1 para continar no  Back-End e 2 para continuar para o Front-End");
     
    }
    else if(exp3 =="2"){
      final = prompt("Agora você domina Java, gostaria de estudar um pouco de Front-End ? digite 1 para continar no Back-End e 2 para continuar para o Front-End");    
    }
    
  }
  
}

if(final ==="1"){
  //bloco Back-End
  const exp = prompt("Você escolheu Back-End, gostaria de aprender C# ou Java ? digite 1 para C# ou 2 para Java");
  if(exp == "1"){
    const exp2 = prompt("Você escolheu C#, gostaria de aprender Java ?  digite 1 para sim e 2 para não");
    if(exp2 =="1"){
       final = prompt("Agora você domina C# e Java, gostaria de estudar um pouco de Front-End ? digite 1 para continar no  Back-End e 2 para ir para no Front-End");
      
    }
    else if(exp2 =="2"){
      final = prompt("Agora você domina C#, gostaria de estudar um pouco de Front-End ? digite 1 para continar no Back-End e 2 para continuar para o Front-End");
      
    }
    
    
    
  }
  else if(exp == "2"){
     const exp3 = prompt("Você escolheu Java, gostaria de aprender C# ?  digite 1 para sim e 2 para não");
    if(exp3 =="1"){
      final = prompt("Agora você domina Java e C#, gostaria de estudar um pouco de Front-End ? digite 1 para continar no  Back-End e 2 para continuar para o Front-End");
     
    }
    else if(exp3 =="2"){
      final = prompt("Agora você domina Java, gostaria de estudar um pouco de Front-End ? digite 1 para continar no Back-End e 2 para continuar para o Front-End");    
    }
    
  }
  
}

else if( final ==="2"){
  
  //bloco do front end
  const exp = prompt("Você escolheu Front-End, gostaria de aprender React ou Vue , digite 1 para React ou 2 para Vue");
  if(exp == "1"){
    const exp2 = prompt("Você escolheu React, gostaria de aprender Vue ? , digite 1 para sim e 2 para não");
    if(exp2 =="1"){
       final = prompt("Agora você domina React e Vue, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");
      
    }
    else if(exp2 =="2"){
      final = prompt("Agora você domina React, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");
      
    }
    
    
    
  }
  else if(exp == "2"){
     const exp3 = prompt("Você escolheu Vue, gostaria de aprender React ? , digite 1 para sim e 2 para não");
    if(exp3 =="1"){
      final = prompt("Agora você domina React e Vue, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");
     
    }
    else if(exp3 =="2"){
      final = prompt("Agora você domina Vue, gostaria de estudar um pouco de Back-End ? digite 1 para continar para o Back-End e 2 para continuar no Front-End");    
    }
    
  }
  
  
}

let resp = prompt("gostaria de adicionar uma nova tecnologia ? digite 1 para sim e 2 para não");
while ( resp === "1"){
  
 const tecnologia = prompt("digite sua tecnologia");
  resp = prompt("digite 1 patra adicionar uma outra tencologia e 2 para parar");
  
  
}
