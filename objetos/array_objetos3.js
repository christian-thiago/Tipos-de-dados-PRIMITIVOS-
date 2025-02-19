/*
> Crie  uma lista de contatos onde deve ter o nome da pessoa e o telefone
> Como encontrar um nome dentro da lista de contatos pesquisando = [
  { pelo nome 
*/

const contato = [
  { nome: "mariana", telefone: "9845511664"},
  { nome: "christian", telefone: "9847789652"},
  { nome: "josé", telefone: "9846872355"}
]

function buscaContato(nomePessoa, listaContato){
  if(!nomePessoa){
    console.log("O nome e obrigatório !");
    return "";
  }


const contatoPessoa = listaContato.find((contato) => {
  return contato.nome === nomePessoa
})

if(!contatoPessoa){
  return ("Ops parece que essa pessoa não está na lista de contato!")
}
  return `O ${nomePessoa} tem o telefone: ${contatoPessoa.telefone}`

}

const pessoa1 = buscaContato("mariana", contato);
const pessoa2 = buscaContato("christian", contato);

console.log(pessoa1);
console.log(pessoa2);