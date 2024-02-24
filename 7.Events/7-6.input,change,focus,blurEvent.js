// ------------ input event ------------ 
// event를 keydown이 아니라 input event로 해야 select list를 볼 수 있음
// input event에서는 어떤 버튼 눌렀는지 알려면 key event에서 처럼 e.key가 아니라 
// e.target.value를 써줘야 한다. 

const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    heading.textContent = e.target.value;
    console.log(e.target.value);
}

itemInput.addEventListener('input', onInput); 

// ------------ select ---------------- 
priorityInput.addEventListener('input', onInput); // value 1, 2, 3
priorityInput.addEventListener('change', onInput); // 1, 2, 3

// ------------ checkbox: input  ------------ 
function onChecked(e){
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
    // selected: true, unselected: false 
    console.log(e.target.checked); // true, false
}

checkbox.addEventListener('input', onChecked);

// ------------ focus, blur  ------------ 
//input box 클릭했을 때 스타일 주기 
function onFocus(){
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '3px';
    itemInput.style.outlineColor = 'green';
}

function onBlur(){
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('focus', onFocus); 
itemInput.addEventListener('blur', onBlur); 

