/*
Permitir que eu decida quantas rodadas iremos fazer; ok
Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo); ok
Decidir de forma aleatória a decisão do computador(); ok
Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);ok
Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;ok
Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;ok
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador() e jogador);ok
Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
*/

const prompt = require("prompt-sync");

const teclado = prompt();
const jokenpo = ["0", "tesoura", "pedra", "papel"];
let random = () => jokenpo[Math.floor(Math.random() * 3) + 1];
let usuario = "";
let fim = "";
let vitoria = {
  usuario: 0,
  computador: 0,
  empate: 0,
};
let jogada = 0;

do {
  const rodadas = +teclado("Quantas rodadas irá jogar?     ");
  for (let i = 0; i < rodadas; i++) {
    let jogada = +teclado(
      "Aperte 1 para tesoura, 2 para pedra, 3 para papel:    "
    );
    do {
      if (jogada === 1) {
        usuario = jokenpo[jogada];
      } else if (jogada === 2) {
        usuario = jokenpo[jogada];
      } else if (jogada === 3) {
        usuario = jokenpo[jogada];
      } else {
        console.log("Utilize somente os numeros sugeridos");
        jogada = +teclado(
          "Aperte 1 para tesoura, 2 para pedra, 3 para papel:    "
        );
      }
    } while (jogada !== 1 && jogada !== 2 && jogada !== 3);
    let computador = random();
    console.log("usuario ", usuario, " Computador ", computador);

    if (
      (usuario === "pedra" && computador === "tesoura") ||
      (usuario === "papel" && computador === "pedra") ||
      (usuario === "tesoura" && computador === "papel")
    ) {
      console.log("vitoria usuario");
      vitoria.usuario += 1;
      console.log(vitoria.usuario);
    } else if (
      (usuario === "pedra" && computador === "papel") ||
      (usuario === "tesoura" && computador === "pedra") ||
      (usuario === "papel" && computador === "tesoura")
    ) {
      console.log("vitoria computador");
      vitoria.computador += 1;
      console.log(vitoria.computador);
    } else {
      console.log("empate");
      vitoria.empate += 1;
      console.log(vitoria.empate);
    }
    console.log();
  }
  if (vitoria.usuario > vitoria.computador) {
    console.log("Usuario vencedor da disputa");
  } else if (vitoria.computador > vitoria.usuario) {
    console.log("Computador vencedor da disputa");
  } else {
    console.log("Empate. Ninguem ganhou");
  }
  console.table(vitoria);
  fim = teclado(
    "Você deseja continuar jogando, digite 'nao' para sair, :    "
  ).toLowerCase();
} while (fim !== "nao");
