const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress')
}

const onKeyUp = (e) => {
    console.log('keyup')
}

//키 누르고 있는 동안 계속 적용 
const onKeyDown = (e) => {
    
    // --------- key: actual key-------
    console.log(e.key); //can see pressed key
    document.querySelector('h1').innerText = e.key;

    if(e.key === 'Enter'){
        alert('You pressed enter');
    }

    // --------- keyCode: number --------
    //https://www.toptal.com/developers/keycode/table
    if (e.keyCode === 13){
        alert('You pressed enter')
    }
    

    // ----------- code -----------
    console.log(e.code); //f:KeyF, 1:Digit1
    if(e.code === 'Digit1'){
        console.log('You passed 1')
    }

    //-------- repeat: detect holding down key
    if (e.repeat){
        console.log('You are holding down ' + e.key)
    }

    // -------- return true or false if the pressed key is right 
    console.log('Shift: ' + e.shiftKey); //해당 버튼 눌렀을 때 true 
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    //---------- press key at the same time
    if (e.shiftKey && e.key === 'K'){
        console.log('You hit shift + K')
    }
};

itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)


// ----------- space key ------------
// key: empty로 아무 것도 안나옴 
// keyCode: 32
// code: Space
