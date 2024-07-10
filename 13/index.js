// Programa que calcula o valor final do produto com desconto

const tipoDePagamento = "credito";
const valorDoProduto = 13000; //valor em centavos

let desconto;

if (tipoDePagamento === "credito") {
    desconto = 0.05; //5% de desconto
} else if (tipoDePagamento === "cheque") {
    desconto = 0.03; //3% de desconto 
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    desconto = 0.1; //10% de desconto
} else {
    console.log("Forma de pagamento invalida.");
}

const valorFinal = valorDoProduto - (valorDoProduto * desconto);

console.log(`Valor a ser pago: R$${(valorFinal / 100).toFixed(2)}`);//dividindo por 100 para transformar o valor finalde centavos para reais.
