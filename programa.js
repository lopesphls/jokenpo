/*
Permitir que eu decida quantas rodadas iremos fazer; ok
Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo); ok
Decidir de forma aleatória a decisão do computador();
Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador() e jogador);
Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
*/

const prompt = require("prompt-sync");

const teclado = prompt();
const jokenpo = ["tesoura", "pedra", "papel"];
let random = () => jokenpo[Math.floor(Math.random() * 3)];
let usuario = "";
let fim = "";
let vitoriaUsuario = 0;
let vitoriaComputador = 0;
let empate = 0;
let jogada;

do {
  const rodadas = +teclado("Quantas rodadas irá jogar?     ");
  for (let i = 0; i < rodadas; i++) {
    let jogada = +teclado(
      "Aperte 0 para tesoura, 1 para pedra, 2 para papel:    "
    );
    do {
      if (jogada === 0) {
        usuario = jokenpo[jogada];
      } else if (jogada === 1) {
        usuario = jokenpo[jogada];
      } else if (jogada === 2) {
        usuario = jokenpo[jogada];
      } else {
        console.log("Utilize somente os numeros sugeridos");
        jogada = +teclado(
          "Aperte 0 para tesoura, 1 para pedra, 2 para papel:    "
        );
      }
    } while (jogada !== 0 && jogada !== 1 && jogada !== 2);
    let computador = random();
    console.log("usuario ", usuario, " Computador ", computador);

    if (
      (usuario === "pedra" && computador === "tesoura") ||
      (usuario === "papel" && computador === "pedra") ||
      (usuario === "tesoura" && computador === "papel")
    ) {
      console.log("vitoria usuario");
      vitoriaUsuario += 1;
      console.log(vitoriaUsuario);
    } else if (
      (usuario === "pedra" && computador === "papel") ||
      (usuario === "tesoura" && computador === "pedra") ||
      (usuario === "papel" && computador === "tesoura")
    ) {
      console.log("vitoria computador");
      vitoriaComputador += 1;
      console.log(vitoriaComputador);
    } else {
      console.log("empate");
      empate += 1;
      console.log(empate);
    }
    console.log();
  }
  fim = teclado("digite 's' para sair:    ").toLowerCase();
} while (fim !== "s");
