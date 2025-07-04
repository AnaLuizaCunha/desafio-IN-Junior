function calculateFactorial(n) {
  let total = 1;
  for (let i = n; i > 1; i--) {
    total = total * i;
  }
  return total;
}

let shouldContinue = true;

while (shouldContinue) {
  let validNumber = false;
  let number;
  while (!validNumber) {
    number = parseInt(prompt("Digite um numero inteiro positivo:"));
    if (number > 0 && !isNaN(number)) {
      validNumber = true;
    } else {
      alert("Erro! Digite um numero inteiro positivo");
    }
  }

  const factorial = calculateFactorial(number);
  alert(`O fatorial de ${number} e ${factorial}`);

  const answer = prompt(
    "Deseja calcular outro fatorial? Digite S para sim e N para nao"
  ).toLocaleLowerCase();

  if (answer !== "s") {
    shouldContinue = false;
    alert("Fim!");
  }
}
