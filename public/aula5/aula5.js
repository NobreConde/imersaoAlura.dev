function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if(filmeFavorito.endsWith('.jpg')){ //ele está verificando se termina com .jpg
      listarFilmesNaTela(filmeFavorito)
      console.log(filmeFavorito)
    }else{
      alert("Imagem inválida")
    }
    campoFilmeFavorito.value = "" //efetua a limpeza do campo após o click do botão, mesmo se certo ou errado
  }
  
  function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
    console.log(filme)
  }