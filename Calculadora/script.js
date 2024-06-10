function calcular() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;

    if (isNaN(numero1)) {
        alert("Por favor, insira um número válido no primeiro campo.");
        return;
    }

    switch (operacao) {
        case "+":
            if (isNaN(numero2)) {
                alert("Por favor, insira um número válido no segundo campo.");
                return;
            }
            resultado = numero1 + numero2;
            break;
        case "-":
            if (isNaN(numero2)) {
                alert("Por favor, insira um número válido no segundo campo.");
                return;
            }
            resultado = numero1 - numero2;
            break;
        case "*":
            if (isNaN(numero2)) {
                alert("Por favor, insira um número válido no segundo campo.");
                return;
            }
            resultado = numero1 * numero2;
            break;
        case "/":
            if (isNaN(numero2)) {
                alert("Por favor, insira um número válido no segundo campo.");
                return;
            }
            if (numero2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        case "sqrt":
            if (numero1 < 0) {
                alert("Número negativo não tem raiz quadrada real.");
                return;
            }
            resultado = Math.sqrt(numero1);
            break;
        case "exp":
            if (isNaN(numero2)) {
                alert("Por favor, insira um número válido no segundo campo.");
                return;
            }
            resultado = Math.pow(numero1, numero2);
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
