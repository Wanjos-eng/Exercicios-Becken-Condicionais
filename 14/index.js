//Programa que verifica a quantidade de agua ingerida em litro.

const quantidadeDeAguaIngerida = 4;

if (quantidadeDeAguaIngerida < 1.5) {
    console.log("Risco Alto - Voce esta ingerindo pouquissima agua, beba mais agua!");
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log("Risco Moderado - Você esta ingerindo pouca agua, beba mais!");
} else {
    console.log("Risco Baixo - Voce esta ingerindo uma boa quantidade de agua, parabens!");
}
