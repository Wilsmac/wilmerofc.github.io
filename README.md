# Wilmer 

mi página :D

<img src="https://github.com/Wilsmac.png" alt="wilmer" width="400"/>

lo q se usó:
- HTML
- Css
- JavaScript
- no se :v

```ts
// Función para sumar dos números
function sumar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}

// Función para multiplicar dos números
function multiplicar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
</head>
<body>
    <input type="number" id="num1">
    <input type="number" id="num2">
    <button onclick="sumar()">Sumar</button>
    <button onclick="multiplicar()">Multiplicar</button>
    <p id="resultado"></p>

    <script src="index.js"></script>
</body>
</html>

```