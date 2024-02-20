//create Element
const div = document.createElement('div');

//create attributes 1 
div.className = 'my-element';
div.id = 'my-element';

//create attributes 2
div.setAttribute('title', 'My Element');

//add text 1
div.innerText = 'Hello World'; //<div class="my-element" id="my-element" title="My Element">Hello World</div>

//add text 2
const text = document.createTextNode('Hi, my World')
div.appendChild(text); //<div class="my-element" id="my-element" title="My Element">Hello WorldHi, my World</div>

//appendChild()
document.body.appendChild(div);
document.querySelector('ul').appendChild(div);


console.log(div); 

