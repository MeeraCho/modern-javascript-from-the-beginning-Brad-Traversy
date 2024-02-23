/* 
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/

//----------insertAdjacentElement-----------
function insertElement(){
    const filter = document.querySelector('.filter');

    const h2 = document.createElement('h2');
    h2.textContent = 'insertAdjacentElement';
    filter.insertAdjacentElement('beforebegin', h2);
}

//----------insertAdjacentText--------------
function insertText() {
    const item = document.querySelector('li:first-child');
    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

//----------insertAdjacentHTML--------------
function insertHTML(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>')
}

//----------insertBefore--------------------
//similar to appendChild 
function insertBeforeItem(){
    const ul = document.querySelector('ul'); //parent

    const li = document.createElement('li'); //child 
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}


//----------insertAfter--------------------
//there is no insertAfter 

function insertAfter(newEl, existingEl){
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling) //ul. you can use parentNode instead of parentElement
}
//New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

//Existing element to insert after
const firstItem = document.querySelector('li:first-child');

//Our custom function 
insertAfter(li, firstItem);


insertElement()
insertText()
insertHTML()
insertBeforeItem()
insertAfter() 
