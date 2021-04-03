function calcular() {
  var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
  var segundoValor = parseInt(prompt("Digite o segundo valor:"))
  var operacao = prompt("Digite: 1 para divisão; 2 para multiplicação; 3 para soma; 4 para subtração")

  if(operacao == 1){
    var resultado = primeiroValor / segundoValor
    document.getElementById("resultado").innerHTML = primeiroValor + " / " + segundoValor + " = " + resultado;
  }else if(operacao == 2){
    var resultado = primeiroValor * segundoValor
    document.getElementById("resultado").innerHTML = primeiroValor + " X " + segundoValor + " = " + resultado;
  }else if(operacao == 3){
    var resultado = primeiroValor + segundoValor
    document.getElementById("resultado").innerHTML = primeiroValor + " + " + segundoValor + " = " + resultado;
  }else if(operacao == 4){
    var resultado = primeiroValor - segundoValor
    document.getElementById("resultado").innerHTML = primeiroValor + " - " + segundoValor + " = " + resultado;
  }else{
    document.getElementById("resultado").innerHTML = "Opção inválida";
  }
}