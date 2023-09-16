document.getElementById('lanzarDado').addEventListener('click', function() {
    // Genera un número aleatorio entre 1 y 6
    const resultado = Math.floor(Math.random() * 6) + 1;
  
    // Muestra el resultado en la pantalla
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  });
  