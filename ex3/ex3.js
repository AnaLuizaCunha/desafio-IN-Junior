function verificarIdades(arr, year) {
  const minorOrMajor = [];
  for (let i = 0; i < arr.length; i++) {
    if (year - arr[i] >= 18) {
      minorOrMajor.push("Maior de idade");
    } else {
      minorOrMajor.push("Menor de idade");
    }
  }
  const messages = [];
  for (let j = 0; j < minorOrMajor.length; j++) {
    messages.push(`Pessoa${j + 1}: ${minorOrMajor[j]}`);
  }
  alert(messages.join("\n"));
  return minorOrMajor;
}

const years = prompt("Digite os anos de nascimento separados por virgula:")
  .split(",")
  .map(Number);

const currentYear = Number(prompt("Digite o ano atual:"));

verificarIdades(years, currentYear);
