const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const now = new Date();

const dayOfWeek = weekDays[now.getDay()];
const clock = now.toTimeString();

console.log(`Today is: ${dayOfWeek}`);
console.log(`Time is: ${clock}`);