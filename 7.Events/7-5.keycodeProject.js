//Press and key to get the keycode

// ------------- Method 1 ----------------
window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert');

    insert.innerHTML = `
    <div class="key">
        ${e.key === ' ' ? 'Space': e.key} 
        <small>e.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>e.keyCode</small>
    </div>
    <div class="key">
        ${e.code}
        <small>e.code</small>
    </div>
    `;
});



// ------------- Method 2 ----------------
const showKeycodes = (e) => {
    const insert = document.querySelector('#insert');

    //함수 호출 할 때마다 기존에 있던 키를 지우고 새 키만 보이게 한다.
    insert.innerHTML = ''

    // Map을 사용하기 위해 각 입력 받은 키를 오브젝트 형태로 모아 놓음
    const keyCodes = {
        'e.key' : e.key === ' '? 'Space': e.key,
        'e.keyCode': e.keyCode, 
        'e.code': e.code
    }

    //loop through this object
    // div#insert > ( div.key > textNode + small ) 만들기 
    for (let keyName in keyCodes){

        //div 만들기 
        const div = document.createElement('div');
        div.className = 'key';

        //small 만들기 
        const small = document.createElement('small');

        //textNode 만들기 
        const keyText = document.createTextNode(keyName)
        const valueText = document.createTextNode(keyCodes[keyName]);

        //append - small tag에 키 이름 넣기 
        small.appendChild(keyText);

        //append - div에 입력 받은 키 벨류 넣기 
        div.appendChild(valueText);

        //append - div에 small tag 넣기 
        div.appendChild(small);

        //append - 만들어진 div를 더 큰 inert div에 넣기 
        insert.appendChild(div);
    }
}

window.addEventListener('keydown', showKeycodes);



// ------------- Method 2 ----------------
// function showKeycodes(e){
//     const insert = document.getElementById('insert');
//     insert.innerHTML = '';

//     const keyCodes = {
//         'e.key': e.key === ' '? 'Space': e.key,
//         'e.keyCode': e.keyCode,
//         'e.code': e.code
//     }
    
//     for(let key in keyCodes) {
//         const div = document.createElement('div');
//         div.className = 'key';
//         const small = document.createElement('small');

//         const keyText = document.createTextNode(key);
//         const valueText = document.createTextNode(keyCodes[key]);

//         small.appendChild(keyText);
//         div.appendChild(valueText);
//         div.appendChild(small);

//         insert.appendChild(div);
//     }
// }