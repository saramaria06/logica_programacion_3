function calcularFactorial() {
    let input = document.getElementById('numero').value;
    let numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingresa un número entero positivo.");
        document.getElementById('numero').value = '';
        document.getElementById('resultado').innerText = '';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${factorial}.`;
    console.log(`El factorial de ${numero} es ${factorial}.`);
}