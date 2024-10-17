function calcularSoma() {
    const input = document.getElementById('numero-input');
    const numero = parseInt(input.value);
    let soma = 0;

    if (isNaN(numero) || numero < 1 || numero > 100) {
        document.getElementById('resultado').innerText = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    for (let i = 1; i <= numero; i++) {
        soma += i;
    }

    document.getElementById('resultado').innerText = `A soma de 1 até ${numero} é: ${soma}`;
}

document.getElementById('calcular-btn').addEventListener('click', calcularSoma);
