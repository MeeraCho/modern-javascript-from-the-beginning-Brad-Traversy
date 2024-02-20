// Quick & Dirty - using innerHTML
// web browser to reparse and recreate all the DOM node inside the ul element that is less efficient
// setting innerHTML will not automatically reattach event handlers to the new elements it creates
function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
    </button>`;

    document.querySelector('.items').appendChild(li);
}


// Clean & Performant - create new elements
// reusable, readable, can attach event handler
function createNewItem(item) {

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

createListItem('Eggs');
createNewItem('Cheese');