

//-----SetTimeout with anonymous function
setTimeout(function () {
    console.log('Hello from callback')
}, 2000);

console.log('Hello from global scope');

// Hello from global scope
// script.js:2 Hello from callback



//-----SetTimeout with named function
setTimeout(changeText, 2000);

function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}

//------clearTimeout()
const timerId = setTimeout(changeText, 3000); //automatically executed

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId); //3 - timer id 
    clearTimeout(timerId); 
    console.log('timer Cancelled'); //timer Cancelled
});




