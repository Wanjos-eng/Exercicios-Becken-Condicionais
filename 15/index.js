//Programa que imprime nome e sobrenome ou somente o apelido

const primeiroNome = "Mario";
const sobrenome = "Luigi";
const apelido = "Bros";

console.log(apelido || (primeiroNome + " " + sobrenome) || primeiroNome);

