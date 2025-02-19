
// splice
/* 
   Index (indice): a posição no array onde a operação começará.
   Quantidade: O numero de elementos a serem removidos a partir daquela posição.
   elementos que deseja adicionar naquele index (opcional)
*/

//               0  1   2   3
const numeros = [1, 5, 20, 10];

numeros.splice(1, 2, 30);

//console.log(numeros);

const nomes = ["lucas", "ana", "mathues", "maria"]

const resultado = nomes.splice(2,2, "joão", "joaquina") 

console.log(resultado);
console.log("---------------")
console.log(nomes)

