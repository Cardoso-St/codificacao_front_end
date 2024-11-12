const botaoAdicionar = document.querySelector(".btn-adicionar")
const botaoRemover = document.querySelector(".btn-remover")
const botaoAlterar = document.querySelector(".btn-alterar")
const caixa = document.querySelector(".caixa")

botaoAdicionar.addEventListener("click",  () => {
    caixa.classList.add("vermelho")
})

botaoAdicionar.addEventListener("click",  () => {
    caixa.classList.remove("vermelho", "verde")
})

botaoAdicionar.addEventListener("click",  () => {
    caixa.classList.toggle("verde")
})