const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelector('li');


function run(){
    // **** option 1 : set className 
    //- no good, can't remove class
    // console.log(itemList.className);
    // text.className = 'card dark'; 
    
    console.log(itemList.classList); //DOMTokenList(2)['item-list', 'items', value: 'item-list items']
    itemList.classList.forEach( c => console.log(c)); 

    // ***** option 2: toggle class 
    // text.classList.add('dark');
    // text.classList.remove('card');

    text.classList.toggle('dark');
    text.classList.toggle('hidden');
    text.classList.replace(card, 'dark');

    // //******** Change style ********
    itemList.style.lineHeight = '3';
    items.forEach((item, index) => {
        item.style.color = 'red';

        if( index === 2){
            item.style.color = 'blue';
        }
    })
}

document.querySelector('button').onclick = run;
