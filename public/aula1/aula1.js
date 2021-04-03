function calcular() {
    var valorEmDolarTexto = prompt("Qual valor você quer converter?")
    var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
    var valorEmReal = valorEmDolarNumero * 5.50
    var valorEmRealDecimal = valorEmReal.toFixed(2)

    alert("O valor em real é " + "R$" + valorEmRealDecimal)
}

