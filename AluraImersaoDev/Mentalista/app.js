var numSecreto = parseInt(Math.random()*11);
var chances = 3;
console.log("score: "+ chances);

function Chutar(){
    
    var elemento = parseInt(document.getElementById("valor").value);
    console.log("elemento: " +elemento);
        
    console.log("nSecreto: " + numSecreto);
    var resultado = document.getElementById("resultado");
    while(chances<=3){
        if(chances > 0){
            if(elemento == numSecreto){
                resultado.innerHTML = "MENTALIZEI!" + " <p>" + " Você Acertou";               
                chances-=1;
                
                console.log("score "+chances);
            }
            else
                {
                if(elemento < numSecreto )
                {        
                    chances-=1;
                  resultado.innerHTML = "O NÚMERO SECRETO É MAIOR";
                  
                 }else if(elemento>numSecreto){
                    resultado.innerHTML = "O NÚMERO SECRETO É MENOR";
                    
                 }         
            }
        }    
    }
    
}