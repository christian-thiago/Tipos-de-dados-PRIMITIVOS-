// FOR > So é usado quando você sabe quantas vezes deseja repetir um bloco de código

/*
 for (let i = 0; i < 11; i++) {
  console.log("repetição número " + i)
}
*/

const numero = 2;
let valor = 10;

for (let i = 0; i <= numero; i++) {
  console.log("numero sendo passado" + i)
  valor = valor + 5;
}

console.log(valor);