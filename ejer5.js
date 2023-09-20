function verificarNumero() {
  let numero = document.querySelector("#numeroInput").value;
  numero = parseInt(numero);

  if (!isNaN(numero) && numero >= 0 && numero <= 100) {
    document.getElementById("resultado").innerHTML = "El número está dentro del rango de 0 a 100.";
  } else {
    document.getElementById("resultado").innerHTML = "El número está fuera del rango de 0 a 100.";
  }
}
