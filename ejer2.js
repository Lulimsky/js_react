function triangleArea(a, b, c) {
  let sp = (a + b + c) / 2;
  let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
  console.log (`The area is: ${area}`);
}

triangleArea(2, 4, 3.5);