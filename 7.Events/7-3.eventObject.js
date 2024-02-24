const logo = document.querySelector('img');

//----------------- onClick -------------------
function onClick(e){
    console.log(e.target);
    console.log(e.currentTarget);
    e.target.style.backgroundColor = 'black';
    console.log(e.type); //click 
    console.log(e.timeStamp); //1296
    console.log(e.clientX); //172 전체 window에서 위치 
    console.log(e.clientY); //85
    console.log(e.offsetX); //10 element안에서의 위치 
    console.log(e.offsetY); //11
    console.log(e.pageX); //165 page에서 위치 
    console.log(e.pageY); //90
    console.log(e.screenX); //166 page에서 위치 
    console.log(e.screenY); //192
}
logo.addEventListener('click', onClick);


//----------------- drag -------------------
function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX}, Y ${e.clientY}`;
}

logo.addEventListener('drag', onDrag);

//----------- bubble up (target vs currentTarget)------------
//클릭한 건 li인데 body로 연결되어 있어서 li에서 body까지 타고 타고 간다 
document.body.addEventListener('click', function(e){
    console.log(e.target); //<li> - which is clicked 
    console.log(e.currentTarget); //<body> - which is event attached to 
});

//----------e.preventDefault()------------
document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Link was clicked');
});



/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/