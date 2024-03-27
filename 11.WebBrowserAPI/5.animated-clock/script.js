const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
const lineColor = document.getElementById('line-color');
const largeHandColor = document.getElementById('large-hand-color');
const secondHandColor = document.getElementById('second-hand-color');

const canvas = document.getElementById('canvas');

function clock() {
  const now = new Date() //Sun Mar 24 2024 21:46:12 GMT-0600 (Mountain Daylight Time)

  //basic setup of canvas
  
  const ctx = canvas.getContext('2d')
  ctx.save(); // save the default state
  ctx.clearRect(0, 0, 500, 500); //repaint the screen 
  
  ctx.translate(250, 250); // Put 0, 0 in the middle
  ctx.rotate(-Math.PI / 2) // Rotate clock -90deg

  //Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4'; //light gray
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  
  // Draw clock face/border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value; //border color 
  ctx.fillStyle = faceColor.value; //light gray
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill()
  ctx.restore(); 

  // Draw hour marks
  ctx.save();
  ctx.strokeStyle = lineColor.value;
  for( let i = 0; i < 12; i++){
    ctx.beginPath();
    ctx.rotate(Math.PI / 6)
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();
  
  
  // Draw minute lines 
  ctx.save();
  ctx.strokeStyle = lineColor.value;
    ctx.lineWidth = 4; 
    for( let i = 0; i < 60; i++ ){
      if (i % 5 !== 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30)
    }
    ctx.restore();

    // Get current time
    const hr = now.getHours() % 12;
    const min = now.getMinutes();
    const sec = now.getSeconds();
    // console.log(`${hr}:${min}:${sec}`); 

    // Draw hour hand
    ctx.save();
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.strokeStyle = largeHandColor.value;
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // Draw minute hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.strokeStyle = largeHandColor.value;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
    ctx.restore();

    // Draw sec hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * sec)
    ctx.strokeStyle = secondHandColor.value;
    ctx.fillStyle = secondHandColor.value;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();

    // Draw Center circle 
    ctx.beginPath();
    ctx.arc( 0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

  ctx.restore(); //restore default state
  requestAnimationFrame(clock);
}
requestAnimationFrame(clock);

document.getElementById('save-btn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a'); //<a>태그 생성 
  link.download = 'clock.png'; //filename 
  link.href = dataURL;
  link.click();
});

// clock();