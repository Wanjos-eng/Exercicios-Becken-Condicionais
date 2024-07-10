//Programa que realiza a analise de uma jogada de pedra, papel e tesoura.

const jogada1 = "pedra"
const jogada2 = "tesoura"

//Condições de jogo para um jogador ganhar:
// 1º papel e outro tesoura
// 2º pedra e o outro papel
// 3º tesoura e  outro pedra

if (jogada1 === jogada2) {
    console.log("Empate!!");
} else if (jogada1 === "papel" && jogada2 === "tesoura" || jogada1 === "pedra" && jogada2 === "papel" || jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log(`${jogada2} venceu!!`);
} else {
    console.log(`${jogada1} vence`);
}