console.log(window) // top level object 

console.log(window.document)
console.log(document) //window object doesn't need prefix

console.dir(document) //all the properties

console.log(document.body)
console.log(document.body.innerHTML)
console.log(document.body.innerText)

// HTMLCollection 
// which is very similar to an array. 
// You can access each link by index
console.log(document.links);
console.log(document.links[0]);

//--------- modifiy document--------
// document.body.innerHTML = '<h1>Hi, Everyone!</h1>';


//--------- document Methods--------
// document.write('Hello from JS') //write it to the browser, there is not targeting, no use

//specific targeting 
console.log(document.getElementById('main'));
const main = document.getElementById('main')
// main.innerHTML = '<h1>Hello from main</h1>';
document.querySelector('#main h1').innerText = 'How are you?';