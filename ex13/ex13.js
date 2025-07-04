const time = [];

function adicionarJogador() {
  const nome = prompt("Digite o nome do jogador:");
  const idade = Number(prompt("Digite a idade do jogador:"));
  const posicao = prompt("Digite a posição do jogador:");
  const pontuacao = Number(prompt("Qual a pontuacao do jogador?"));
  const jogador = {
    nome: nome,
    idade: idade,
    posicao: posicao,
    pontuacao: pontuacao,
  };
  time.push(jogador);
}

function buscarPorPosicao() {
  const jogadoresDaPosicao = [];
  const posicao = prompt("Qual posição você deseja?");
  for (i = 0; i < time.length; i++) {
    if (posicao.toLocaleLowerCase() === time[i].posicao.toLocaleLowerCase()) {
      jogadoresDaPosicao.push(time[i]);
    }
  }
  if (jogadoresDaPosicao.length === 0) {
    alert("Não há jogadores nesta posição");
  } else {
    let mensagem = `Jogadores na posição ${posicao}:\n`;
    jogadoresDaPosicao.forEach((jogador) => {
      mensagem =
        mensagem +
        `Jogador ${jogador.nome} com ${jogador.idade} anos tem a pontuacao ${jogador.pontuacao}`;
    });
    alert(mensagem);
  }
}

function listarTime() {
  console.log("Jogadores do time:");
  let mensagem = `Lista do time:\n`;
  time.forEach((jogador) => {
    console.log(
      `${jogador.nome} tem ${jogador.idade} anos, joga na posição ${jogador.posicao} e possui ${jogador.pontuacao} pontos`
    );
    mensagem =
      mensagem +
      `Jogador ${jogador.nome} com ${jogador.idade} anos tem a pontuacao ${jogador.pontuacao}\n`;
  });
  alert(mensagem);
}

function calcularPontuacaoMedia() {
  let count = 0;
  let soma = 0;
  for (let i = 0; i < time.length; i++) {
    soma = soma + time[i].pontuacao;
    count = count + 1;
  }
  const media = soma / count;
  alert(`A pontuação média do time é: ${media.toFixed(2)}`);
  return media;
}

function menu() {
  const opcao = prompt(
    "Menu:\n" +
      "1 - Adicionar jogador\n" +
      "2 - Buscar por posição\n" +
      "3 - Listar time\n" +
      "4 - Calcular pontuação média\n" +
      "5 - Sair\n" +
      "Escolha uma opção:"
  );

  if (opcao === "1") {
    adicionarJogador();
    menu();
  } else if (opcao === "2") {
    buscarPorPosicao();
    menu();
  } else if (opcao === "3") {
    listarTime();
    menu();
  } else if (opcao === "4") {
    calcularPontuacaoMedia();
    menu();
  } else if (opcao === "5") {
    alert("Fim!");
  } else {
    alert("Opção inválida. Tente novamente.");
    menu();
  }
}

menu();
