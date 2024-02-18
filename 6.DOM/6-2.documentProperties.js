let output;

output = document.all; //deprecated-HTMLAllCollection(36)[html, head, meta...]
output = document.all[10]; //header
output = document.all.length; //36

output = document.documentElement; //html

output = document.head;//head
output = document.body;//body
output = document.head.children;//HTMLCollection(6)[meta,meta,meta,title,link,viewport:meta]
output = document.body.children;//HTMLCollection(2)[div.container, script]

output = document.doctype;//<!DOCTYPE html>
output = document.domain;//127.0.0.1
output = document.URL;//http://127.0.0.1:5501/DOM/index.html
output = document.characterSet;//UTF-8
output = document.contentType;//text/html

output = document.forms; //HTMLCollection [form#item-form, item-form: form#item-form]
output = document.forms[0]; //form#item-form
output = document.forms[0].id; //item-form
output = document.forms[0].method; //post
output = document.forms[0].action; //http://127.0.0.1:5501/DOM/index.html

//change dom
// document.forms[0].id = 'new-id';

output = document.links;
output = document.links[0]; //<a href="https://google.com">Google</a>
output = document.links[0].href; //https://google.com
//change DOM
output = document.links[0].id = 'google-link'; 
output = document.links[0].className = 'google-class'; 
output = document.links[0].href = 'https://facebook.com'; 

output = document.images; //HTMLCollection[]
output = document.images[0]; 
output = document.images[0].src; //http://127.0.0.1:5501/DOM/images/note.png

//class lists
output = document.links[0].classList; //DOMTokenList ['google-class', value: 'google-class']


//------- using forEach --------
//forms.forEach is not a function 
// document.forms.forEach((form) => console.log(form)); //Error

const form = Array.from(document.forms);
form.forEach((form)=>console.log(form));


console.log(output);

