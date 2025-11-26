# 🎴 Jogo da Memória - Cartas de Baralho

Projeto de jogo da memória desenvolvido em JavaScript puro utilizando cartas de baralho.

## 📋 Descrição do Projeto

Este é um jogo da memória interativo onde o jogador deve encontrar pares de cartas iguais. O projeto foi desenvolvido seguindo uma metodologia incremental em etapas, implementando funcionalidades progressivamente mais complexas.

## 🎯 Funcionalidades Implementadas

### ✅ Etapas Concluídas

- **ETAPA 1**: Criação de vetor com números de 1 a 27
- **ETAPA 2**: Geração de pares aleatórios de cartas
- **ETAPA 3**: Algoritmo de embaralhamento
- **ETAPA 4**: Exibição das cartas na interface HTML

## 🚀 Como Executar

1. Clone ou baixe este repositório
2. Certifique-se de que as imagens das cartas estão na pasta `img/` com o formato:
   - `carta1.png` até `carta27.png`
3. Abra o arquivo `index.html` em um navegador web

## 📁 Estrutura do Projeto

```
Lista06-JSB/
│
├── index.html          # Página principal
├── README.md          # Documentação do projeto
│
├── css/
│   └── style.css      # Estilos do jogo
│
├── js/
│   ├── script.js      # Lógica principal do jogo
│
└── img/               # Imagens das cartas
    ├── carta1.png até carta27.png
    └── verso.png
```

## 🎨 Estilização

O CSS implementa:

- Layout flexível para o tabuleiro
- Responsividade básica
- Cursor pointer nas cartas
- Organização em grid flexível

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout
- **JavaScript (ES6+)**: Lógica do jogo
  - Arrow functions
  - Spread operator
  - Array methods (forEach, splice, etc.)
  - DOM manipulation

## 📝 Observações

- Atualmente o projeto exibe automaticamente 8 pares de cartas ao carregar a página
- As imagens das cartas devem estar na pasta `img/` com nomenclatura correta
- O número de pares pode ser alterado no código (parâmetro da função `criarPares()`)

## 📌 Próximas Etapas (Não Implementadas)

- **Etapa 5**: Seletor de nível de dificuldade
- **Etapa 6**: Limpeza do tabuleiro ao trocar nível
- **Etapa 7**: Descrição das cartas ao clicar
- **Etapa 8**: Sistema de pontuação e tentativas
- **Etapa 9**: Implementação do verso das cartas
- **Etapa 10**: Mecânica de desvirar cartas incorretas
- **Etapa 11**: Verificação de fim de jogo e validações avançadas

## 🎓 Contexto Acadêmico

Projeto desenvolvido para a disciplina de JavaScript Básico do IFTM (Instituto Federal do Triângulo Mineiro) - 2025/2.

---

**Status**: ✅ Etapas 1-4 Concluídas | 🚧 Etapas 5-11 Pendentes
