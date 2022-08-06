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
  { nome: "Ceeplusplus", ataque: 8, vida: 30, tipo: "l" }, // Z
];

const mapaC = 23;
const mapaL = 8;
const eMapa = [
  {
    posicao: [0, 0],
    tipo: "g",
    ginasio: "z",
    venceu: false,
    visitado: false,
    algomon: 14,
  },
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
  {
    posicao: [3, 22],
    tipo: "g",
    ginasio: "x",
    venceu: false,
    visitado: false,
    algomon: 12,
  },
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
  {
    posicao: [7, 0],
    tipo: "g",
    ginasio: "y",
    venceu: false,
    visitado: false,
    algomon: 13,
  },
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
  {
    posicao: [7, 22],
    tipo: "g",
    ginasio: "r",
    venceu: false,
    visitado: false,
    algomon: 11,
  },
];

const eJogador = {
  posicao: [3, 6],
  algMochila: [],
  algDesmaiados: [],
  algVistos: 0,
  qtdInsignias: 0,
  posicaoRetorno: [3, 6],
};
let movimentoPermitido = true;
let ultImpQuebraLinha = true;

// Captura elementos do DOM
const mapa = document.querySelector("#mapa");
const algodexInfo = document.querySelector("#algodexInfo");
const algomonsInfo = document.querySelector("#algomonsInfo");
const insigniasInfo = document.querySelector("#insigniasInfo");
const tabAlgodex = document.querySelector("#algodexTableBody");
const areaAcao = document.querySelector("#areaAcao");

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
        acaoGinasio(indice, celula);
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
    atualizaLinhaStatus();
    atualizaTabAlgodex();
  }
}

function acaoGinasio(indice, celula) {
  if (!celula.visitado) {
    eJogador.algVistos++;
    celula.visitado = true;
  }
  if (!celula.venceu) {
    const nomeGinasio = celula.ginasio;
    const indAlgomon = celula.algomon;
    if (nomeGinasio === "z" && eJogador.qtdInsignias < 3) {
      // Ainda não pode batalhar contra o ginásio Z
      imprime(
        "Você precisa de três insignias para lutar contra esse treinador!",
        true,
        true
      );
      eJogador.posicao = [...eJogador.posicaoRetorno];
      posicionaJogador();
    } else {
      const vitoria = iniciaBatalha(indAlgomon);
      if (vitoria) {
        eJogador.qtdInsignias++;
        celula.venceu = true;
      } else {
        eJogador.posicao = [...eJogador.posicaoRetorno];
        posicionaJogador();
      }
    }
  }
  atualizaLinhaStatus();
  atualizaTabAlgodex();
}

function iniciaBatalha(indAlgomon) {
  const algOponente = eAlgomons[indAlgomon];
  algOponente.vida += 20;
  return batalha(algOponente);
}

function batalha(algOponente) {
  const vidaAlgOpoComeco = algOponente.vida;
  const vidaAlgJogComeco = [];
  const algMochila = eJogador.algMochila;
  const qtdAlgBatalha = Math.min(algMochila.length, 3);
  const algBatalha = [];
  let qtdAlgDerrotados = 0;
  let vitoria = false;
  let turnoJog = true;

  for (let index = 0; index < qtdAlgBatalha; index++) {
    const algomon = eAlgomons[algMochila[index]];
    algBatalha.push(algomon);
    vidaAlgJogComeco.push(algomon.vida);
  }

  imprime("======== BATALHA COM LIDER DE GINASIO ========", true, true);
  imprime("Seus algomons:", true);
  for (const algomon of algBatalha) {
    imprime(
      `${algomon.nome} 
      Atk:${algomon.ataque} 
      HP:${algomon.vida} 
      Type:${algomon.tipo.toUpperCase()}`,
      true
    );
  }
  imprime(" ", true);
  imprime("Algomon do oponente:", true);
  imprime(
    `${algOponente.nome} 
    Atk:${algOponente.ataque} 
    HP:${algOponente.vida} 
    Type:${algOponente.tipo.toUpperCase()}`,
    true
  );
  imprime(" ", true);

  // Ataques
  while (qtdAlgDerrotados < qtdAlgBatalha && !vitoria) {
    if (turnoJog) {
      imprime("> Seu ");
      atacar(algBatalha[0], algOponente, vidaAlgJogComeco[0]);
      if (algOponente.vida <= 0) vitoria = true;
    } else {
      imprime("< Opn ");
      atacar(algOponente, algBatalha[0], vidaAlgOpoComeco);

      if (algBatalha[0].vida === 0) {
        imprime(`Oh, não! Seu ${algBatalha[0].nome} foi derrotado!`, true);
        const algDerrotado = algMochila.shift(0, 1);
        algBatalha.shift(0, 1);
        vidaAlgJogComeco.shift(0, 1);
        eJogador.algDesmaiados.push(algDerrotado);
        qtdAlgDerrotados++;
        atualizaLinhaStatus();
        atualizaTabAlgodex();
      }
    }
    turnoJog = !turnoJog;
  }

  if (vitoria) {
    imprime("Vitória!", true);
  } else {
    imprime(
      "Que pena, todos os seus algomons em batalha foram derrotados.",
      true
    );
  }

  return vitoria;
}

function atacar(algAtacante, algAlvo, vidaAlgAtacCom) {
  let ataque = algAtacante.ataque;
  let superEfetivo = false;
  switch (algAtacante.tipo) {
    case "c":
      if (algAlvo.tipo === "r") {
        ataque *= 2;
        superEfetivo = true;
      }
      break;
    case "r":
      if (algAlvo.tipo === "d") {
        ataque *= 2;
        superEfetivo = true;
      }
      break;
    case "d":
      if (algAlvo.tipo === "c") {
        ataque *= 2;
        superEfetivo = true;
      }
      break;
  }

  imprime(
    `${algAtacante.nome} [${algAtacante.vida}/${vidaAlgAtacCom}] ataca! `
  );
  if (superEfetivo) {
    imprime("Superefetivo! ");
  }
  imprime(`-${ataque}HP`, true);

  let vida = algAlvo.vida;
  vida -= ataque;
  if (vida < 0) vida = 0;
  algAlvo.vida = vida;
}

// // Linha de status
function atualizaLinhaStatus() {
  algodexInfo.textContent = eJogador.algVistos;
  algomonsInfo.textContent = eJogador.algMochila.length;
  insigniasInfo.textContent = eJogador.qtdInsignias;
}

// // Tabela de algomons
// Botões de rolagem
const btnSobe = document.querySelector("#btnSobe");
const btnDesce = document.querySelector("#btnDesce");
btnSobe.addEventListener("click", btnSobeClickListener);
btnDesce.addEventListener("click", btnDesceClickListener);
function btnSobeClickListener() {
  rolagem("s");
}
function btnDesceClickListener() {
  rolagem("d");
}
function rolagem(direcao) {
  if (eJogador.algMochila.length < 2) return;
  if (direcao === "d") {
    const ultimo = eJogador.algMochila.pop();
    eJogador.algMochila.unshift(ultimo);
  } else {
    const primeiro = eJogador.algMochila.shift(0, 1);
    eJogador.algMochila.push(primeiro);
  }
  atualizaTabAlgodex();
}

// Mudanças na tabela
function atualizaTabAlgodex() {
  const registros = tabAlgodex.children;
  const numRegistros = registros.length;
  // Limpa tabela
  for (let indexR = 0; indexR < numRegistros; indexR++) {
    removeAlgomon(registros[0]);
  }
  // Cria três registros
  const algMochila = eJogador.algMochila;
  const qtdAlgAcordados = eJogador.algMochila.length;
  let registro = 0;
  for (let indexA = 0; indexA < 3; indexA++) {
    if (indexA < qtdAlgAcordados) {
      registro = criaRegistroAlgomon(algMochila[indexA]);
    } else {
      registro = criaRegistroVazio();
    }
    tabAlgodex.appendChild(registro);
  }
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
function criaRegistroAlgomon(indAlgomon) {
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
  return registro;
}
function criaRegistroVazio() {
  const registro = document.createElement("tr");
  const celula1 = document.createElement("td");
  const celula2 = document.createElement("td");
  const celula3 = document.createElement("td");
  const celula4 = document.createElement("td");
  const nbsp = document.createTextNode("\u00A0");
  celula1.append(nbsp.cloneNode());
  celula2.append(nbsp.cloneNode());
  celula3.append(nbsp.cloneNode());
  celula4.append(nbsp);
  registro.appendChild(celula1);
  registro.appendChild(celula2);
  registro.appendChild(celula3);
  registro.appendChild(celula4);
  return registro;
}

function imprime(mensagem, quebraLinha = false, limparArea = false) {
  let bloco = 0;
  if (limparArea) {
    limpaAreaAcao();
  }
  if (ultImpQuebraLinha) {
    bloco = document.createElement("p");
    areaAcao.appendChild(bloco);
  } else {
    bloco = areaAcao.lastElementChild;
  }
  bloco.textContent += mensagem;
  ultImpQuebraLinha = quebraLinha;
}

function limpaAreaAcao() {
  const filhos = areaAcao.children;
  const numFilhos = filhos.length;
  for (let index = 0; index < numFilhos; index++) {
    filhos[0].remove();
  }
  ultImpQuebraLinha = true;
}
