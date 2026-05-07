# Perfil ICEG — Manual do Operador

Jogo interativo de perfil vocacional desenvolvido para a **PUC Aberta 2026**. Apresenta perguntas situacionais sem resposta certa ou errada e, ao final, revela qual dos três cursos do ICEG — **Administração**, **Ciências Econômicas** ou **Ciências Contábeis** — mais combina com cada participante.

Suporta de **1 a 4 participantes** por sessão. Cada partida sorteia **6 perguntas** de um banco de 30.

> **Está com algum problema técnico?** → Vá direto para [Solução de Problemas](#-solução-de-problemas).

---

## Solução de Problemas

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| "ERRO: Node.js nao encontrado" ao abrir o `.bat` | Node.js não está instalado | Baixe e instale em **[nodejs.org](https://nodejs.org)** (versão LTS) e tente novamente |
| O navegador não abre automaticamente | Timeout do `.bat` passou antes do servidor subir | Abra manualmente: `http://127.0.0.1:5174` |
| O painel do operador não recebe dados do jogo | As abas estão em navegadores diferentes | Abra **ambas as abas no mesmo navegador** |
| O painel abre mas fica desconectado | O jogo foi aberto depois do painel | Recarregue a aba do painel (`F5`) |
| O servidor não inicia / porta ocupada | Outra instância já está rodando | Feche o terminal anterior e execute o `.bat` novamente |
| Tela em branco no jogo | Cache corrompido do navegador | `Ctrl + Shift + R` para recarregar sem cache |

---

## Pré-requisitos

- **Node.js** instalado ([nodejs.org](https://nodejs.org) — versão LTS)
- Windows 10 ou superior
- Navegador moderno (Chrome, Edge ou Firefox)
- Resolução recomendada: **1920 × 1080** (fullscreen)

---

## Como Iniciar

1. Abra a pasta `Perfil-ICEG-Jogo`
2. Dê duplo clique em **`Iniciar.bat`**
3. O navegador abrirá automaticamente com a tela do jogo após alguns segundos
4. Em uma **segunda aba**, acesse o painel do operador:

```
http://127.0.0.1:5174/operador
```

5. Para encerrar: **feche a janela do terminal** aberta pelo `.bat`

> Deixe o terminal aberto enquanto o jogo estiver em uso. Fechá-lo encerra o servidor.

---

## Endereços

| Tela | Endereço |
|---|---|
| Jogo (projeção / totem) | `http://127.0.0.1:5174` |
| Painel do Operador | `http://127.0.0.1:5174/operador` |

---

## Fluxo de Telas

O jogo avança por fases em sequência. A coluna **Ação do operador** indica o que o painel permite fazer em cada momento.

| # | Fase | O que aparece na tela | Ação do operador |
|---|---|---|---|
| 1 | **Atração** | Tela animada de espera | — Aguarda interação do público |
| 2 | **Menu** | Botões: Iniciar, Como Funciona, Créditos | — |
| 3 | **Como Funciona** | Slides explicativos do jogo | — |
| 4 | **Configurar Participantes** | Seleção de 1 a 4 participantes e nomes | — |
| 5 | **Confirmar Partida** | Resumo dos participantes antes de iniciar | — |
| 6 | **Intro da Pergunta** | Número da pergunta + animação de entrada | **Avançar** para pular a animação |
| 7 | **Leitura** | Texto da pergunta exibido (sem opções) | **Pausar** para dar tempo de leitura · **Avançar** quando prontos |
| 8 | **Respondendo** | Pergunta + 4 opções · vez do participante atual | **A/B/C/D** para selecionar · **Pausar** se necessário |
| 9 | **Feedback** | Significado da resposta escolhida | **Avançar** para o próximo participante ou pergunta |
| 10 | **Resultado Final** | Perfil predominante de todos os participantes | **Avançar** para os detalhes individuais |
| 11 | **Perfil Individual** | Detalhe do perfil de cada participante (repete por jogador) | **Avançar** para o próximo participante |
| 12 | **Comparação** | Gráfico radar comparando todos os participantes | **Avançar** |
| 13 | **Celebração** | Tela de encerramento com os perfis | **Avançar** |
| 14 | **Replay** | Opções: jogar de novo, novo grupo, voltar ao idle | Escolha a próxima ação |

---

## Painel do Operador

### Botões de Controle

| Botão | Fases disponíveis | Efeito |
|---|---|---|
| **Pausar / Retomar** | Leitura, Respondendo | Pausa ou retoma o timer da tela atual |
| **Avançar** | Intro, Leitura, Feedback, Resultado, Perfil, Comparação, Celebração | Avança para a próxima fase sem esperar o timer |
| **Reiniciar Partida** | Qualquer fase | Reinicia o jogo com os mesmos participantes (pede confirmação) |
| **Próximo Grupo** | Qualquer fase | Vai para a configuração de novos participantes (pede confirmação) |

### Seleção de Respostas

Disponível **somente na fase Respondendo**. Seleciona a opção pelo participante atual na tela do jogo.

| Botão no painel | Opção selecionada |
|---|---|
| **A** | Opção A |
| **B** | Opção B |
| **C** | Opção C |
| **D** | Opção D |

---

## Atalhos de Teclado

Com o foco na janela do painel (clique na aba do painel antes de usar):

| Tecla | Ação |
|---|---|
| `Espaço` | Pausar / Retomar |
| `Enter` | Avançar fase |
| `A` ou `1` | Selecionar opção A |
| `B` ou `2` | Selecionar opção B |
| `C` ou `3` | Selecionar opção C |
| `D` ou `4` | Selecionar opção D |

---

## Operando Múltiplos Grupos

Para atender vários grupos em sequência sem reiniciar o servidor:

1. Ao chegar na tela de **Replay**, clique em **"Novo Grupo"** no painel
2. A tela voltará para **Configurar Participantes** — insira os nomes do novo grupo
3. Repita o ciclo normalmente

Não é necessário fechar o navegador ou reiniciar o servidor entre grupos.

---

## Tutorial em Imagens

A pasta **`Tutorial Operadores/`** contém **5 imagens** com o passo a passo visual de configuração e operação do jogo. Consulte-as antes do evento.

| Imagem | Conteúdo |
|---|---|
| `01` | Iniciando o servidor e abrindo as telas |
| `02` | Configurando participantes no jogo |
| `03` | Usando o painel durante a partida |
| `04` | Lendo os resultados e perfis |
| `05` | Encerrando ou trocando de grupo |

---

## Estrutura da Pasta

```
Perfil-ICEG-Jogo/
├── Iniciar.bat           ← Execute este arquivo para iniciar
├── server.js             ← Servidor HTTP (não edite)
├── dist/                 ← Arquivos do jogo (não edite)
└── Tutorial Operadores/  ← Guia visual em imagens
```
