// Adiciona o evento de scroll na janela
window.addEventListener("scroll", function () {
  // Obtém a posição da janela atual
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Verifica se a posição da janela é maior que 500 pixels
  if (scrollTop > 500) {
    // Exibe o botão "Voltar ao topo"
    document.getElementById("back-to-top").style.display = "block";
  } else {
    // Oculta o botão "Voltar ao topo"
    document.getElementById("back-to-top").style.display = "none";
  }
});

// Adiciona o evento de clique ao botão "Voltar ao topo"
document.getElementById("back-to-top").addEventListener("click", function (e) {
  // Previne o comportamento padrão do link
  e.preventDefault();

  // Retorna ao topo da página
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
