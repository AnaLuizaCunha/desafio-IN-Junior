const waitingList = [];

function addClient() {
  const costumer = prompt("Para entrar na fila digite seu nome:");
  if (costumer) {
    waitingList.push(costumer);
    alert(`${costumer} foi adicionado a fila`);
  } else {
    alert("Digite um nome valido");
    addClient();
  }
}

function serveCustomer() {
  if (waitingList.length === 0) {
    alert("A fila está vazia. Nenhum cliente para atender.");
  } else {
    const costumerServed = waitingList.shift();
    alert(`Cliente atendido: ${costumerServed}`);
  }
}

function menu() {
  let list = "Fila:\n";
  if (waitingList.length === 0) {
    alert("Nenhum cliente na fila");
  } else {
    waitingList.forEach((costumer, index) => {
      list = list + `${index + 1}º ${costumer}\n`;
    });
  }
  const option = prompt(
    `${list}\n Menu:\n 1 - Novo cliente\n 2 - Atender cliente\n 3 - Sair\n Escolha uma opção:`
  );
  if (option === "1") {
    addClient();
    menu();
  } else if (option === "2") {
    serveCustomer();
    menu();
  } else if (option === "3") {
    alert("Fim");
  } else {
    alert("Opção inválida");
    menu();
  }
}

menu();
