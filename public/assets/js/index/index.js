function initializeCanvas(){
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.fillStyle="#0d6efd";
    context.fillRect(0,0,40,40);
}
function drawEllipse(){
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * .25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
ctx.fill();
}