function fibonacci(n) {
  const finonacciSequence = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < n + 1; i++) {
    finonacciSequence.push(a);
    let aux = a + b;
    a = b;
    b = aux;
  }
  alert(
    `A sequencia de Fibonacci de ${n} termos é: ${finonacciSequence.join(
      ", "
    )}.`
  );
}

const number = Number(prompt("Digite um numero inteiro positivo:"));
fibonacci(number);
