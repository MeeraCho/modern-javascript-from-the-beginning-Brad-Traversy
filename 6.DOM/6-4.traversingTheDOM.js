let output;

//----------- DOM Element Relationships --------------
//Get child elements
const parent = document.querySelector('.parent');
console.log(parent) //<div class="parent">

output = parent.children; //HTMLCollection(3) [div.child, div.child, div.child]
output = parent.children[1]; //<div class="child">Child 2</div>
output = parent.children[1].innerText; //child 2
output = parent.children[1].className; //child
output = parent.children[1].nodeName; //DIV

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

//firstElementChild,lastElementChild
parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child Three'

//parentElement
let child = document.querySelector('.child');
output = child.parentElement; //<div class="parent">
child.parentElement.style.border = '3px solid #ccc'
child.parentElement.style.padding = '10px';

//sibling elements
let secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem; //<div class="child" style="color: red;">Child Two</div>
output = secondItem.nextElementSibling; //<div class="child">Child Three</div>
secondItem.nextElementSibling.style.color = 'green'; //<div class="child">Child Three</div>
secondItem.previousElementSibling.style.color = 'orange'; //<div class="child">Child Three</div>


//----------- DOM Node Relationships --------------
//Node Types: Element, Attr, text, CDATASection, EntityReference, Entity, ProcessingInstruction, Comment, Document, DocumentType, DocumentFragment, Notation

output = parent.childNodes; //NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]
//NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]
// 0: text - white space is considered as text
// 1: comment
// 2: text
// 3: div.child
// 4: text
// 5: div.child
// 6: text
// 7: div.child
// 8: text
// length:9

output = parent.childNodes[0].textContent; 
output = parent.childNodes[0].nodeName; //text
output = parent.childNodes[3].nodeName; //DIV
output = parent.childNodes[3].textContent; //Child 1
output = parent.childNodes[3].outerHTML; //<div class="child">Child 1</div>
parent.childNodes[5].style.color = 'red'; 

output = parent.firstChild; //text
output = parent.lastChild; //text

parent.lastChild.textContent = 'Hello';

// Parent node
child = document.querySelector('.child');
output = child.parentNode; //<div class="parent">…</div>
output = child.parentElement; //<div class="parent">…</div>

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Siblings
secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem.nextSibling; //text(white space) - it's not a next element sibling. 
output = secondItem.previousSibling; //text

console.log(output); 



