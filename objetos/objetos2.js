
const pessoa = {
  nome: "mathues",
  idade: 28,
  cargo: "full Stack",
  saudacao: function () {
    console.log("Olá eu sou o Mathues!")
  }
}

// console.log(pessoa)
// pessoa.saudacao();

const calculos = {
  soma: function (numero1, numero2) {
    return numero1 + numero2
  },
  subtrair: function (numero1, numero2) {
    return numero1 - numero2;
}
}

const resultadoSoma = calculos.soma(10, 20)
console.log(resultadoSoma);

const resultadoSubtracao = calculos.soma(10, 20)
console.log(resultadoSubtracao);

