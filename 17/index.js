// Programa que calcula o valor restante e a quantidade de parcelas que faltam pagar em um parcelamento.

const valorDoProduto = 1000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

const valorRestante = valorDoProduto - valorPago;

let parcelasRestantes = Math.max(quantidadeDoParcelamento - Math.ceil(valorPago / (valorDoProduto / quantidadeDoParcelamento)), 0);
//Math.max - Usado para garantir que o valor não seja negativo para que o valor pago nao seja maior que o valor do produto
//Math.ceil - Usado para arrendondar para cima o valor da divisão
let valorParcela = 0;

if (valorRestante > 0) {
    valorParcela = valorRestante / parcelasRestantes;
}

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcela.toFixed(2)}`);
