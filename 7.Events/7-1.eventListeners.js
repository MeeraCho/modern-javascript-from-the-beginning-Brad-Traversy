const clearBtn = document.querySelector('#clear');

// 1. inline html event listener & invoke a function in JS - not recomended 
function onClear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
    // itemList.innerHTML = '';
    // items.forEach((item) => item.remove());
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

// 2. using .onclick 
clearBtn.onclick = function () {
    alert('Clear Items');
};

//3-1. using addEventListener() with named function
clearBtn.addEventListener('click', function(){
    alert('Clear Items')
});

//3-2 using anonymous function
clearBtn.addEventListener('click', () => alert('Clear Items'));
clearBtn.addEventListener('click', () => console.log('Clear Items'));

//3-3 using a function name
clearBtn.addEventListener('click', onClear);

//4. removeEventListener()
setTimeout(()=>clearBtn.removeEventListener('click', onClear), 5000);

//5. trigger an event programmatically - 5초 뒤 자동으로 버튼 클릭되어 버튼에 연결된 이벤트 실행됨 
setTimeout(() => clearBtn.click(), 5000) 



