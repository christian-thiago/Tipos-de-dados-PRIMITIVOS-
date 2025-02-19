/*
> crie um carrinho de compras com lista de produto onde cada produto tem um nome e preco:
> calcule o total do carrinho
*/

const carrinho = [
   { nome:" tênis", preco: 99 },
   { nome: "calça jeans", preco: 79 },
   { nome: "Camiseta", preco: 60 },
   { nome: "Coca cola", preco: 6 },
   
]

// let totalCarrinho = 0;

//carrinho.forEach((produto) => {
//     totalCarrinho += produto.preco     
// })

// console.log(`O total do seu carrinho é: ${totalCarrinho}`)


function calcularTotalCarrinho(carrinho) {
  let total = 0;
  let totalProdutos = carrinho.length;

  carrinho.forEach((produto) => {
    total += produto.preco
  })

  return `Seu carrinho tem ${totalProdutos} item e o total do carrinho ficou: ${total}`
 

}

const totalCarrinho = calcularTotalCarrinho(carrinho)

console.log(totalCarrinho)

const produtos = [
  { nome: "Iphone 15 pro max", preco: 8900 },
  { nome: "Capinha Iphone", preco: 150 },
  
]

const totalCarrinho2 = calcularTotalCarrinho(produtos)

console.log(totalCarrinho2)


// 



