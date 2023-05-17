const lista = document.querySelector("ul");

const botao = document.querySelector(".botao");

botao.addEventListener("click", () => {
    if (lista.dataset.listaitens == "esconder") {
        lista.setAttribute("data-listaitens", "mostrar")
    } else{
        lista.setAttribute("data-listaitens", "esconder")
    }
})