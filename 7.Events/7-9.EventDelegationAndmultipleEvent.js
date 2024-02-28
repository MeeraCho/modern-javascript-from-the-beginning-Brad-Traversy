//-------------Event Delegation and Multiple Events ----------
//we delegate the responsibility of handling an event to a parent element. By doing so, we avoid attaching multiple event listeners to individual elements, especially when dealing with a large number of similar elements, such as a list or a table.

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

//----------option 1 ---------
// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

//----------option 2 ---------
list.addEventListener('click', (e) =>{
    if (e.target.tagName === 'LI'){ //대문자로 써야함 
        e.target.remove();
    }
})

list.addEventListener('mouseover', (e) =>{
    if (e.target.tagName === 'LI'){ //대문자로 써야함 
        e.target.style.color = 'red';
    }
})


