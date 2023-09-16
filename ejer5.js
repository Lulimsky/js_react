const numero = parseInt(prompt("Por favor, ingresa un número entero positivo:"));

if (numero <= 1 || isNaN(numero) || !Number.isInteger(numero)) {
  console.log("El número ingresado es inválido. Debe ser un entero positivo mayor que 1.");
} else {
  let suma = 0;
  for (let i = 0; i <= numero; i++) {
    suma += i;
  }
  console.log(`La suma de los números desde 0 hasta ${numero} es: ${suma}`);
}


