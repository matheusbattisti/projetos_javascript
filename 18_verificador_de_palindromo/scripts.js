const botaoVerificar = document.getElementById("botao-verificar");
const palavraInput = document.getElementById("palavra");
const resultado = document.getElementById("resultado");

botaoVerificar.addEventListener("click", () => {
  verificarPalindromo();
});

palavraInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    verificarPalindromo();
  }
});

function verificarPalindromo() {
  const palavra = palavraInput.value;
  const palavraInvertida = palavra.split("").reverse().join("");
  if (palavra === palavraInvertida) {
    resultado.innerHTML = `A palavra ${palavra} é um palíndromo!`;
  } else {
    resultado.innerHTML = `A palavra ${palavra} não é um palíndromo.`;
  }
}
