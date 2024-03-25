const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle 
ctx.fillStyle = 'yellowgreen';
ctx.fillRect(100, 10, 150, 100); //x location, y, width, height

// Draw Circle 
ctx.fillStyle = 'pink'
ctx.arc(300, 300, 100, 0, Math.PI * 2); 
ctx.fill();

// Draw Lines
ctx.beginPath();
ctx.strokeStyle = 'indigo';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 2;
ctx.fillStyle = 'navy';
ctx.strokeStyle = 'maroon';
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);

// Draw image
const image = document.querySelector('img');
image.style.display = 'none'; //move to canvas from page

image.addEventListener('load', () => ctx.drawImage(image, 250, 250, 100, 100))