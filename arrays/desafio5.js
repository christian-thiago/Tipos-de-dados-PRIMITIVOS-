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
    palavrasMaiorQueCinco.push(palavra); // o push coloca a palavra dentro do array
  }
});

console.log("Palavras maiores que 5 letras são: "+ palavrasMaiorQueCinco);

/* sempre que for percorrer uma lista usar
Array.forEach(() =>{

})
  */