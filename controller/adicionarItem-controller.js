import { servicosApi } from "../services/servicos.js";

const form = document.querySelector('[data-form]')
form.addEventListener('submit', evento =>{
    evento.preventDefault()
    let imagem = evento.target.querySelector('[data-imagem]').value
    let nome = evento.target.querySelector('[data-nome]').value
    let preco = evento.target.querySelector('[data-preco]').value
    servicosApi.adicionarProdutos(imagem, nome, preco)
    .then(
        ()=>{
            window.location.href="../paginas/produtoAdicionado.html"
        }
    )
})
