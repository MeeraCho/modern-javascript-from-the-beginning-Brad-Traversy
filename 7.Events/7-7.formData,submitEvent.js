const form = document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();
    
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    //form validation 
    if (item === '' || priority === '0') {
        alert('Please fill in all fields')
        return;
    }
}   

//formData object: lets you compile a set of key/value pairs to send using the Fetch or XMLHttpRequest API.
//name attribute < input < form: Only form elements with a name attribute will have their values passed when submitting a form
//FormData.entries() method: returns an iterator which iterates through all key/value pairs contained in the FormData. The key of each pair is a string object, and the value is either a string or a Blob.
function onSubmit2(e){
    e.preventDefault();
    const formData = new FormData(form); //FormData{}

    const item = formData.get('item'); // input name="item" - sdlkfsjdf
    const priority = formData.get('priority'); // select element에서 내가 선택한 필드의 벨류 -1

    const entries = formData.entries(); //Iterater{}
    for (let entry of entries) {
        console.log(entry); 
        //['item', '우유'] 
        //['priority', '1'] 
        console.log(entry[0]); 
        // item
        // priority
    }


    console.log(entries)
}


form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);

