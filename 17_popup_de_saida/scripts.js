// obtém o pop-up
const popup = document.getElementById("popup");

// obtém o botão de cancelar
const cancelButton = document.getElementById("cancel-button");

// remove exibição de pop up ao entrar na pagina
localStorage.removeItem("popupDisplayed");

// adiciona listener de clique no botão de cancelar
cancelButton.addEventListener("click", () => {
  // fecha o pop-up
  popup.style.display = "none";
  // armazena o valor indicando que o pop-up já foi exibido
  localStorage.setItem("popupDisplayed", "true");
});

// adiciona listener de saída do cursor da página

document.addEventListener("mouseout", (event) => {
  // verifica se o pop-up já foi exibido nesta visita
  const popupDisplayed = localStorage.getItem("popupDisplayed");

  if (!popupDisplayed) {
    // verifica se o cursor do mouse saiu da página
    if (event.relatedTarget === null) {
      // exibe o pop-up
      popup.style.display = "block";
      // define a mensagem de saída
      const message = "Você tem certeza que deseja sair?";
      // define a propriedade returnValue do evento para exibir a mensagem de saída
      window.onbeforeunload = () => message;
    }
  }
});

// adiciona listener de clique em links
document.addEventListener("click", (event) => {
  // verifica se o link não é para sair da página
  if (!event.target.href) return;
  // fecha o pop-up
  popup.style.display = "none";
  // armazena o valor indicando que o pop-up já foi exibido
  localStorage.setItem("popupDisplayed", "true");
});
