function calculateTip() {
  // Obter valor da conta e qualidade do serviço
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;

  // Validar entrada
  if (billAmount === "" || serviceQuality == 0) {
    alert("Por favor, preencha os campos!");
    return;
  }

  // Calcular gorjeta e valor total
  var tipAmount = billAmount * serviceQuality;
  var totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);

  // Exibir resultados
  document.getElementById("tipAmount").value = "R$" + tipAmount.toFixed(2);
  document.getElementById("totalAmount").value = "R$" + totalAmount.toFixed(2);
}
