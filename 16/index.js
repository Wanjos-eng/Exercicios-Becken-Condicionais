// Programa que verifica se o aluno pode realizar a rematricula na escola

const idadeDoAluno = 16;
const possuiResponsavel = false;

if (idadeDoAluno >= 18 || possuiResponsavel) {
    console.log("Rematrícula realizada com sucesso");
} else {
    console.log("Não é possível fazer a rematrícula");
}
