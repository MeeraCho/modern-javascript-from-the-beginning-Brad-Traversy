// -----------setInterval()---------

// const intervalID = setInterval(mycallback, 1000, 'Hello')

// function mycallback(hello) {
//     console.log(hello, Date.now()); 
// }




let intervalID; 

function startChange() {
    if (!intervalID) { // if intervalID doesn't run 
        intervalID = setInterval(changeRandomColor, 1000);
    }
}

// function changeColor() {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }

function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 17777215).toString(16); 
    document.body.style.backgroundColor = `#${randomColor}`;
}

// clearInterval()
function stopChange(){
    clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);


