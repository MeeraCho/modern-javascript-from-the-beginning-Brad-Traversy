//document.getElementById()
console.log(document.getElementById('app-title')); //<h1 class="hello" id="app-title">Shopping List</h1>
console.log(document.getElementById('app-title').getAttribute('id')); //app-title

//----------------Set attributes---------------
// title attribute 추가하기 
document.getElementById('app-title').title = 'Shopping List';

// class이름을 Hello -> title로 바꾸기 
document.getElementById('app-title').setAttribute('class', 'title'); 

const title = document.getElementById('app-title');

console.log(title); //<h1 class="title" id="app-title" title="Shopping List">Shopping List</h1>

// Get or change content
console.log(title.textContent); //Shopping List 
title.textContent = "Hello World"; 
title.innerText = 'Hello Again'; //same thing with textContent
title.innerHTML = '<strong>Shopping List</strong>' //use html tag

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px'; 

//-----------document.querySelector()-----------
//before this, we had to use getElementById 
//so whatever you selected, you had to have an id on. 
//jQuery gives us advantage that we could select anything
console.log(document.querySelector('h1')); //<h1 class="title" id="app-title" title="Shopping List" style="color: red; background-color: black; padding: 10px; border-radius: 10px;">…</h1>
console.log(document.querySelector('#app-title')); 
console.log(document.querySelector('.container')); //<div class="container">...</div>
console.log(document.querySelector('input[type="text"]'));//<input type="text" class="form-input" id="item-input" name="item" placeholder="Enter Item">
console.log(document.querySelector('li:nth-child(2)'));//<li>...</li>
console.log(document.querySelector('li:nth-child(2)').innerText);//Orange Juice

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.style.color = 'red';

//-----------Use these methods on other elements-----------
const list = document.querySelector('ul');
console.log(list); //<ul id="item-list" class="items">…</ul>flex
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';

//---------------Multiple Elements---------------
//new version: querySelectorAll()- returns NodeList[], 
//old version: getElementById/className/tags - return HTMLCollection[]

//NodeList[] is array like structure. Much like an HTMLCollection which we saw in the past. 
//the difference between the two, a NodeList can use high order array methods, but HTMLCollection can't
//HTMLCollection you must invert to an array 

const listItems = document.querySelectorAll('.item');
console.log(listItems) //NodeList(4) [li.item, li.item, li.item, li.item]

console.log(listItems[1])//<li class="item" style="color: red;">…</li>flex
console.log(listItems[1].innerText)//Orange Juice


//listItems.style.color = 'red'; //Error-need to access each item of NodeList
listItems[0].style.color = 'orange';

//****** forEach loop with querySelectorAll****
listItems.forEach((item)=>{
    item.style.color='orange'
}); //in JQuery, you could take the listItems variable and dot style color and they would all turn orange

listItems.forEach((item, index)=>{
    item.style.color='orange';

    if(index === 1){
        item.remove();
    }

    //it does change text but delete button is gone. Because button also included in the <li>
    if(index === 0){
        item.innerText = 'Oranges' 
    }

    //so use innerHTML and paste all the tag in the <li>
    if(index === 0){
        item.innerHTML = `Oranges
        <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
        </button>`
    }
}); 

//****** forEach loop with old version selector****
//return HTMLCollection()[] that doesn't applied to array method
//needed to change array 
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); //HTMLCollection(3) [li.item, li.item, li.item]
console.log(listItems2[2].innerText); //Milk

//***Error - forEach is not a function to HTMLCollection 
// listItems2.forEach((item) => {
//     console.log(item.innerText);
// }) 


//****** need to convert HTMLCollection[] to Array*****
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item) => {
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li'); //HTMLCollection[]
console.log(listItems3[0].innerText);







