// Programa que transforma uma nota em conceito

const nota = 8.5;

let conceito;

if (nota >= 9 && nota <= 10) {
    conceito = "A";
} else if (nota >= 8 && nota < 9) {
    conceito = "B";
} else if (nota >= 6 && nota < 8) {
    conceito = "C";
} else if (nota >= 4 && nota < 6) {
    conceito = "D";
} else if (nota < 4) {
    conceito = "E";
} else {
    console.log("Nota invalida");
}

console.log(`O estudante obteve conceito ${conceito}`);
