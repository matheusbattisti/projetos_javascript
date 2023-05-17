// obtém o pop-up
const popup = document.querySelector("#popup");

// obtém o botão de cancelar
const cancelButton = document.querySelector("#cancel-button");

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
    }
  }
});
