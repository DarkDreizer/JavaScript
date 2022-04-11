// Lines - lineas
let canvasExample = document.getElementById('example');
const canvasContext = canvasExample.getContext('2d');
// canvasContext.beginPath();

// for (let y = 10; y < 100; y += 10) {
//   canvasContext.moveTo(10, y);
//   canvasContext.lineTo(90, y);
// }
// canvasContext.stroke();

// fill - rellenado 
// canvasContext.moveTo(50, 10);
// canvasContext.lineTo(10, 70);
// canvasContext.lineTo(90, 70);
// canvasContext.fill();

// Curves - Curvas cuadraticas
// canvasContext.moveTo(10, 90);
// canvasContext.quadraticCurveTo(60, 10, 90, 90);
// canvasContext.lineTo(60, 10);
// canvasContext.closePath();
// canvasContext.stroke();

// Curvas de Bezier
// canvasContext.moveTo(10, 90);
// canvasContext.bezierCurveTo(10, 10, 90, 10, 50, 90);
// canvasContext.lineTo(90, 10);
// canvasContext.lineTo(10, 10);
// canvasContext.closePath();
// canvasContext.stroke();

// Curvas con arcos
// canvasContext.arc(50, 50, 40, 0, 7);
// canvasContext.arc(150, 50, 40, 0, 0.5 * Math.PI);
// canvasContext.stroke();

// Grafico de pastel
const results =  [
  {name: "Satisfied", count: 1043, color: "lightblue"},
  {name: "Neutral", count: 563, color: "lightgreen"},
  {name: "Unsatisfied", count: 510, color: "pink"},
  {name: "No comment", count: 175, color: "silver"}
];

let total = results.reduce((sum, {count}) => sum + count, 0);
let currentAngle = -0.5 * Math.PI;
for (let result of results) {
  let sliceAngle = (result.count / total) * 2 * Math.PI;
  canvasContext.beginPath();
  canvasContext.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
  canvasContext.lineTo(100, 100);
  canvasContext.fillStyle = result.color;
  console.log(result.color);
  canvasContext.fill();
}


