const botoes = document.querySelectorAll(".btn");
const conteudos = document.querySelectorAll(".conteudo");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    const btnSelecionado = document.querySelector(".btn.selecionado");
    btnSelecionado.classList.remove("selecionado");
    const conteudoSelecionado = document.querySelector(".conteudo.selecionado");
    conteudoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado"); 
    conteudos[indice].classList.add("selecionado");
     
  });
});