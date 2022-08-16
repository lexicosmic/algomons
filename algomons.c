#include <stdio.h>
#include <string.h>

// Definição das constantes
#define MAPAL 8
#define MAPAC 23
#define MAXAGDEX 15
#define COD_EST 0
#define COD_CID_NV 1
#define COD_CID_VS 2
#define COD_GIN_NV 3
#define COD_PERDEU 4
#define COD_VENCEU 5

// Definição da estrutura
typedef struct
{
    char nome[24];
    int ataque;
    int vida;
    char tipo;
} Algomon;

// Funções

// Imprime o mapa, substituindo a posição do jogador por A, e o código de cada cidade por #
void imprimirMapa(char mapa[MAPAL][MAPAC], int posJogador[2])
{
    // Para cada linha do mapa...
    for (int i = 0; i < MAPAL; i++)
    {
        // Para cada elemento dessa linha...
        for (int j = 0; j < MAPAC; j++)
        {
            // Se o local do mapa a ser impresso é a posição do Jogador, imprimir "A"
            if (i == posJogador[0] && j == posJogador[1])
                printf("A");
            else
            { // Se não...
                // Se o local for uma cidade não visitada, imprimir "#"
                if (mapa[i][j] >= 'a' && mapa[i][j] <= 'k')
                    printf("#");
                else
                    // Se não, imprimir caractere do mapa
                    printf("%c", mapa[i][j]);
            }
        }
        printf("\n");
    }
    printf("\n");
    return;
}

// Imprime o cabeçalho do algodex do jogador, e até três de seus algomons, se houver
void imprimirAlgodex(Algomon algodex[MAXAGDEX], int algoDesc[MAXAGDEX], int qtdAcordados, int qtdAlgodex, int qtdInsignias)
{
    // Declaração das variáveis
    int i = 0;              // Auxiliar de contagem
    int posAlgIter = 0;     // Índice no algodex do algomon que será exibido
    int qtdDescobertos = 0; // Quantidade de algomons já descobertos

    // Calcula quantidade de algomons descobertos
    for (i = 0; i < MAXAGDEX; i++)
    {
        if (algoDesc[i])
            qtdDescobertos++;
    }
    // Reinicia contador
    i = 0;

    // Imprime cabeçalho
    printf("Algodex (%d/15) Algomons: %d Insignias: %d\n", qtdDescobertos, qtdAcordados, qtdInsignias);

    // Para cada algomon a ser exibido...
    while (i < 3 && i < qtdAlgodex)
    {
        // Imprime algomon
        printf(" %-23s Atk: %d HP: %02d Type: %c\n", algodex[i].nome,
               algodex[i].ataque, algodex[i].vida, algodex[i].tipo);

        // Incrementa contador e o índice do algomon a ser exibido, a fim de imprimir o próximo
        i++;
    }

    printf("\n");
    return;
}

// Checa se o comando digitado possui função de mover o jogador, ou rolar o algodex, e realiza a função caso haja. Retorna se houve movimento (1), ou não (0)
int interpretaCmd(char mapa[MAPAL][MAPAC], int posJogador[2], Algomon algodex[MAXAGDEX], int qtdAlgodex, char cmd)
{
    // Declaração das variáveis
    int i;
    Algomon algAux;
    int indUltAlgAc;

    // Caso o comando seja wasd, mover o jogador, caso seja rf, rodar a lista
    // Caso haja movimento, retornar 1
    switch (cmd)
    {
    case 'w':
    case 'W':
        // Se o jogador já não estiver na primeira linha, e se o local para onde quer se mover não for vazio, mover o jogador
        if (posJogador[0] > 0 && mapa[posJogador[0] - 1][posJogador[1]] != ' ')
        {
            posJogador[0] -= 1;
            return 1;
        }
        break;
    case 'a':
    case 'A':
        // Se o jogador já não estiver na coluna mais à esquerda, e se o local para onde quer se mover não for vazio, mover o jogador
        if (posJogador[1] > 0 && mapa[posJogador[0]][posJogador[1] - 1] != ' ')
        {
            posJogador[1] -= 1;
            return 1;
        }
        break;
    case 's':
    case 'S':
        // Se o jogador já não estiver na última linha, e se o local para onde quer se mover não for vazio, mover o jogador
        if (posJogador[0] < MAPAL - 1 && mapa[posJogador[0] + 1][posJogador[1]] != ' ')
        {
            posJogador[0] += 1;
            return 1;
        }
        break;
    case 'd':
    case 'D':
        // Se o jogador já não estiver na coluna mais à direita, e se o local para onde quer se mover não for vazio, mover o jogador
        if (posJogador[1] < MAPAC - 1 && mapa[posJogador[0]][posJogador[1] + 1] != ' ')
        {
            posJogador[1] += 1;
            return 1;
        }
        break;
    case 'r':
    case 'R':
        // Caso haja mais que um algomom...
        if (qtdAlgodex > 1)
        {
            // Guarda o primeiro algomon em uma auxiliar
            algAux = algodex[0];

            // Encontra a última posição em que há algomon acordado
            for (indUltAlgAc = qtdAlgodex - 1; algodex[indUltAlgAc].vida == 0; indUltAlgAc--)
            {
            }

            // Sobe todos os algomons acordados em uma posição
            for (i = 0; i < indUltAlgAc; i++)
            {
                algodex[i] = algodex[i + 1];
            }
            // Coloca o primeiro algomon na posição em que havia o último acordado
            algodex[indUltAlgAc] = algAux;
        }
        break;
    case 'f':
    case 'F':
        // Caso haja mais que um algomom...
        if (qtdAlgodex > 1)
        {
            // Encontra a última posição em que há algomon acordado
            for (indUltAlgAc = qtdAlgodex - 1; algodex[indUltAlgAc].vida == 0; indUltAlgAc--)
            {
            }

            // Guarda o último algomon acordado em uma auxiliar
            algAux = algodex[indUltAlgAc];

            // Desce todos os algomons acordados em uma posição, menos o primeiro
            for (i = indUltAlgAc; i > 0; i--)
            {
                algodex[i] = algodex[i - 1];
            }
            // Coloca o último algomon acordado na posição em que havia o primeiro
            algodex[0] = algAux;
        }
        break;
    default:
        break;
    }
    // Por padrão, retornar que não houve movimento
    return 0;
}

// Calcula e retorna ataque do algomon corrigido pelos tipos do algomon atacante e atacado. Também imprime dados do ataque
void atacar(Algomon algoAtac, Algomon *algoDefen, int vidaAlgoAtacCom)
{
    // Declaração das variáveis
    int ataque = algoAtac.ataque; // Ataque infligido pelo algomon de acordo com os tipos
    int superEfetivo = 0;         // Guarda se o ataque é super efetivo (1), ou não (0)

    // Verifica se o tipo do algomon atacante inflige dano em dobro sobre o tipo do algomon que sofre o ataque
    switch (algoAtac.tipo)
    {
    case 'C':
        if (algoDefen->tipo == 'R')
        {
            ataque *= 2;
            superEfetivo = 1;
        }
        break;
    case 'R':
        if (algoDefen->tipo == 'D')
        {
            ataque *= 2;
            superEfetivo = 1;
        }
        break;
    case 'D':
        if (algoDefen->tipo == 'C')
        {
            ataque *= 2;
            superEfetivo = 1;
        }
        break;
    default:
        break;
    }

    // Imprime resultado do ataque
    printf("%-11s [%02d/%02d] ataca! ", algoAtac.nome, algoAtac.vida, vidaAlgoAtacCom);
    if (superEfetivo)
        printf("Super Efetivo! ");
    printf("-%dHP\n", ataque);

    // Reduz a vida do algomon do oponente, que recebeu o ataque
    algoDefen->vida -= ataque;

    // Retorna dano causado
    return;
}

// Executa batalha entre até 3 algomons do jogador e o algomon do líder do ginásio, e retorna se houve vitória (1), ou derrota (0)
int batalha(Algomon algoExi[MAXAGDEX], Algomon algodex[MAXAGDEX], int *qtdAcordados, int *qtdAlgodex, int indAlgoOpon)
{
    // Declaração das variáveis
    int i = 0;                      // Auxiliar de contagem
    int resultado = 0;              // 0 - derrota; 1 - vitória
    int turno = 1;                  // 0 - oponente; 1 - jogador
    int qtdAlgoDer = 0;             // Quantidade de algomons do jogador que foram derrotados nessa batalha
    int vidaAlgoCom[3];             // Vida dos algomons do jogador no começo da batalha
    int vidaAlgoOponCom;            // Vida do algomon do oponente no começo da batalha
    Algomon algoAux;                // Auxiliar que guarda algomon derrotado
    int qtdAlgoBat = *qtdAcordados; // Quantidade de algomons que vão batalhar
    int ataque;                     // Ataque infligido pelo algomon de acordo com os tipos

    // Corrige a quantidade de algomons em batalha para permitir no máximo 3
    if (qtdAlgoBat > 3)
        qtdAlgoBat = 3;

    // Inicializa o algomon do oponente com o índice em AlgoExi passado nos parâmetros
    Algomon algoOpon = algoExi[indAlgoOpon];
    // Incrementa a vida do algomon do oponente em 20
    algoOpon.vida += 20;

    // Inicializa variáveis de vida registrada no início da batalha
    for (i = 0; i < qtdAlgoBat; i++)
    {
        vidaAlgoCom[i] = algodex[i].vida;
    }
    vidaAlgoOponCom = algoOpon.vida;

    // Limpa a tela
    // printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

    // Impressão do cabeçalho
    printf("======== BATALHA COM LIDER DE GINASIO ========\n");
    printf("Seus algomons:\n");
    for (i = 0; i < qtdAlgoBat; i++)
    {
        printf(" %-23s Atk: %d HP: %02d Type: %c\n", algodex[i].nome, algodex[i].ataque, algodex[i].vida, algodex[i].tipo);
    }
    printf("Algomon do oponente:\n");
    printf(" %-23s Atk: %d HP: %02d Type: %c\n\n", algoOpon.nome, algoOpon.ataque, algoOpon.vida, algoOpon.tipo);

    // ATAQUES
    // Enquanto o número de algomons derrotados for menor do que o número de algomons que estão a batalhar,
    // e enquanto o jogador não tiver derrotado o líder do ginásio, calcular ataques
    while (qtdAlgoDer < qtdAlgoBat && resultado == 0)
    {
        // O algomon do jogador a atacar e sofrer ataques é sempre o primeiro do algodex (índice 0), afinal,
        // quando um algomon é derrotado, ele vai para o final do algodex e todos os outros sobem uma posição

        // Se for o turno do jogador...
        if (turno)
        {
            // Calcula e imprime ataque do jogador
            printf("> Seu ");
            atacar(algodex[0], &algoOpon, vidaAlgoCom[qtdAlgoDer]);

            // Se a vida do algomon do oponente chegar a 0 ou abaixo...
            if (algoOpon.vida <= 0)
                // Definir vitória do jogador na batalha
                resultado = 1;

            // Troca o próximo turno para o oponente
            turno = 0;
        }
        // Se for o turno do oponente...
        else
        {
            // Calcula e imprime ataque do oponente
            printf("< Opn ");
            atacar(algoOpon, &algodex[0], vidaAlgoOponCom);

            // Se a vida do algomon do jogador chegar a 0 ou abaixo...
            if (algodex[0].vida <= 0)
            {
                // Imprime que o algomon do jogador foi derrotado
                printf("Oh, nao! Seu %s foi derrotado!\n", algodex[0].nome);

                // Corrige a vida do algomon como 0, para não aceitar números negativos
                algodex[0].vida = 0;
                // Reduz a quantidade de algomons acordados
                *qtdAcordados = *qtdAcordados - 1;
                // Incrementa a quantidade de algomons derrotados
                qtdAlgoDer++;

                // Sobe todos os algomons em uma posição, e leva o algomon derrotado para o final do algodex
                algoAux = algodex[0];
                for (i = 0; i < *qtdAlgodex - 1; i++)
                {
                    algodex[i] = algodex[i + 1];
                }
                algodex[*qtdAlgodex - 1] = algoAux; // Coloca o algomon derrotado na última posição
            }

            // Troca o próximo turno para o oponente
            turno = 1;
        }
    }

    // Imprime o resultado da batalha
    if (resultado)
        printf("Vitoria!\n");
    else
        printf("Que pena, todos os seus algomons em batalha foram derrotados.\n");

    // Retorna resultado da batalha
    return resultado;
}

// Adiciona um novo algomon ao fim do algodex, mas antes daqueles cuja vida é 0
void adicionaAlgomon(Algomon algoExi[MAXAGDEX], Algomon algodex[MAXAGDEX], int *qtdAcordados, int *qtdAlgodex, int indAlgo)
{
    // Declaração das variáveis
    int i = *qtdAlgodex - 1; // Auxiliar de contagem

    // Verifica se há algomons com 0 de vida no algodex, a fim de acrescentar
    //  o novo algomon na posição mais ao fim, mas antes daqueles cuja vida é 0
    if (*qtdAlgodex > 0)
    {
        // Para cada algomon desde o final do algodex, até quando encontrar um com vida maior que zero...
        for (i = *qtdAlgodex - 1; algodex[i].vida == 0; i--)
        {
            // Copiar esse algomon para a posição posterior
            algodex[i + 1] = algodex[i];
            // Dessa forma, ao final do loop, o i será a última posição em que há algomon
            // cuja vida é maior que 0. Logo, o novo algomon será inserido no espaço
            // após esse. O espaço foi "aberto" ao copiar os algomons com a vida zerada para a posição posterior.
        }
    }

    // Adiciona ao algodex do jogador o algomon de tal índice em algoExi
    algodex[i + 1] = algoExi[indAlgo];
    // Incrementa o número de algomons acordados no algodex
    *qtdAcordados = *qtdAcordados + 1;
    // Incrementa o número de algomons descobertos
    *qtdAlgodex = *qtdAlgodex + 1;

    // Imprime mensagem de captura
    printf("Voce capturou um %s!\n", algoExi[indAlgo].nome);

    return;
}

// Checa qual é o local visitado, e realiza as funções correspondentes, se houver. Retorna o código do local, de 0 a 6
int executaAcaoLocal(char mapa[MAPAL][MAPAC], int posJogador[2], int posUltimaCidade[2], Algomon algoExi[MAXAGDEX], Algomon algodex[MAXAGDEX], int algoDesc[MAXAGDEX], int *qtdAcordados, int *qtdAlgodex, int *qtdInsignias)
{
    // Declaração das variáveis
    char local = mapa[posJogador[0]][posJogador[1]]; // Caractere do local do mapa em que o jogador está
    int indAlgo;                                     // Índice em algoExi do algomon a ser adicionado no algodex
    int resultado = 0;                               // Guarda se o jogador venceu a batalha: 0 - derrota; 1 - vitória

    // Se o local for uma das cidades não visitadas...
    if (local >= 'a' && local <= 'k')
    {
        // Define o índice do algomon a ser adicionado igual à ordem da cidade (0 a 10)
        indAlgo = local - 'a';
        // Adiciona algomon ao algodex
        adicionaAlgomon(algoExi, algodex, qtdAcordados, qtdAlgodex, indAlgo);

        // Muda o caractere do local no mapa para o de cidade já visitada
        mapa[posJogador[0]][posJogador[1]] = '+';

        // Define a posição da última cidade visitada como a desta
        posUltimaCidade[0] = posJogador[0];
        posUltimaCidade[1] = posJogador[1];

        // Define a posição no vetor de algomons descobertos como descoberto (1)
        algoDesc[indAlgo] = 1;

        // Retorna 1, código para "cidade nova encontrada"
        return COD_CID_NV;
    }
    // Se for uma cidade já visitada...
    else if (local == '+')
    {
        // Define a posição da última cidade visitada como a desta
        posUltimaCidade[0] = posJogador[0];
        posUltimaCidade[1] = posJogador[1];

        // Retorna 2, código para "cidade já visitada encontrada"
        return COD_CID_VS;
    }
    // Se for um ginásio não visitado...
    else if (local == 'R' || local == 'X' || local == 'Y' || local == 'Z')
    {
        // Caso o ginásio seja o Z, e o jogador não tiver 3 insígnias, não permitir a batalha
        if (local == 'Z' && *qtdInsignias < 3)
        {
            // Impressão da mensagem de indisponibilidade da batalha
            printf("Voce precisa de tres insignias para lutar contra esse treinador!\n");

            // Define a posição do jogador como a posição da última cidade que ele visitou
            // Assim, o jogador retornará para a última cidade de onde veio
            posJogador[0] = posUltimaCidade[0];
            posJogador[1] = posUltimaCidade[1];

            algoDesc[14] = 1;

            // Retorna 3, código para "ginásio novo encontrado"
            return 3;
        }

        // Inicia batalha e guarda o resultado dela.
        // Caso haja vitória, define o índice em algoExi do algomon a ser adicionado ao algodex do jogador
        switch (local)
        {
        case 'R':
            indAlgo = 11;
            resultado = batalha(algoExi, algodex, qtdAcordados, qtdAlgodex, indAlgo);
            break;
        case 'X':
            indAlgo = 12;
            resultado = batalha(algoExi, algodex, qtdAcordados, qtdAlgodex, indAlgo);
            break;
        case 'Y':
            indAlgo = 13;
            resultado = batalha(algoExi, algodex, qtdAcordados, qtdAlgodex, indAlgo);
            break;
        case 'Z':
            indAlgo = 14;
            resultado = batalha(algoExi, algodex, qtdAcordados, qtdAlgodex, indAlgo);
            break;
        default:
            break;
        }

        // Se o jogador tiver ganhado a batalha...
        if (resultado)
        {
            // Adiciona um algomon local ao algodex
            adicionaAlgomon(algoExi, algodex, qtdAcordados, qtdAlgodex, indAlgo);
            // Incrementa o número de insígnias
            *qtdInsignias = *qtdInsignias + 1;
            // Muda o caractere do local no mapa para o de cidade já visitada
            mapa[posJogador[0]][posJogador[1]] = '+';

            // Caso o jogador tenha ganhado a batalha contra o treinador Z, retorna 5, código para "venceu o jogo"
            if (local == 'Z')
                return COD_VENCEU;
        }
        // Se o jogador tiver perdido a batalha...
        else
        {
            // Verifica se todos os algomons do algodex do jogador foram derrotados
            if (*qtdAcordados == 0)
            {
                // Caso positivo, retorna 4, código para "fim de jogo"
                return COD_PERDEU;
            }

            // Caso ainda haja algomons acordados...
            // Define a posição do jogador como a posição da última cidade que ele visitou
            // Assim, o jogador retornará para a última cidade de onde veio
            posJogador[0] = posUltimaCidade[0];
            posJogador[1] = posUltimaCidade[1];
        }

        // Define a posição no vetor de algomons descobertos como descoberto (1)
        algoDesc[indAlgo] = 1;

        // Se o jogador ainda tiver algomons acordados, retorna 3, código para "ginásio novo encontrado"
        return COD_GIN_NV;
    }

    // Por padrão, retorna 0, código para "nada encontrado"
    return COD_EST;
}

int main()
{
    // Declaração das variáveis
    //
    // ALGODEX
    // Lista de todos os algomons existentes
    // O comentário ao lado de cada um se refere ao código da cidade ou ginásio que guarda aquele algomon
    Algomon algoExi[MAXAGDEX] = {
        //{"Overlloader", 6, 10, 'R'}, extra não utilizado
        {"Switchish", 4, 30, 'C'},  // a
        {"Dattata", 3, 40, 'D'},    // b
        {"Equans", 3, 40, 'C'},     // c
        {"Forrow", 5, 20, 'R'},     // d
        {"Zubit", 5, 20, 'D'},      // e
        {"Elsecute", 3, 40, 'C'},   // f
        {"Magicount", 4, 30, 'R'},  // g
        {"Alakaram", 5, 20, 'D'},   // h
        {"Comparas", 5, 20, 'C'},   // i
        {"Iterino", 3, 40, 'R'},    // j
        {"Matreebell", 3, 40, 'D'}, // k
        {"Ifssauro", 5, 20, 'C'},   // R
        {"Whiledle", 3, 40, 'R'},   // X
        {"Vectoray", 4, 30, 'D'},   // Y
        {"Ceeplusplus", 8, 50, 'L'} // Z
    };
    // Lista dos algomons que o jogador possui
    Algomon algodex[MAXAGDEX];
    // Lista se o algomon de índice correspondente em algoExi já foi descoberto (1), ou não (0)
    int algoDesc[MAXAGDEX] = {0};

    // Demais variáveis
    int qtdAcordados = 0; // Quantidade de algomons acordados (com mais de 0 HP no algodex)
    int qtdAlgodex = 0;   // Quantidade de algomons algomons no algodex (acordados e derrotados)
    int qtdInsignias = 0; // Quantidade de insígnias

    // MAPA
    char mapa[MAPAL][MAPAC] = {
        {'Z', ' ', ' ', ' ', ' ', ' ', 'a', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '},
        {'|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', 'b', '-', '-', '-', '-', '-', 'c', ' ', ' ', ' ', ' '},
        {'|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '},
        {'d', '-', '-', '-', '-', '-', '+', '-', '-', '-', '-', '-', 'e', '-', '-', '-', '-', '-', 'f', '-', '-', '-', 'X'},
        {' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'},
        {' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', 'g', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'h'},
        {' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '},
        {'Y', '-', '-', '-', '-', '-', 'i', '-', '-', '-', 'j', '-', '-', '-', '-', '-', 'k', '-', '-', '-', '-', '-', 'R'}};
    int posJogador[2] = {3, 6};      // Índices da posição do jogador no mapa
    int posUltimaCidade[2] = {3, 6}; // Posição da última cidade que o jogador visitou

    // COMANDOS
    char cmd;         // Comando digitado pelo jogador
    int movimento;    // Guarda se o último comando resultou em um movimento (1) ou não (0)
    int localEnc = 2; // Código do local em que o jogador está: 0 - estrada [-, |]; 1 - cidade nova [#]; 2 - cidade já visitada [+]; 3 - ginásio novo; 4 - ginásio já visitado; 5 - ginásio novo em que houve fim de jogo; 6 - ginásio Z se houver vitória

    // Repetir a interface até finalizar o jogo (código 5 ou 6)
    do
    {
        // Impressão
        imprimirMapa(mapa, posJogador);
        imprimirAlgodex(algodex, algoDesc, qtdAcordados, qtdAlgodex, qtdInsignias);

        // Capta input
        cmd = getchar();

        // Repete interpretação do comando até que haja condição que o interrompa, a fim de continuar andando até algum local de relevância
        // Condições: comando não ser de movimento (wasd); não poder se movimentar mais naquela direção; ou ter chegado a ginásio ou cidade
        while (1)
        {
            // Interpretar input
            movimento = interpretaCmd(mapa, posJogador, algodex, qtdAlgodex, cmd);

            // Caso tenha havido movimento do jogador no mapa...
            if (movimento)
            {
                // Verifica se há cidade ou ginásio na posição e executa funções associadas
                localEnc = executaAcaoLocal(mapa, posJogador, posUltimaCidade, algoExi, algodex, algoDesc, &qtdAcordados, &qtdAlgodex, &qtdInsignias);
                // Se o local encontrado for diferente de uma estrada, parar repetição, afinal é local relevante
                if (localEnc != COD_EST)
                {
                    // Se encontrou um ginásio, e teve todos os algomons do algodex derrotados, declarar fim de jogo
                    if (localEnc == COD_PERDEU)
                    {
                        // Imprimir mensagem de fim de jogo
                        printf("================= FIM DE JOGO =================\n");
                    }
                    // Se encontrou o ginásio Z, e ganhou, declarar vitória no jogo
                    else if (localEnc == COD_VENCEU)
                    {
                        // Imprimir mensagem de vítória
                        printf("=========== PARABENS VOCE VENCEU! =============\n");
                    }
                    // Interrompe a repetição
                    break;
                }
            }
            // Caso não tenha havido movimento, interrompe a repetição
            else
                break;
        }

        // Limpa os demais caracteres digitados no comando, a fim de interpretar apenas o primeiro caractere
        while ((cmd = getchar()) != '\n' && cmd != EOF)
        {
        }

        //  Limpa tela
        //  printf("\n\n\n\n\n\n\n\n\n\n\n\n");
    } while (localEnc != COD_PERDEU && localEnc != COD_VENCEU);

    // Imprime créditos
    printf("Autoria: devgabmal\n");

    return 0;
}