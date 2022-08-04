// Estado
const eMapa = [
  { posicao: [0, 0], tipo: "g", ginasio: "Z", venceu: false },
  { posicao: [0, 6], tipo: "c", visitado: false },
  { posicao: [1, 0], tipo: "p" },
  { posicao: [1, 6], tipo: "p" },
  { posicao: [1, 12], tipo: "c", visitado: false },
  { posicao: [1, 13], tipo: "p" },
  { posicao: [1, 14], tipo: "p" },
  { posicao: [1, 15], tipo: "p" },
  { posicao: [1, 16], tipo: "p" },
  { posicao: [1, 17], tipo: "p" },
  { posicao: [1, 18], tipo: "c", visitado: false },
  { posicao: [2, 0], tipo: "p" },
  { posicao: [2, 6], tipo: "p" },
  { posicao: [2, 12], tipo: "p" },
  { posicao: [2, 18], tipo: "p" },
  { posicao: [3, 0], tipo: "c", visitado: false },
  { posicao: [3, 1], tipo: "p" },
  { posicao: [3, 2], tipo: "p" },
  { posicao: [3, 3], tipo: "p" },
  { posicao: [3, 4], tipo: "p" },
  { posicao: [3, 5], tipo: "p" },
  { posicao: [3, 6], tipo: "p" },
  { posicao: [3, 7], tipo: "p" },
  { posicao: [3, 8], tipo: "p" },
  { posicao: [3, 9], tipo: "p" },
  { posicao: [3, 10], tipo: "p" },
  { posicao: [3, 11], tipo: "p" },
  { posicao: [3, 12], tipo: "c", visitado: false },
  { posicao: [3, 13], tipo: "p" },
  { posicao: [3, 14], tipo: "p" },
  { posicao: [3, 15], tipo: "p" },
  { posicao: [3, 16], tipo: "p" },
  { posicao: [3, 17], tipo: "p" },
  { posicao: [3, 18], tipo: "c", visitado: false },
  { posicao: [3, 19], tipo: "p" },
  { posicao: [3, 20], tipo: "p" },
  { posicao: [3, 21], tipo: "p" },
  { posicao: [3, 22], tipo: "g", ginasio: "X", venceu: false },
  { posicao: [4, 6], tipo: "p" },
  { posicao: [4, 22], tipo: "p" },
  { posicao: [5, 6], tipo: "p" },
  { posicao: [5, 10], tipo: "c", visitado: false },
  { posicao: [5, 11], tipo: "p" },
  { posicao: [5, 12], tipo: "p" },
  { posicao: [5, 13], tipo: "p" },
  { posicao: [5, 14], tipo: "p" },
  { posicao: [5, 15], tipo: "p" },
  { posicao: [5, 16], tipo: "p" },
  { posicao: [5, 17], tipo: "p" },
  { posicao: [5, 18], tipo: "p" },
  { posicao: [5, 19], tipo: "p" },
  { posicao: [5, 20], tipo: "p" },
  { posicao: [5, 21], tipo: "p" },
  { posicao: [5, 22], tipo: "c", visitado: false },
  { posicao: [6, 6], tipo: "p" },
  { posicao: [6, 10], tipo: "p" },
  { posicao: [7, 0], tipo: "g", ginasio: "Y", venceu: false },
  { posicao: [7, 1], tipo: "p" },
  { posicao: [7, 2], tipo: "p" },
  { posicao: [7, 3], tipo: "p" },
  { posicao: [7, 4], tipo: "p" },
  { posicao: [7, 5], tipo: "p" },
  { posicao: [7, 6], tipo: "c", visitado: false },
  { posicao: [7, 7], tipo: "p" },
  { posicao: [7, 8], tipo: "p" },
  { posicao: [7, 9], tipo: "p" },
  { posicao: [7, 10], tipo: "c", visitado: false },
  { posicao: [7, 11], tipo: "p" },
  { posicao: [7, 12], tipo: "p" },
  { posicao: [7, 13], tipo: "p" },
  { posicao: [7, 14], tipo: "p" },
  { posicao: [7, 15], tipo: "p" },
  { posicao: [7, 16], tipo: "c", visitado: false },
  { posicao: [7, 17], tipo: "p" },
  { posicao: [7, 18], tipo: "p" },
  { posicao: [7, 19], tipo: "p" },
  { posicao: [7, 20], tipo: "p" },
  { posicao: [7, 21], tipo: "p" },
  { posicao: [7, 22], tipo: "g", ginasio: "R", venceu: false },
];

// Captura elementos do DOM
const mapa = document.querySelector("#mapa");

// Inicia DOM
for (const elemento of eMapa) {
  const celula = document.createElement("span");
  switch (elemento.tipo) {
    case "c":
      celula.textContent = "🏙️";
      break;
    case "g":
      celula.textContent = "🏟️";
      break;
    default:
      break;
  }
  celula.classList.add("visitavel");
  const posicao = elemento.posicao;
  celula.style.gridRow = posicao[0] + 1;
  celula.style.gridColumn = posicao[1] + 1;
  mapa.appendChild(celula);
}
