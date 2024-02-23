const logo = document.querySelector('img');
const onClick = () => console.log('click event');
const onDoubleClick = () => {
    if(document.body.style.backgroundColor !== 'purple'){
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');


//--------- Event Listeners -----------
logo.addEventListener('click', onClick); //click
//double click
logo.addEventListener('dblclick', onDoubleClick); //double click
//right click
logo.addEventListener('contextmenu', onRightClick); //right click
//click and hold 
logo.addEventListener('mousedown', onMouseDown); //click and hold -> mouse down and click
logo.addEventListener('mouseup', onMouseUp); //after click and hold and let go -> mouse down, mouse up and click
//scroll 
logo.addEventListener('wheel', onMouseWheel); //trigger when scroll over the logo 
//mouse hover
logo.addEventListener('mouseover', onMouseOver); 
logo.addEventListener('mouseout', onMouseOut);
//drag
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd); // after drag let go 

