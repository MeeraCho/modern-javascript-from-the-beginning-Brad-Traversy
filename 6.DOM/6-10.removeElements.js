function removeClearButton(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
}

function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    //option 1 
    // const li = document.querySelector(`li:nth-child(${itemNumber})`);
    //option 2
    const li = document.querySelectorAll('li')[itemNumber - 1];
    ul.removeChild(li);
}

function removeItem2(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();



// removeClearButton();
// removeFirstItem()
removeItem(2);
removeItem2(1);
removeItem4(1)
