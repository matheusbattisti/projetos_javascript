// obtém todos os elementos com classe accordion-header
const headers = document.querySelectorAll(".accordion-header");

// adiciona o listener de clique em cada header
headers.forEach(function (header) {
  header.addEventListener("click", function () {
    // obtém o elemento accordion-item correspondente
    const item = this.parentNode;
    // obtém todos os elementos accordion-item
    const items = document.querySelectorAll(".accordion-item");
    // verifica se o item clicado já está ativo
    const isActive = item.classList.contains("accordion-item--active");
    // fecha todos os itens
    items.forEach(function (item) {
      item.classList.remove("accordion-item--active");
      item.classList.add("accordion-item--closed");
    });
    // se o item clicado não estava ativo, abra-o
    if (!isActive) {
      item.classList.add("accordion-item--active");
      item.classList.remove("accordion-item--closed");
    }
  });
});
