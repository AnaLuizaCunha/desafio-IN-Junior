function encontrarElementoUnico(arr) {
  for (let i = 0; i < arr.length; i++) {
    const theOne = arr[i];
    const times = arr.filter((n) => n === theOne).length;
    if (times === 1) {
      alert(`O número que aparece uma vez é: ${theOne}`);
    }
  }
  return theOne;
}

const numbers = [1, 2, 3, 4, 3, 2, 1];
encontrarElementoUnico(numbers);
