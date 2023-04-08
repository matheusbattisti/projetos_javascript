// Obtém os elementos HTML
const guessInput = document.getElementById("guess");
const guessButton = document.getElementById("guess-btn");
const resultParagraph = document.getElementById("result");
const difficultySelect = document.getElementById("difficulty");
const difficultySection = document.getElementById("difficulty-section");
const gameSection = document.getElementById("game-section");
const triesLeftSpan = document.getElementById("tries-left");
const resetButton = document.getElementById("reset-btn");

// Define as configurações de dificuldade
let maxTries;
let randomNumber;
let triesLeft;

// Define as configurações de dificuldade quando o usuário escolhe uma opção
difficultySelect.addEventListener("change", function () {
  const difficulty = parseInt(difficultySelect.value);

  switch (difficulty) {
    case 1:
      maxTries = 10;
      break;
    case 2:
      maxTries = 7;
      break;
    case 3:
      maxTries = 5;
      break;
    default:
      maxTries = 10;
      break;
  }

  triesLeft = maxTries;
  triesLeftSpan.textContent = triesLeft;

  randomNumber = Math.floor(Math.random() * 100) + 1;

  // Oculta a seleção de dificuldade e exibe o campo de entrada de palpite
  difficultySection.style.display = "none";
  gameSection.style.display = "block";
});

// Adiciona o evento de clique ao botão "Enviar"
guessButton.addEventListener("click", function () {
  // Obtém o valor do campo de texto
  const guess = parseInt(guessInput.value);

  // Verifica se o valor é um número válido
  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultParagraph.textContent = "Por favor, insira um número entre 1 e 100.";
  } else {
    // Compara o palpite do usuário com o número aleatório
    if (guess === randomNumber) {
      resultParagraph.textContent =
        "Parabéns, você acertou em " +
        (maxTries - triesLeft + 1) +
        " tentativas!";
      resetButton.style.display = "block";
    } else if (guess > randomNumber) {
      resultParagraph.textContent = "Muito alto. Tente novamente.";
      triesLeft--;
    } else {
      resultParagraph.textContent = "Muito baixo. Tente novamente.";
      triesLeft--;
    }

    triesLeftSpan.textContent = triesLeft;

    // Verifica se o usuário excedeu o número máximo de tentativas
    if (triesLeft < 0) {
      resultParagraph.textContent =
        "Suas tentativas acabaram. O número correto era " + randomNumber + ".";
      resetButton.style.display = "block";
    }
  }

  // Limpa o campo de texto
  guessInput.value = "";
});

function resetGame() {
  maxTries = 10;
  difficultySelect.value = "1";
  randomNumber = Math.floor(Math.random() * 100) + 1;
  triesLeft = maxTries;
  triesLeftSpan.textContent = triesLeft;
  resultParagraph.textContent = "";

  // Exibe a seleção de dificuldade e oculta o campo de entrada de palpite
  difficultySection.style.display = "block";
  gameSection.style.display = "none";

  // Oculta o botão de reinício
  resetButton.style.display = "none";
}

resetButton.addEventListener("click", resetGame);
