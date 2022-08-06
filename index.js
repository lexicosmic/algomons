// Estado
const eAlgomons = [
  { nome: "Switchish", ataque: 4, vida: 30, tipo: "c" },
  { nome: "Dattata", ataque: 3, vida: 40, tipo: "d" },
  { nome: "Equans", ataque: 3, vida: 40, tipo: "c" },
  { nome: "Forrow", ataque: 5, vida: 20, tipo: "r" },
  { nome: "Zubit", ataque: 5, vida: 20, tipo: "d" },
  { nome: "Elsecute", ataque: 3, vida: 40, tipo: "c" },
  { nome: "Magicount", ataque: 4, vida: 30, tipo: "r" },
  { nome: "Alakaram", ataque: 5, vida: 20, tipo: "d" },
  { nome: "Comparas", ataque: 5, vida: 20, tipo: "c" },
  { nome: "Iterino", ataque: 3, vida: 40, tipo: "r" },
  { nome: "Matreebell", ataque: 3, vida: 40, tipo: "d" },
  { nome: "Ifssauro", ataque: 5, vida: 20, tipo: "c" }, // R
  { nome: "Whiledle", ataque: 3, vida: 40, tipo: "r" }, // X
  { nome: "Vectoray", ataque: 4, vida: 30, tipo: "d" }, // Y
  { nome: "Ceeplusplus", ataque: 8, vida: 50, tipo: "l" }, // Z
];

const mapaC = 23;
const mapaL = 8;
const eMapa = [
  { posicao: [0, 0], tipo: "g", ginasio: "Z", venceu: false, algomon: 14 },
  { posicao: [0, 6], tipo: "c", visitado: false, algomon: 0 },
  { posicao: [1, 0], tipo: "p" },
  { posicao: [1, 6], tipo: "p" },
  { posicao: [1, 12], tipo: "c", visitado: false, algomon: 1 },
  { posicao: [1, 13], tipo: "p" },
  { posicao: [1, 14], tipo: "p" },
  { posicao: [1, 15], tipo: "p" },
  { posicao: [1, 16], tipo: "p" },
  { posicao: [1, 17], tipo: "p" },
  { posicao: [1, 18], tipo: "c", visitado: false, algomon: 2 },
  { posicao: [2, 0], tipo: "p" },
  { posicao: [2, 6], tipo: "p" },
  { posicao: [2, 12], tipo: "p" },
  { posicao: [2, 18], tipo: "p" },
  { posicao: [3, 0], tipo: "c", visitado: false, algomon: 3 },
  { posicao: [3, 1], tipo: "p" },
  { posicao: [3, 2], tipo: "p" },
  { posicao: [3, 3], tipo: "p" },
  { posicao: [3, 4], tipo: "p" },
  { posicao: [3, 5], tipo: "p" },
  { posicao: [3, 6], tipo: "c", visitado: true },
  { posicao: [3, 7], tipo: "p" },
  { posicao: [3, 8], tipo: "p" },
  { posicao: [3, 9], tipo: "p" },
  { posicao: [3, 10], tipo: "p" },
  { posicao: [3, 11], tipo: "p" },
  { posicao: [3, 12], tipo: "c", visitado: false, algomon: 4 },
  { posicao: [3, 13], tipo: "p" },
  { posicao: [3, 14], tipo: "p" },
  { posicao: [3, 15], tipo: "p" },
  { posicao: [3, 16], tipo: "p" },
  { posicao: [3, 17], tipo: "p" },
  { posicao: [3, 18], tipo: "c", visitado: false, algomon: 5 },
  { posicao: [3, 19], tipo: "p" },
  { posicao: [3, 20], tipo: "p" },
  { posicao: [3, 21], tipo: "p" },
  { posicao: [3, 22], tipo: "g", ginasio: "X", venceu: false, algomon: 12 },
  { posicao: [4, 6], tipo: "p" },
  { posicao: [4, 22], tipo: "p" },
  { posicao: [5, 6], tipo: "p" },
  { posicao: [5, 10], tipo: "c", visitado: false, algomon: 6 },
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
  { posicao: [5, 22], tipo: "c", visitado: false, algomon: 7 },
  { posicao: [6, 6], tipo: "p" },
  { posicao: [6, 10], tipo: "p" },
  { posicao: [7, 0], tipo: "g", ginasio: "Y", venceu: false, algomon: 13 },
  { posicao: [7, 1], tipo: "p" },
  { posicao: [7, 2], tipo: "p" },
  { posicao: [7, 3], tipo: "p" },
  { posicao: [7, 4], tipo: "p" },
  { posicao: [7, 5], tipo: "p" },
  { posicao: [7, 6], tipo: "c", visitado: false, algomon: 8 },
  { posicao: [7, 7], tipo: "p" },
  { posicao: [7, 8], tipo: "p" },
  { posicao: [7, 9], tipo: "p" },
  { posicao: [7, 10], tipo: "c", visitado: false, algomon: 9 },
  { posicao: [7, 11], tipo: "p" },
  { posicao: [7, 12], tipo: "p" },
  { posicao: [7, 13], tipo: "p" },
  { posicao: [7, 14], tipo: "p" },
  { posicao: [7, 15], tipo: "p" },
  { posicao: [7, 16], tipo: "c", visitado: false, algomon: 10 },
  { posicao: [7, 17], tipo: "p" },
  { posicao: [7, 18], tipo: "p" },
  { posicao: [7, 19], tipo: "p" },
  { posicao: [7, 20], tipo: "p" },
  { posicao: [7, 21], tipo: "p" },
  { posicao: [7, 22], tipo: "g", ginasio: "R", venceu: false, algomon: 11 },
];

const eJogador = {
  posicao: [3, 6],
  algMochila: [],
  algVistos: 0,
  qtdAlgAcordados: 0,
  qtdInsignias: 0,
  posicaoRetorno: [3, 6],
};
let movimentoPermitido = true;

// Captura elementos do DOM
const mapa = document.querySelector("#mapa");
const algodexInfo = document.querySelector("#algodexInfo");
const algomonsInfo = document.querySelector("#algomonsInfo");
const insigniasInfo = document.querySelector("#insigniasInfo");
const tabAlgodex = document.querySelector("#algodexTableBody");

// // Inicia DOM
// Constrói mapa
let ind = 0;
for (const elemento of eMapa) {
  const celula = document.createElement("span");
  switch (elemento.tipo) {
    case "c":
      if (elemento.posicao[0] === 3 && elemento.posicao[1] === 6)
        celula.textContent = "🌆";
      else celula.textContent = "🏙️";
      break;
    case "g":
      celula.textContent = "🏟️";
      break;
  }
  celula.classList.add("visitavel");
  celula.setAttribute("id", `n${ind}`);
  const posicao = elemento.posicao;
  celula.style.gridRow = posicao[0] + 1;
  celula.style.gridColumn = posicao[1] + 1;
  mapa.appendChild(celula);
  ind++;
}

// Cria jogador
const jogador = document.createElement("span");
jogador.textContent = "🏃";
posicionaJogador();

function posicionaJogador() {
  const posicao = eJogador.posicao;
  jogador.style.gridRow = posicao[0] + 1;
  jogador.style.gridColumn = posicao[1] + 1;
  mapa.appendChild(jogador);
}

// // Movimento
// Interpreta cliques de movimento
const btnCima = document.querySelector("#btnCima");
const btnEsq = document.querySelector("#btnEsq");
const btnBaixo = document.querySelector("#btnBaixo");
const btnDir = document.querySelector("#btnDir");
btnCima.addEventListener("click", btnCimaClickListener);
function btnCimaClickListener() {
  if (movimentoPermitido) moveJogador("c");
}
btnEsq.addEventListener("click", btnEsqClickListener);
function btnEsqClickListener() {
  if (movimentoPermitido) moveJogador("e");
}
btnBaixo.addEventListener("click", btnBaixoClickListener);
function btnBaixoClickListener() {
  if (movimentoPermitido) moveJogador("b");
}
btnDir.addEventListener("click", btnDirClickListener);
function btnDirClickListener() {
  if (movimentoPermitido) moveJogador("d");
}

// Loop de movimento
function moveJogador(direcao) {
  movimentoPermitido = false;
  const posicao = eJogador.posicao;
  let indice = -1;
  let continua = true;
  moveJogadorAux(posicao, indice, continua, direcao);
}
function moveJogadorAux(posicao, indice, continua, direcao) {
  indice = atualizaPosicao(direcao, posicao);
  posicionaJogador();
  continua = executaAcaoLocal(indice, posicao);
  if (continua) {
    setTimeout(() => {
      moveJogadorAux(posicao, indice, continua, direcao);
    }, 200);
  } else movimentoPermitido = true;
}

// Atualiza posição do jogador no estado
function atualizaPosicao(direcao, posicao) {
  let indice = -1;
  switch (direcao) {
    case "c":
      indice = procuraIndiceCelula(posicao[0] - 1, posicao[1]);
      if (posicao[0] > 0 && indice !== -1) posicao[0]--;
      break;
    case "e":
      indice = procuraIndiceCelula(posicao[0], posicao[1] - 1);
      if (posicao[1] > 0 && indice !== -1) posicao[1]--;
      break;
    case "b":
      indice = procuraIndiceCelula(posicao[0] + 1, posicao[1]);
      if (posicao[0] < mapaL - 1 && indice !== -1) posicao[0]++;
      break;
    case "d":
      indice = procuraIndiceCelula(posicao[0], posicao[1] + 1);
      if (posicao[1] < mapaC - 1 && indice !== -1) posicao[1]++;
      break;
  }
  return indice;
}
function procuraIndiceCelula(linha, coluna) {
  return eMapa.findIndex(buscaCelula, [linha, coluna]);
}
function buscaCelula(celula) {
  return celula.posicao[0] === this[0] && celula.posicao[1] === this[1];
}

// // Verificação de ação no local
function executaAcaoLocal(indice, posicao) {
  if (indice === -1) return false;
  else {
    const celula = eMapa[indice];
    const tipo = celula.tipo;
    switch (tipo) {
      case "p":
        return true;
      case "c":
        acaoCidade(indice, celula);
        eJogador.posicaoRetorno = [...posicao];
        return false;
      case "g":
        return false;
    }
  }
}

function acaoCidade(indice, celula) {
  const visitado = celula.visitado;
  if (!visitado) {
    const elemento = document.querySelector(`#n${indice}`);
    const indAlgomon = celula.algomon;
    const algMochila = eJogador.algMochila;
    elemento.textContent = "🌆";
    celula.visitado = true;
    algMochila.push(indAlgomon);
    eJogador.algVistos++;
    eJogador.qtdAlgAcordados++;
    atualizaLinhaStatus();
    atualizaTabAlgodex(indAlgomon);
  }
}

// // Linha de status
function atualizaLinhaStatus() {
  algodexInfo.textContent = eJogador.algVistos;
  algomonsInfo.textContent = eJogador.qtdAlgAcordados;
  insigniasInfo.textContent = eJogador.qtdInsignias;
}

// // Tabela de algomons
// Botões de rolagem
const btnSobe = document.querySelector("#btnSobe");
const btnDesce = document.querySelector("#btnDesce");
btnSobe.addEventListener("click", btnSobeClickListener);
btnDesce.addEventListener("click", btnDesceClickListener);
function btnSobeClickListener() {
  console.log("s");
}
function btnDesceClickListener() {
  console.log("d");
}

// Mudanças na tabela
function atualizaTabAlgodex(indAlgomon) {
  removeAlgomon(tabAlgodex.lastElementChild);
  insereAlgomon(indAlgomon);
}
function removeAlgomon(registro) {
  const filhos = registro.children;
  const numFilhos = filhos.length;
  for (let indexF = 0; indexF < numFilhos; indexF++) {
    const filho = filhos[0];
    const netos = filho.children;
    const numNetos = netos.length;
    for (let indexN = 0; indexN < numNetos; indexN++) {
      const neto = netos[0];
      neto.remove();
    }
    filho.remove();
  }
  registro.remove();
}
function insereAlgomon(indAlgomon) {
  const algomon = eAlgomons[indAlgomon];
  const registro = document.createElement("tr");
  const nome = document.createElement("td");
  const ataque = document.createElement("td");
  const vida = document.createElement("td");
  const tipo = document.createElement("td");
  const ataqueInfo = document.createElement("span");
  const vidaInfo = document.createElement("span");
  const tipoInfo = document.createElement("span");

  nome.textContent = algomon.nome;
  ataque.textContent = "Atk: ";
  vida.textContent = "HP: ";
  tipo.textContent = "Type: ";
  ataqueInfo.textContent = algomon.ataque;
  vidaInfo.textContent = algomon.vida;
  tipoInfo.textContent = algomon.tipo.toUpperCase();

  ataque.appendChild(ataqueInfo);
  vida.appendChild(vidaInfo);
  tipo.appendChild(tipoInfo);
  registro.appendChild(nome);
  registro.appendChild(ataque);
  registro.appendChild(vida);
  registro.appendChild(tipo);
  tabAlgodex.insertBefore(registro, tabAlgodex.firstElementChild);
}
