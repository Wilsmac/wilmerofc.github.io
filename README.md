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
//index.css

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

label {
    font-weight: bold;
}

input[type="text"] {
    padding: 8px;
    margin-bottom: 10px;
    width: 200px;
}

button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 10px;
}

button:hover {
    background-color: #45a049;
}

p {
    margin-top: 20px;
    font-size: 18px;
}

index.
```