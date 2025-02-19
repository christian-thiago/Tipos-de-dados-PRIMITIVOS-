// objetos com propriedades aninhadas

const pessoa = {
  nome: "mathues",
  idade: 28,
  cargo: "fullstack",
  endereco: {
      rua: "Avenida dev 123",
      complemento: "Em frente a praça",
      cep:79000230,
  }
}

console.log(pessoa.endereco.numero);