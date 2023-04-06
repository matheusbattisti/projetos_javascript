const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  resetErrors();
  validateInputs();
});

function resetErrors() {
  errorMessages.forEach((errorMessage) => {
    errorMessage.innerText = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}

function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue === "") {
    setError(nome, "Nome não pode ficar em branco");
  }

  if (emailValue === "") {
    setError(email, "E-mail não pode ficar em branco");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }

  if (assuntoValue === "") {
    setError(assunto, "Assunto não pode ficar em branco");
  }

  if (mensagemValue === "") {
    setError(mensagem, "Mensagem não pode ficar em branco");
  }
}

function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.innerText = errorMessage;
  input.parentElement.classList.add("error");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
