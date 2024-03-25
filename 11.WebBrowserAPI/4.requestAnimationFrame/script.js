const image = document.querySelector('img')
let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  if (elapsed > 5000 ) {
    done = true;
  }

  if (done) {
    return;
  }

  // image.style.transform = `translateX(${elapsed / 20}px)`
  // image.style.transform = `translateY(${elapsed / 20}px)`
  // image.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 10}deg)` //공이 회전하면서 감 
  requestAnimationFrame(step); // runs a lot
  
}

requestAnimationFrame(step); // runs once 