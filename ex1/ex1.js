const a = prompt("Digite o valor de a:");
const b = prompt("Digite o valor de b:");
const c = prompt("Digite o valor de c:");

const d = b ** 2 - 4 * a * c;

const x1 = (-b + d ** (1 / 2)) / (2 * a);

const x2 = (-b - d ** (1 / 2)) / (2 * a);

if (d > 0) {
  alert(
    `A equacao possui duas raizes reais distintas com valores x1=${x1} e x2=${x2}`
  );
} else if (d == 0) {
  alert(`A equacao possui uma raiz real (raiz dupla) com valor ${x1}`);
} else {
  alert("A equacao nao possui raizes reais");
}
