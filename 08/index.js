// Programa que determina se uma pessoa pode ou nao brincar na Montanha Russa Muito Assustadora e calcula o valor do ingresso

const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log("ACESSO NEGADO");
} else {
    const valorIngresso = ehEstudante || idade < 18 ? 10 : 20;
    console.log(`${valorIngresso} reais`);
}
