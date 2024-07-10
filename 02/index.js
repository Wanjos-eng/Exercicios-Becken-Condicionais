//Programa que simula um jogo de par ou impar entre dois jogadores e diz quem foi o vencedor

const jogada1 = 5;
const jogada2 = 3;

const soma = jogada1 + jogada2;

if (soma % 2 == 0) {
    console.log("Par!!");
} else {
    console.log("Impar!!");
}