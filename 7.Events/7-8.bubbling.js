//---------- Event Bubbling ----------
//with bubbling, the event is first captured and handled by the innermost element and then propagated to the outer elements. 
// html structure: body > form > second div > button 

// child element부터 parent로 가면서 event가 실행되고, 
// 중간에 중단하고 싶으면 e.stopPropagation()을 써준다 
const button = document.querySelector('form button');
const div = document.querySelector('form div:last-child');
const form = document.querySelector('form');

console.log(div)
button.addEventListener('click', () =>{
    alert('Button was clicked');
})

div.addEventListener('click', () =>{
    alert('Div was clicked');
})

form.addEventListener('click', (e) => {
    alert('Form was clicked');
    e.stopPropagation(); // child부터 form까지 event 실행 
})

document.body.addEventListener('click', () =>{
    alert('Body was clicked')
})