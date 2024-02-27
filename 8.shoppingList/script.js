const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input'); 
const itemList = document.getElementById('item-list'); //ul
const clearBtn = document.getElementById('clear'); 
const itemFilter = document.getElementById('filter');


//--------------Add items to DOM & LocalStorage------------
function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    
    //Validate Input
    if (newItem === ''){
        alert('Please add an item.')
        return; 
    }

    //Create item DOM element
    addItemToDOM(newItem)

    //Add item to local storage
    addItemToStorage(newItem)

    checkUI();

    itemInput.value = '';
}

function addItemToStorage(item){
    //check to see if there is a item already in localStorage
    let itemsFromStorage; 

    if (localStorage.getItem('items') === null){ 
        itemsFromStorage = []
    } else {
        //JSON.parse(): make array
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }

    // Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string first and then store to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));

}

function addItemToDOM(item){
    //Create list item 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);

    //Add li to the DOM 
    itemList.appendChild(li);
}

function createButton(classes) {
    const button = document.createElement('button')
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon; 
}

//--------------Remove items---------------
function removeItem(e){
    // once click an icon, <li> will be removed. li > button > i
    if (e.target.parentElement.classList.contains('remove-item')){
        if(window.confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

            checkUI();
        }
    }
}

function clearAllItems(e){
    //option 1 
    // itemList.innerHTML = '';
    //option 2 
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }

    checkUI();
}

//--------------Filter Items---------------
function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text) != -1){
            item.style.display = 'flex' //flex가 default로 되어있어서

        } else {
            item.style.display = 'none'
        }
    });
}

//--------------Clear UI State---------------
function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}


// -------------- Event Listeners ------------
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAllItems);
itemFilter.addEventListener('input', filterItems);

checkUI()








