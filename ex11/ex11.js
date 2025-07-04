function verifyIncreasingNumbers(arr) {
  let cont = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      cont++;
    }
  }
  alert(cont);
}

const quantityOfNumbers = Number(
  prompt("Qual a quantidade de números que você quer comparar?")
);

const numbers = [];

for (let i = 0; i < quantityOfNumbers; i++) {
  let number = Number(prompt("Digite um número inteiro:"));
  numbers.push(number);
}

verifyIncreasingNumbers(numbers);
