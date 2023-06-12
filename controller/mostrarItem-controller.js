import { servicosApi } from "../services/servicos.js"
const listaProdutos = document.querySelector('[data-listaProdutos]')

const novaLinha = ( imagem, nome, preco, id)=>{
    const conteudoProduto = document.createElement('div')
    conteudoProduto.classList.add('box-produto')

    const novoProduto = `
        <div class="imagem-produto">
            <img src="${imagem}" alt="">
        </div>
        <div class="descricao-produto">
            <h3>${nome}</h3>
        </div>
        <div class="preco-produto">
            <h4>R$: ${preco}</h4>
        </div>
    `
    conteudoProduto.innerHTML= novoProduto
    conteudoProduto.dataset.id = id
    return conteudoProduto
}

servicosApi.monstrarProdutos()
.then(data =>{
    data.forEach(elemento =>{
        listaProdutos.appendChild( novaLinha( elemento.imagem, elemento.nome, elemento.preco, elemento.id ) )
    })
})