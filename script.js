
function calcularSoma() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    document.getElementById('resultado').innerText = `A soma de 1 a 100 é: ${soma}`;
}

document.getElementById('calcular-btn').addEventListener('click', calcularSoma);
