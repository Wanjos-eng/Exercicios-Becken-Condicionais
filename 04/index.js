// Programa que informa se uma pedra de domino e uma bucha e imprime o nome da bucha

const ladoA = 3;
const ladoB = 3;

if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log("Bucha de Branco");
    } else if (ladoA === 1) {
        console.log("Bucha de As");
    } else if (ladoA === 2) {
        console.log("Bucha de Duque");
    } else if (ladoA === 3) {
        console.log("Bucha de Terno");
    } else if (ladoA === 4) {
        console.log("Bucha de Quadra");
    } else if (ladoA === 5) {
        console.log("Bucha de Quina");
    } else if (ladoA === 6) {
        console.log("Bucha de Sena");
    } else {
        console.log("Nao é uma bucha!!!");
    }
} else {
    console.log("Nao é uma bucha!!!");
}
