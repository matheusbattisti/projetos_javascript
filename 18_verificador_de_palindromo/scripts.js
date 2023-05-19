const botaoVerificar = document.querySelector("#botao-verificar");
const palavraInput = document.querySelector("#palavra");
const resultado = document.querySelector("#resultado");

botaoVerificar.addEventListener("click", () => {
  verificarPalindromo();
});

palavraInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    verificarPalindromo();
  }
});

function verificarPalindromo() {
  const palavra = palavraInput.value;
  const palavraInvertida = palavra.split("").reverse().join("");
  if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    resultado.innerHTML = `A palavra ${palavra} é um palíndromo!`;
  } else {
    resultado.innerHTML = `A palavra ${palavra} não é um palíndromo.`;
  }
}
