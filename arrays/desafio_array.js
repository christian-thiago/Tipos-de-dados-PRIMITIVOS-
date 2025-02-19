/*
## Desafio 1 -
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 

-> Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.

### FEITO
*/

/*
const cargos = ["fullstack", "frontend", "backend", "mobile"];

function mostrarCargos(lista) {
  console.log(`Esses são os cargos: ${lista.join(", ")}`);
}
cargos.splice(2,1)

mostrarCargos(cargos);

*/


/*
## Desafio 2 - 
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
qual a posição em que esse nome está na sua lista.
-> Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista
*/

//const nomes = ["Alice", "Lucas", "Carol", "David"];

/*
//nomeProcurar("henrique");



/*
## Desafio 3
Crie um array com esses numeros: [5, 15, 23, 2 ]

- Você deve devolver qual é a soma de todos esses numeros usando foreach
*/

/*
const  numeros = [5, 15, 23, 2 ];

let soma = 0

numeros.forEach((numero)=>{
  soma += numero;
});
*/

//console.log(`A soma dos números é: ${soma}`);

/*
## Desafio 4
Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]

- Você deve devolver um array com todos os numeros que são multiplos de 3
*/

/*
const listaDeNumeros = [6, 12, 5, 9, 14, 27];

const multiplosDeTres = listaDeNumeros.filter((numero) => numero % 3 === 0);

console.log(multiplosDeTres);
*/

/*
## Desafio 5
Filtrar Palavras com Mais de 5 Letras usando foreach
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

- Você deve devolver um array com todas palavras que possuem mais de 5 letras
 */

const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

const palavrasMaiorQueCinco = [];
 
palavras.forEach((palavra)=> {
  if (palavra.length > 5){
    palavrasMaiorQueCinco.push(palavra);
  }
});

console.log(palavrasMaiorQueCinco);