const calculos = {
  n1: 15,
  n2: 30,
  soma: function (){
    return this.n1 + this.n2
  },
}

// caso eu queira mudar o valor n1 e n2 basta eu fazer :

calculos.n1 = 100; // assim eu mudei o valor de 15 para 100!
calculos.n2 = 50;

const resultado = calculos.subtrair()
// console.log(resultado);