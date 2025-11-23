# Jokenpo - Jogo da Pedra, Papel e Tesoura

Resumo
---------
Jokenpo é uma implementação do jogo Pedra, Papel e Tesoura (Jokenpo). Este repositório contém uma aplicação que permite jogar contra a máquina ou contra outro jogador localmente. O README descreve como configurar, executar, testar e contribuir para o projeto.

Funcionalidades
---------
- Jogar contra a IA (computador) ou modo multiplayer local.
- Histórico de partidas e placar simples.
- Interface responsiva (web) ou modo CLI (se suportado).
- Sistema de pontuação e reinício de jogo.

Regras do jogo
---------
- Pedra vence Tesoura.
- Tesoura vence Papel.
- Papel vence Pedra.
- Empate quando as escolhas são iguais.

Tecnologias (exemplos)
---------
A tecnologia real pode variar; ajuste conforme o que o projeto usa.
- Frontend:  React Ts
- Estilo : tailwind
- Backend (opcional): Node.js/Express
- Build: npm 

Pré-requisitos
---------
- Node.js >= 14 (se a aplicação for em JavaScript)
- npm
- Navegador moderno (para interface web)

Instalação
---------
1. Clone o repositório:
    ```
    git clone https://github.com/LaryssaGabi/Jokenpo-Jogo.git
    cd Jokenpo-Jogo
    ```
2. Instale dependências:
    ```
    npm install
    ```

Execução (desenvolvimento)
---------
- Executar em modo dev:
  ```
  npm run dev

Build (produção)
---------
- Gerar build otimizado:
  ```
  npm run build
  ```
  ou
  ```
  yarn build
  ```
- Servir a pasta `dist`/`build` com um servidor estático.

Uso
---------
- Escolha o modo: "Contra a máquina" ou "Multiplayer".
- Selecione Pedra, Papel ou Tesoura.
- Veja o resultado e o placar.
- Reinicie o jogo a qualquer momento.

Estrutura sugerida de pastas
---------
- src/ — código fonte (frontend)
- public/ — ativos estáticos
- server/ — (opcional) backend
- tests/ — testes automatizados
- README.md — este arquivo

Scripts comuns (package.json)
---------
- npm run dev — iniciar ambiente de desenvolvimento
- npm run build — compilar para produção
- npm test — executar testes
- npm run lint — checar estilo

Boas práticas
---------
- Validar entradas do usuário.
- Isolar lógica de regras do jogo em módulos testáveis.
- Escrever testes unitários para a lógica de decisão (quem venceu).
- Manter UI acessível e responsiva.

Testes
---------
Exemplo de teste para a função que decide o vencedor:
- Entradas: escolha do jogador A e jogador B.
- Saída esperada: 'A', 'B' ou 'Empate'.


Possíveis melhorias
---------
- Suporte a multiplayer online via WebSocket.
- Estatísticas avançadas (percentual de vitórias, sequência de vitórias).
- Animações e efeitos sonoros.
- Modo torneio com múltiplos jogadores.


