const logo = document.querySelector('img');

function onClick(e){
    console.log(e.target);
    console.log(e.currentTarget);
    e.target.style.backgroundColor = 'black';
}

logo.addEventListener('click', onClick);

document.body.addEventListener('click', function(){
    console.log(e.target);
    console.log(e.currentTarget);
});


