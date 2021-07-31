import './style.sass';


const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// // ctx.fillRect(10, 10, 150, 100);
//
// ctx.beginPath()
// ctx.moveTo(50, 100);
// ctx.moveTo(100, 200);
// ctx.closePath();
//
// ctx.lineWidth = 4;
// ctx.strokeStyle = 'black';
// ctx.stroke();

c.fillStyle = '#ccddff';
c.beginPath();
c.moveTo(50,20);
c.lineTo(200,50);
c.lineTo(150,80);
// c.bezierCurveTo(50,90,159,-30,200,30);
c.closePath();
c.fill();
c.strokeStyle = 'rgb(0,128,0)';
c.lineWidth = 5;
c.stroke();
