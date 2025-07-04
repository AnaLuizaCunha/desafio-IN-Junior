function convertFromReal(real) {
  const dolar = 5.7;
  const euro = 6.1;
  const realToDolar = real * dolar;
  const realToEuro = real * euro;
  alert(
    `O valor em reais é R$${real}. A conversão para dólar é $${realToDolar}. E a conversão para euro é €${realToEuro}`
  );
}

const real = Number(prompt("Digite o valor em reais:"));
convertFromReal(real);
