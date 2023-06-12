//GET
const monstrarProdutos = ()=>{
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta =>{
        return resposta.json()
    })
}
//POST
const adicionarProdutos = (imagem, nome, preco)=>{
    return fetch(`http://localhost:3000/produtos`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(
            {
                imagem: imagem,
                nome: nome,
                preco: preco
            }
        )
    })
    .then(resposta =>{
        return resposta.body
    })
}
export const servicosApi = {
    monstrarProdutos,
    adicionarProdutos
}