/*
Desafio 1 -
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 

-> Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.
*/

const cargos = ["fullstack", "frontend", "backend", "mobile"];

const posicaobackend = cargos.indexOf("backend");

if (posicaobackend !== -1){
  cargos.splice(posicaobackend, 1)
  console.log("Removendo cargo backend, ele está na posição " + posicaobackend)
  console.log(cargos);
  return;
}

if (posicaobackend === -1){
  console.log("Esse item não foi encontrado na lista de cargos!")
  console.log(cargos);
}