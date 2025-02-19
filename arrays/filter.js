// filter - find
const numeros = [1, 5, 10, 30, 230];

const numerosFiltrados = numeros.filter((numero) => {
     return numero > 10
})

//console.log(numeros);

//console.log("===========")

//console.log(numerosFiltrados)

/*
const nomes = ["gato", "cachorro", "elefante", "peixe", "leão"];

const filtro + nomes.filter((nome,) => {
    if (nome.length > 5) {
      return nome;
    }
})
//console.log(filtro);
//console.log(nomes);
*/

// - FIND Em JavaScript, find() é um método usado em arrays para encontrar o primeiro elemento que satisfaz uma determinada condição. Ele retorna o valor do primeiro elemento encontrado ou undefined se nenhum elemento corresponder.

const alunos = ["mathues", "lucas", "henrique"]

const buscaNome = alunos.find((aluno, index) => {
    if (aluno === "mathues") {
     // console.log("O mathues esta na posição " + index)
      return aluno;
    }
});

 //console.log(buscaNome); 

 // findIndex: ele vai procurar a possição do item que eu passei.

 const buscaAluno = alunos.findIndex((aluno) =>{
  return aluno === "henrique"
 })
 console.log(buscaAluno);