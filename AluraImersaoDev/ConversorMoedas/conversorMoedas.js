
function Converter(){
  var valorInformado = document.getElementById("valor");
  var valorUser = valorInformado.value;

  //CONVERSAO
  var conversao = parseFloat(valorUser);
  conversao = parseFloat(valorUser * 5.01).toFixed(2);
  convEuro = parseFloat(valorUser*5.52).toFixed(2);
  convbitcoin = parseFloat(valorUser * 274334.47).toFixed(2);

  //EXIBINDO RESULTADO
  var resultadoDolar = document.getElementById("valorConvertido");
  var valorConvertidoDolar = " DÓLAR AMERICANO: R$" + conversao;
  var valorConvertidoEuro = "EURO: R$" + convEuro;
  var valorConvertidoBitCoin =  "BITCOIN: R$" + convbitcoin;
  console.log(valorConvertidoDolar+"\n "+valorConvertidoEuro+"\n "+valorConvertidoBitCoin);
  resultadoDolar.innerHTML =(valorConvertidoDolar+" <p> "+valorConvertidoEuro+" <p> "+valorConvertidoBitCoin);
}
