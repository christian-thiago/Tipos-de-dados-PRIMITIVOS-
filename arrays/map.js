
// .Map = é usado para percorrer um array e transformar seus elementos em um novo array sem modificar o original.

const alunos = ["mathues", "lucas", "Ana", "Maria"];

const resultado = alunos.map((aluno) => {
  return aluno + "Online"
})

const numeros = [1, 5, 10];

const valoresDobrados = numeros.map((numero) =>{
  return numero * 2
})

console.log(valoresDobrados)

console.log(numeros)