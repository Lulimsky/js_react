function nValidate() {
  const number = parseInt(document.getElementById("numeroInput").value);

  if (number >= 0 && number <= 100) {
    console.log("El número está dentro del rango de 0 a 100.");
  } else {
    console.log("El número está fuera del rango de 0 a 100.");
  }

}
