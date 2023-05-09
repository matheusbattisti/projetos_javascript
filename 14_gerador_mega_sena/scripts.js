const numbers = document.querySelectorAll(".number");
const generateBtn = document.querySelector("#generate");

function generateNumbers() {
  const max = 60; // número máximo
  const min = 1; // número mínimo
  const result = []; // array para armazenar os números gerados

  // gera 6 números aleatórios únicos
  while (result.length < 6) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min; // gera um número aleatório
    if (!result.includes(number)) {
      // verifica se o número já foi gerado
      result.push(number); // adiciona o número ao array
    }
  }

  // exibe os números gerados na tela
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].textContent = result[i]; // atribui o número ao elemento span correspondente
  }
}

generateBtn.addEventListener("click", generateNumbers);
