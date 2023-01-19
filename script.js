const fadeForm = document.querySelector("#fadeForm");
const abrirForm = document.querySelector(".botao_preencher-form");
const form = document.querySelector("#form");
const btnContato = document.querySelector(".contato")
const toggleForm = () => {
    [form, fadeForm].forEach(form => form.classList.toggle("hide"))
}
[abrirForm, fadeForm, btnContato].forEach((e) => {
    e.addEventListener("click", () => toggleForm())
})

const fadeModal= document.querySelector("#fadeModal");
const botaoEntrarEmContato = document.querySelector(".botao_entrar-em-contato");
const botaoSolicitarProposta = document.querySelector(".botao_solicitar-proposta")
const fecharModal = document.querySelector(".botao_fechar-form");
const modal = document.querySelector("#modal");

const toggleModal = () => {
    [modal, fadeModal,].forEach(modal => {modal.classList.toggle("hide")})
}
[botaoEntrarEmContato, botaoSolicitarProposta, fecharModal, fadeModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})

const btnReceberContato = document.querySelector(".btnReceberContato")
const inputs = document.querySelectorAll(".inputForm")
console.log(inputs)
btnReceberContato.addEventListener("click", ()=> {
    toggleModal(); 
    toggleForm()
    inputs.forEach(input => {
        input.value = ""
    })
})
