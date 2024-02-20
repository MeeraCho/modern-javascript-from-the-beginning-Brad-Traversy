// -------------before refactoring-------------
function createNewItemOldVersion(item) {

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

    console.log(li.innerHTML); //Cheese<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>
}

//-------------after refactoring ---------------
function createNewItem(item) {

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    const button = createButton('remove-item btn-link text-red');
    
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

    console.log(li.innerHTML); //Cheese<button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>
}

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon);

    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

createNewItem('cookie');
createNewItem('strawberries');



