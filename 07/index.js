// Programa que determina se uma pessoa deve pagar imposto de renda (IR) ou esta isenta com base em suas condiçoes e rendimentos

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; // em centavos

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO");
}
