var numSecreto = parseInt(Math.random()*11);
console.log("nSecreto: " + numSecreto);

var chances = 3;
console.log("score: "+ chances);

function Chutar(){
    var elemento = parseInt(document.getElementById("valor").value);
    console.log("elemento: " +elemento);
    var resultado = document.getElementById("resultado");
        
        if(elemento == numSecreto){
            resultado.innerHTML = "MENTALIZEI!" + " <p>" + " Você Acertou" + "<p> TENTATIVAS: " + chances;               
                }else if(elemento < numSecreto ){        
                    resultado.innerHTML = "O NÚMERO SECRETO É MAIOR" + "<p> TENTATIVAS: " + chances;                  
                 }else if(elemento>numSecreto){
                    resultado.innerHTML = "O NÚMERO SECRETO É MENOR" + "<p> TENTATIVAS: " + chances;                    
                 }    
                 chances--;  
                 if(chances == 0){
                    window.alert("FIM DE JOGO :( APERTE F5 PARA COMEÇAR NOVAMENTE!");                    
                    resultado.innerHTML = "TENTATIVAS: " + chances;
                 } 
            }