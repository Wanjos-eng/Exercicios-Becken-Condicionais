// Programa que identifica o caractere

const caractere = "E";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiuscula");
} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minuscula");
} else if ((caractere >= "B" && caractere <= "Z") || (caractere >= "b" && caractere <= "z")) {
    console.log("Consoante");
} else if (caractere >= "0" && caractere <= "9") {
    console.log("Numero");
} else {
    console.log("Caractere nao identificado");
}
