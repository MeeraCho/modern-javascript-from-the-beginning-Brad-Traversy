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

function onSubmit2(e){
    e.preventDefault();
    const formData = new FormData(form); //FormData{}

    // const item = formData.get('item'); // item from name attribute - sdlkfsjdf
    // const priority = formData.get('priority'); // 1 - 내가 선택한 필드의 벨류

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

