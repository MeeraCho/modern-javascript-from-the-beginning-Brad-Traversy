const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input'); 
const itemList = document.getElementById('item-list'); //ul
const clearBtn = document.getElementById('clear'); 
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;



//--------------Add items to DOM & LocalStorage------------
function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    
    //Validate Input
    if (newItem === ''){
        alert('Please add an item.')
        return; 
    }

    // Check for edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode')
        // 선택 아이템 로컬스토레지에서 없애기 
        removeItemFromStorage(itemToEdit.textContent);
        // edit-mode class 없애기 
        itemToEdit.classList.remove('edit-mode');
        // DOM에서 아이템 없애기 
        itemToEdit.remove();
        isEditMode = false; 
        // 위 작업을 하고 나서 input에 수정된 내용은 아랫줄에서 새롭게 아이템으로 추가된다
    }

    //Create item DOM element
    addItemToDOM(newItem)

    //Add item to local storage
    addItemToStorage(newItem)

    checkUI();

    itemInput.value = '';
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

function addItemToStorage(item){
    //check to see if there is a item already in localStorage
    const itemsFromStorage = getItemsFromStorage(); 

    // Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string first and then store to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));

}

//--------------Display items from storage---------------
function getItemsFromStorage(){
    let itemsFromStorage; 

    if (localStorage.getItem('items') === null){ 
        itemsFromStorage = []
    } else {
        //JSON.parse(): make array
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }

    return itemsFromStorage;

}

function displayItems(){
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
    checkUI()
}

//--------------Click items---------------
function onClickItem(e){
    if(e.target.parentElement.classList.contains('remove-item')) {
        // once click an icon, <li> will be removed. li > button > i
        removeItem(e.target.parentElement.parentElement);
    } else { 
        setItemToEdit(e.target);
    }
}

//--------------Edit items---------------
function setItemToEdit(item) {
    isEditMode = true;
    // 4.다른 아이템 클릭되면 원래 글자 검은색으로 돌아옴 
    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'))
    // 1.클릭되면 회색으로 변환
    item.classList.add('edit-mode');
    // 2.Add item btn -> Update Item 으로 변환 
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item'
    formBtn.style.backgroundColor = '#228B22'
    // 3.클릭한 아이템 글자가 input box 안에 나타남 
    itemInput.value = item.textContent; 
}

//--------------Remove items---------------
function removeItem(item){
    if(window.confirm('Are you sure?')){
        // Remove item from DOM
        item.remove();

        // Remove item from storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }
}

function removeItemFromStorage(item){
    let itemsFromStorage = getItemsFromStorage();

    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i != item);

    // Re-set to localstorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}   


function clearAllItems(e){
    //option 1 
    // itemList.innerHTML = '';
    //option 2 
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }

    // Clear from localStorage
    localStorage.removeItem('items') //option1 
    // localStorage.clear(); //option 2

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
    itemInput.value = '';
    
    const items = itemList.querySelectorAll('li');
    if (items.length === 0){
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333'

    isEditMode = false;
}


// -------------- Event Listeners ------------
function init(){
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearAllItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);
    
    checkUI();
}

init()








