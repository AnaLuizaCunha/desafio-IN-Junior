function verifyPalindrome(str) {
  let withtoutSpace = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      withtoutSpace = withtoutSpace + str[i];
    }
  }
  withtoutSpace = withtoutSpace.toLocaleLowerCase();
  let reversed = "";
  for (let i = withtoutSpace.length - 1; i >= 0; i--) {
    reversed = reversed + withtoutSpace[i];
  }
  if (withtoutSpace === reversed) {
    alert("É palíndromo!");
  } else {
    alert("Não é palíndromo!");
  }
}

const text = prompt("digite uma frase");
verifyPalindrome(text);
