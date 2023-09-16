function calcularAreaTriangulo(a, b, c) {
    // Calcula el semiperímetro
    const s = (a + b + c) / 2;
  
    // Aplica la fórmula de Herón para calcular el área
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    return area;
  }
  
  const lado1 = 5; // Cambia estos valores según los lados de tu triángulo
  const lado2 = 6;
  const lado3 = 7;
  
  const area = calcularAreaTriangulo(lado1, lado2, lado3);
  console.log(`El área del triángulo es: ${area}`);
  