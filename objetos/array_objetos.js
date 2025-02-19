

// Array de objetos.
const alunos = [
  {
    nome: "mathues",
    idade: 28,
    cargo: "fullstack"
  },
  {
    nome: "ana",
    idade: 30,
    cargo: "Frontend"
  },
  {
    nome: "lucas",
    idade: 23,
    cargo: "RH"
  },
]

console.log(alunos[0].cargo)

alunos.forEach((alunos) => {
   console.log(`aluno(a) ${alunos.nome}`);
   console.log(`cargo atual ${alunos.cargo}`);

   console.log("===========")
} )