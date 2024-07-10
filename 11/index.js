// Programa que calcula o valor da parcela do Sucesso Compartilhado com meses em que a parcela foi igual a zero.

const rendaMensalEmCentavos = 150000; //1500 reais
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

const valorTotalDoCurso = 1800000; // 18 mil reais
const valorParcela = valorTotalDoCurso * 0.18; // 18% do valor total

if (mesesDecorridos <= 60 && totalJaPagoPeloAluno < valorTotalDoCurso) {
    const valorParcelaMensal = valorParcela / (60 - mesesDecorridos);

    if (rendaMensalEmCentavos >= 200000) {
        console.log(`O valor da parcela desse mes eh R$ ${valorParcelaMensal / 100} reais`);
    } else {
        console.log("O valor da parcela desse mes eh R$ 0 reais. Nenhum valor eh devido pois a renda do estudante esta abaixo do valor minimo de R$ 2000 reais.");
    }
} else {
    console.log("O aluno nao deve mais nada. Parabens pela conclusao do contrato!");
}