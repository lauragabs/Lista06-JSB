document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // ETAPA 1: Criar vetor com números de 1 a 27
  // ============================================
  function criarVetorCartas() {
    let vetorCartas = [];
    for (let i = 1; i <= 27; i++) {
      vetorCartas.push(i);
    }
    return vetorCartas;
  }

  // ============================================
  // ETAPA 2: Criar vetor com pares aleatórios
  // ============================================
  function criarPares(vetorCartas, numeroPares) {
    let vetorPares = [];
    let cartasDisponiveis = [...vetorCartas];

    for (let i = 0; i < numeroPares; i++) {
      let indiceAleatorio = Math.floor(
        Math.random() * cartasDisponiveis.length
      );

      let carta = cartasDisponiveis[indiceAleatorio];

      vetorPares.push(carta);
      vetorPares.push(carta);

      cartasDisponiveis.splice(indiceAleatorio, 1);
    }
    return vetorPares;
  }

  // ============================================
  // ETAPA 3: Embaralhar as cartas
  // ============================================
  function embaralharCartas(vetorPares) {
    let vetorParesEmbaralhados = [...vetorPares];

    for (let i = vetorParesEmbaralhados.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [vetorParesEmbaralhados[i], vetorParesEmbaralhados[j]] = [
        vetorParesEmbaralhados[j],
        vetorParesEmbaralhados[i],
      ];
    }

    return vetorParesEmbaralhados;
  }

  // ============================================
  // ETAPA 4: Exibir cartas na página
  // ============================================
  function exibirCartas(vetorParesEmbaralhados) {
    const tabuleiro = document.getElementById("tabuleiro");

    tabuleiro.innerHTML = "";

    vetorParesEmbaralhados.forEach((numeroCarta) => {
      const img = document.createElement("img");
      img.src = `img/carta${numeroCarta}.png`;
      img.alt = `Carta ${numeroCarta}`;

      tabuleiro.appendChild(img);
    });
  }

  // ============================================
  // Executar as etapas para mostrar as cartas
  // ============================================
  const vetorCartas = criarVetorCartas();
  const vetorPares = criarPares(vetorCartas, 8);
  const vetorParesEmbaralhados = embaralharCartas(vetorPares);
  exibirCartas(vetorParesEmbaralhados);
});
