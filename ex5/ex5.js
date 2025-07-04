function verifyFizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    alert("fizzbuzz");
  } else if (n % 3 === 0 && n % 5 !== 0) {
    alert("fizz");
  } else if (n % 3 !== 0 && n % 5 === 0) {
    alert("buzz");
  }
}

const number = Number(prompt("Digite um numero inteiro"));
verifyFizzBuzz(number);
