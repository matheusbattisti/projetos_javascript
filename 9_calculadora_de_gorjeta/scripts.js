function calculateTip() {
  // Obter valor da conta e qualidade do serviço
  const billAmount = document.getElementById("billAmount").value;
  const serviceQuality = document.getElementById("serviceQuality").value;

  // Validar entrada
  if (billAmount === "" || serviceQuality == 0) {
    alert("Por favor, preencha os campos!");
    return;
  }

  // Calcular gorjeta e valor total
  const tipAmount = billAmount * serviceQuality;
  const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

  // Exibir resultados
  document.getElementById("tipAmount").value = "R$" + tipAmount.toFixed(2);
  document.getElementById("totalAmount").value = "R$" + totalAmount.toFixed(2);
}
