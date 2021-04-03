function advinhar() {
  var numeroSecreto = parseInt(Math.random()*20)
  var tentativas = 3

  while(tentativas > 0){
    var chute = parseInt(prompt("Digite um número entre 0 e 20. Você tem " + tentativas + " tentativas."))
    
    if(numeroSecreto == chute){
      alert("Acertou")
      break
    }else if(chute > numeroSecreto){
      tentativas = tentativas - 1
      alert("O numero secreto é menor. Você ainda tem " + tentativas + " tentativas.")
    }else if(chute < numeroSecreto){
      tentativas = tentativas - 1
      alert("O numero secreto é maior. Você ainda tem " + tentativas + " tentativas.")
    }
  }

  if(chute != numeroSecreto){
    alert("Suas tentativas acabaram, tente novamente. O número secreto era " + numeroSecreto)
  }
}